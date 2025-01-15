import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

export default function BasicLayout(){
    return (
        <div className="body">
            <Header />
            <div style={{
                maxWidth: '1000px',
                margin: '0 auto',
            }}>
                <Outlet />
            </div>
            <Toaster position="bottom-right" />
        </div>
    );
}