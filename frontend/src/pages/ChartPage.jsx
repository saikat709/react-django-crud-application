import DataChart from "../components/DataChart";
import { Link } from "react-router-dom";

export default function ChartPage(){
    return (
        <div className="mt-6 flex flex-col gap-2 justify-center items-center w-full overflow-scroll">
            <label className="flex justify-between w-full px-12">
                <p className="text-lg font-semibold"> Filter by </p>
                <select className="select select-bordered w-full max-w-xs">
                    <option selected> All </option>
                    <option> aiudhwqi </option>
                    <option> dkuih </option>
                </select>
            </label>
            <DataChart />
            <Link to={'/'} className="btn btn-rounded btn-primary mt-3">Go to Home</Link>
        </div>
    );
}