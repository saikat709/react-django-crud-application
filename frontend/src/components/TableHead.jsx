

export default function TableHead( { items, isSelectable } ){

    return (
        <thead>
            <tr>
                { isSelectable && <th>
                    <label>
                        <input type="checkbox" className="checkbox border-gray-800" />
                    </label>
                    </th>
                }
                {
                    items.map( item => <th key={item}>{item}</th> )
                }
            </tr>
        </thead>
    );
}