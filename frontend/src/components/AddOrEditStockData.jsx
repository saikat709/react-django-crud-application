import { useEffect, useState } from "react";
import { BsCalendarDate } from "react-icons/bs";

export default function AddOrEditStockData({ item, onSumbit, onClose }){

    const [ formData, setFormData] = useState( item || {} );


    useEffect( ()=>{
        setTimeout( ()=> document.getElementById('modal_for_update_or_delete').showModal(), 1);
        if ( item ){
            setFormData(item);
        } else {
            setFormData({date:'', trade_code:'', open:'', close:'',low:'',high:'',volume:''});
            // setFormData({});
        }
        // return () => {
        //     document.getElementById('modal_for_update_or_delete').close();
        // }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSumbit(formData);
    };

    const onValueChange = (e) => {
        setFormData({ ...formData, [ e.target.name ] : e.target.value });
        // console.log(e.target.name, e.target.value);
        // console.log(formData);
    };


    return (
        <div>
            <dialog id="modal_for_update_or_delete" className="modal">
                <div className="modal-box w-8/12 max-w-5xl">

                    <h1 className="text-lg md:text-xl font-bold pb-5 flex flex-col gap-2"> Data </h1>
                    <form method="post" className="flex flex-col gap-2" onSubmit={handleSubmit} onChange={onValueChange}>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="date" name="date" required className="grow" placeholder="Date" value={formData.date} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="trade_code" required className="grow" placeholder="Trade Code" value={formData.trade_code} />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            <input type="number" name="high" required className="grow" placeholder="High" value={formData.high}/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="number" name="low" required className="grow" placeholder="Low" value={formData.low}/>
                        </label>
                        
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="open" required className="grow" placeholder="Open" value={formData.open}/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="close" required className="grow" placeholder="Close" value={formData.close} />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="volume" required className="grow" placeholder="Volume" value={formData.volume} />
                        </label>

                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn btn-error" onClick={onClose}>Close</button>
                            </form>
                            {/* Submit button by default */}
                            <button type="submit" className="btn btn-success">Submit</button> 
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}