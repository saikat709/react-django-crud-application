import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos, MdKeyboardArrowDown } from "react-icons/md";

export default function TableFooter({ hasNext, hasPrev, onNext, onPrev, onPerPage, start, end, total }) {
    const [ selected, setSelected ] = useState(100);
    
    return (
        <div className='flex justify-end items-center gap-2 text-white mb-3 p-2 '>
            <div className="flex justify-center items-center underline underline-offset-4  mr-8">
                <select className="font-bold p-3 underline" 
                        value={selected}
                        onChange={(e)=>{ 
                            onPerPage(e.target.value); 
                            setSelected(e.target.value);
                        }}
                    >
                    <option value={50}>  50  items in a page  </option>
                    <option value={100}> 100 items in a page  </option>
                    <option value={150}> 150 items in a page  </option>
                    <option value={200}> 200 items in a page  </option>
                    <option value={300}> 300 items in a page  </option>

                </select>
            </div>
            <MdArrowBackIosNew size={20} className={ !hasPrev ? "text-gray-600" : " " } onClick={ hasPrev ? onPrev : null}/> 
            <p className="font-bold">{start} to {end} of {total} </p>  
            <MdArrowForwardIos size={20} className={ !hasNext ? "text-gray-600" : " " } onClick={ hasNext ? onNext : null}/> 
        </div>
    );
}