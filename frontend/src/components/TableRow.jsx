import { BsTrash } from "react-icons/bs"
import { FaEdit } from "react-icons/fa"

export default function TableRow({ dataRow, isSelectable, isInverColor, onDelete, onUpdate }){

    return (
        <tr className={isInverColor ? "table-row-inverse": " "}>
            { isSelectable && <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>}
            <td> { dataRow.date       } </td>
            <td> { dataRow.trade_code } </td>
            <td> { dataRow.low        } </td>
            <td> { dataRow.high       } </td>
            <td> { dataRow.open       } </td>
            <td> { dataRow.close      } </td>
            <td> { dataRow.volume     } </td>

            <th>
                <div className="flex gap-3">
                    <FaEdit  size={22} className="text-success" onClick={onUpdate} />
                    <BsTrash size={22} className="text-error"   onClick={onDelete} />
                </div>
            </th>
        </tr>
    );
}