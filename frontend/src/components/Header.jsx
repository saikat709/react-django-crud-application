import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import { PiSunBold } from 'react-icons/pi';
import { FaHome } from 'react-icons/fa';
import { motion } from 'motion/react';

export default function MenuAppBar() {
    const { pathname } = useLocation();
    const [ isDark, setIsdark ] = useState(false);

    return (
        <div className="nav">
            <div className='w-full lg:w-5/6'>
                <div className="flex-none">
                    <button className='btn btn-warning btn-rounded btn-circle'
                        onClick={()=>{
                            setIsdark(!isDark);
                        }}
                        >
                        { isDark ?
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 90 }}
                            >
                                <PiSunBold size={31} />
                            </motion.div>
                            :
                            <motion.div>
                                <FaMoon size={31} />
                            </motion.div>
                        }
                    </button>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">CRUD Application</a>
                </div>
                {/* <Link to={ pathname == '/' ?  '/graph' : '/' } className="icon-button">
                    { pathname == '/' ? <BsGraphUp  size={30} className='inline-block text-black' /> 
                    : <FaHome size={30} className='inline-block text-black' />}
                    <button className="text-black">
                        { pathname == '/' ? "Graph" : "Home" }
                    </button>
                </Link> */}
            </div>
        </div>
    );
}
