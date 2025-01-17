import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

// const dataFetchUrl = "http://127.0.0.1:8000/data/jsonModel/";
const stockDataModelUrl = import.meta.env.VITE_API_URL;

export default function Homepage(){
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect( () => {
        setIsLoading(true);
        fetch( stockDataModelUrl )
        .then( response => {
            if (!response.ok) {
                setError("Network response was not ok.");
                throw new Error("Network response was not ok.");
            }
            setIsLoading(false);
            return response.json();
        })
        .then( data =>{
            setData(data);
            setIsLoading(false);
        })
        .catch( error => {
            setIsLoading(false);
            console.error("Fetch error:", error)
        });
    }, [] );

    const onRemoveRow = (row)=>{
        setData( data.filter( r => row.id != r.id) );
    };

    const onDataAdd = (row)=>{
        const hasData = data.find(r => r.id === row.id );
        if ( hasData ){
            setData( data.map( r => r.id === row.id ? row : r ) );
        }else{
            setData( [row, ...data] );
        }
    }
    
    if ( error ) return ( <h1 className="text-error"> { error } </h1> );
    if ( isLoading ) return ( <Loader /> );
    if ( !data ) return <h1> Data is empty.. </h1>;
    
    return (
        <div>
            <DataTable data={data} isSelectable={false} onRemoveRow={onRemoveRow} onDataAdd={onDataAdd} />
            <Link to={'/graph'} className="btn btn-sm btn-primary mt-0 mx-auto px-6"> See Graphical Presentation </Link>
        </div>
    );
}