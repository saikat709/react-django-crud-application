import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";

const dataFetchUrl = "http://127.0.0.1:8000/data/jsonModel/";

export default function Homepage(){
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect( () => {
        setIsLoading(true);
        fetch( dataFetchUrl )
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
    
    if ( error ) return ( <h1 className="text-error"> { error } </h1> );
    if ( isLoading ) return ( <h1> Loading data ... </h1> );
    if ( !data ) return <h1> Data is empty.. </h1>;
    
    return (
        <div>
            <DataTable data={data} isSelectable={false} />
        </div>
    );
}