import { useEffect, useState } from "react";
import TableFooter from "./TableFooter";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { BsPlus } from "react-icons/bs";
import toast from "react-hot-toast";
import AddOrEditStockData from "./AddOrEditStockData";
import Loader from "./Loader";

const stockDataModelUrl = import.meta.env.VITE_API_URL;

export default function DataTable( { data, isSelectable, onRemoveRow, onDataAdd } ){

    const [ totalSize, setTotalSize ]     = useState(0);
    const [ currentData, setCurrentdata ] = useState(null);
    const [ isLoading, setIsLoading ]     = useState(true);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ perPage, setPerPage ]         = useState(100);
    const [ itemToEdit, setItemToEdit ]   = useState(null);
    const [ isEditOrDeleteMode, setIsEditOrDeleteMode ] = useState(false);

    useEffect( () => {
        setIsLoading(true);
        setTotalSize(data.length);
        setCurrentdata(data.slice(1, 100));
        setIsLoading(false);
    }, []);


    useEffect ( ()=>{
        setCurrentdata( data.slice(perPage*( currentPage - 1), perPage*currentPage ) );
    }, [ perPage, currentPage, data ]);


    const deleteItem = async (row) => {
        document.getElementById('modal_for_update_or_delete_loading').showModal();
        fetch( stockDataModelUrl + `${row.id}/`, { method: 'delete' })
            .then((result) => {
                document.getElementById('modal_for_update_or_delete_loading').close();
                onRemoveRow(row);
                toast.success("Record has been deleted succesfuly.", { id: 'delete' } );
            }).catch((err) => {
                document.getElementById('modal_for_update_or_delete_loading').close();
                toast.error(`Some error occured: ${err}`, { id: 'delete' } );
            });
    };

    const updateItem = (row) => {
        setItemToEdit( r => row);
        // document.getElementById('modal_for_update_or_delete').showModal();
        // toast.success("Update is available on sqlModel version.", { id: 'update' } );
        setIsEditOrDeleteMode(true);
    };

    const addItem = async () => {
        setItemToEdit(null);
        // document.getElementById('modal_for_update_or_delete').showModal();
        setIsEditOrDeleteMode(true);
    };


    const onUpdateOrEditSubmit = ( formData ) => {
        setIsEditOrDeleteMode(false);
        document.getElementById('modal_for_update_or_delete_loading').showModal();
        fetch( stockDataModelUrl + ( formData.id ? formData.id + '/' : '' ), { 
            method: ( itemToEdit ? 'PUT' : 'POST'),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then( res =>{
            console.log(res);
            return res.json();
        })
        .then( result => {
            toast.success(`Record has been ${ itemToEdit ? "Edited" : "Created" } succesfuly.`, { id: 'delete' } );
            onDataAdd(result);
            document.getElementById('modal_for_update_or_delete_loading').close();
        }).catch( err => {
            toast.error(`Some error occured: ${err}`, { id: 'delete' } );
            document.getElementById('modal_for_update_or_delete_loading').close();
        });
    };

    if ( isLoading ) return ( <h1> Loading data ... </h1> );
    if ( !data || !currentData ) ( <p> Could not find data. </p> );

    return (
        <div className="overflow-x-auto pt-0 px-3 md:px-0">
            <div className="h-10"></div>
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
                                    onUpdate={ ()=>{ updateItem(row); }} 
                                    onDelete={ ()=>{ deleteItem(row); }}
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

            { isEditOrDeleteMode && <AddOrEditStockData item={itemToEdit} 
                                            onSumbit={onUpdateOrEditSubmit} 
                                            onClose={()=>{setIsEditOrDeleteMode(false)}}/>
            }

            <button className="absolute right-20 bottom-12 btn btn-primary btn-circle" onClick={addItem}>
                <BsPlus size={28} />
            </button>

            <dialog id="modal_for_update_or_delete_loading" className="modal">
                <div className="modal-box w-8/12 max-w-5xl">
                    Please wait... <Loader />
                </div>
            </dialog>

        </div>
    );
}