import { useEffect, useState } from "react";
import TableFooter from "./TableFooter";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import toast from "react-hot-toast";

export default function DataTable( { data, isSelectable } ){

    const [ totalSize, setTotalSize ] = useState(0);
    const [ currentData, setCurrentdata ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ perPage, setPerPage ] = useState(100);

    // console.log(data);

    useEffect( ()=>{
        setIsLoading(true);
        setTotalSize(data.length);
        setCurrentdata(data.slice(1, 100));
        setIsLoading(false);
    }, []);

    useEffect ( ()=>{
        setCurrentdata( data.slice(perPage*( currentPage - 1), perPage*currentPage ) );
    }, [ perPage, currentPage ]);

    if ( isLoading ) return ( <h1> Please wait ... </h1> );
    if ( !data || !currentData ) ( <p> Could not find data. </p> );

    return (
        <div className="overflow-x-auto pt-0 px-3 md:px-0">
            <div className="h-12"></div>
            <div className="overflow-scroll h-[70vh] mt-0 p-0 m-0">
                <table className="table">
                    <TableHead 
                        isSelectable={false} 
                        items={[ "Date", "Trade Code", "High", "Low", "Open", "Close", "Volume", "Action" ]}    
                        /> 
                    <tbody>
                        { currentData.map( ( row, ind ) => {
                            return ( 
                                <TableRow key={ind} 
                                        dataRow={row} 
                                        onUpdate={ ()=>{
                                            toast.success("Update is available on sqlModel version.", { id: 'update' } );
                                        }} 
                                        onDelete={ ()=>{
                                            toast.success("Delete is available on sqlModel version.", { id: 'delete' } );
                                        }}
                                        isInverColor={ ind % 2 == 1}     
                                />
                            );
                        }) }
                    </tbody>   
                </table>
            </div>

            <TableFooter 
                hasNext   = { currentPage < totalSize/perPage }
                hasPrev   = { currentPage > 1 }
                onNext    = { ()=>{ setCurrentPage(currentPage+1); } }
                onPrev    = { ()=>{ setCurrentPage(currentPage-1); } }
                onPerPage = { val => { setPerPage(val); }}
                start     = { perPage*( currentPage - 1 ) }
                end       = { perPage*( currentPage ) }
                total     = { totalSize }
            />
        </div>
    );
}