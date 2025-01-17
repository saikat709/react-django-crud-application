import { useEffect, useState } from "react";
import DataChart from "../components/DataChart";
import { Link } from "react-router-dom";

const stockDataModelUrl = "http://127.0.0.1:8000/data/sqlModel/";

export default function ChartPage(){
    const [ data, setData ] = useState(null);
    const [ dataToUse, setDataToUse ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ tradeCodes, setTradeCodes ] = useState([]);
    const [ selectedTradeCode, setSelectedTradeCode ] = useState(null);
    
    
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
            const codes = new Set([]);
            data.forEach(element => {
                codes.add(element.trade_code);
            });
            setTradeCodes(Array.from(codes));
            setDataToUse(data.slice(700, 900));
            setIsLoading(false);
        })
        .catch( error => {
            setIsLoading(false);
            console.error("Fetch error:", error)
        });
    }, [] );


    const onFilterChange = ( e ) => {
        const val = e.target.value;
        if( val === "all" ){
            setDataToUse(data);
        } else {
            setDataToUse( data.filter( d => d.trade_code == val ) );
        }
    };
    
    if ( error )     return ( <h1 className="text-error"> { error } </h1> );
    if ( isLoading ) return ( <h1> Loading data ... </h1> );
    if ( !data || !tradeCodes )  return ( <h1> Data is empty.. </h1> );

    return (
        <div className="mt-6 flex flex-col gap-2 justify-center items-center w-full overflow-scroll">
            <label className="flex justify-between w-full px-12">
                <p className="text-lg font-semibold"> Filter by </p>
                <select className="select select-bordered w-full max-w-xs"
                        value={selectedTradeCode} 
                        onChange={ onFilterChange }
                    >
                    <option key='all' value='all'> All </option> 
                    { tradeCodes.map( code => {
                        return <option key={code} value={code}>{code}</option>;
                     })
                    }
                </select>
            </label>
            <DataChart data={dataToUse} />
            <Link to={'/'} className="btn btn-rounded btn-primary mt-3">Go to Home</Link>
        </div>
    );
}