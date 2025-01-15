import { LineChart, Line, XAxis, YAxis, ComposedChart, CartesianGrid, Bar, Legend, Tooltip, Area } from 'recharts';
const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 430, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 420, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 410, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 460, pv: 2400, amt: 2400 }, 
    { name: 'Page A', uv: 470, pv: 2400, amt: 2400 }
  ];

const xAxisData = [ "Page1", "Page 2", "Page 3", "Page 4" ];

export default function DataChart(){
  return (
    <ComposedChart width={1000} height={400} data={data}>
      <Legend />
      <XAxis dataKey="name" data />
      <YAxis />
      <Tooltip />
      
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
  );
}
