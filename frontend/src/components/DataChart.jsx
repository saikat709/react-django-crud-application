import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ComposedChart, CartesianGrid, Bar, Legend, Tooltip, Area } from 'recharts';

const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 430, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 420, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 410, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 460, pv: 2400, amt: 2400 }, 
    { name: 'Page A', uv: 470, pv: 2400, amt: 2400 }
  ];

export default function DataChart( { data } ){

  return (
    <div className='flex flex-col gap-2'>

      <ComposedChart width={1000} height={400} data={data}>
        <Legend />
        <XAxis dataKey="date" />
        <YAxis  />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        <Bar dataKey="volume" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="close" stroke="#ff7300" />
      </ComposedChart>

      <LineChart width={1000} height={400} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="close" stroke="#8884d8" />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </div>
  );
}
