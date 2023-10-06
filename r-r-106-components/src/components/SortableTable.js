import Table from "./Table";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import useSort from "../hooks/useSort";

function SortableTable(props) {
    // Moved to hoohks/useSort.js
    // const [sortOrder, setSortOrder] = useState(null);
    // const [sortBy, setSortBy] = useState(null);

    const { config, data } = props;
    const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
        data,
        config
    );

    // Moved to hoohks/useSort.js
    // const setSortColumn = (label) => {
    //     if (sortBy && label !== sortBy) {
    //         setSortOrder("asc");
    //         setSortBy(label);
    //         return;
    //     }

    //     if (sortOrder === null) {
    //         setSortOrder("asc");
    //         setSortBy(label);
    //     } else if (sortOrder === "asc") {
    //         setSortOrder("desc");
    //         setSortBy(label);
    //     } else {
    //         setSortOrder(null);
    //         setSortBy(null);
    //     }
    // };

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => (
                <th
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => setSortColumn(column.label)}
                >
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            ),
        };
    });

    // Only sort data if sortOrder && sortBy are not null
    // If not null, make a copy of the 'data' prop
    // Find the correct sortValue function and use it for sorting

    // Moved to hooks/useSort.js
    //     let sortedData = data;
    //     if (sortOrder && sortBy) {
    //         const { sortValue } = config.find((column) => column.label === sortBy);
    //         sortedData = [...data].sort((a, b) => {
    //             const valueA = sortValue(a);
    //             const valueB = sortValue(b);

    //             const reverseOrder = sortOrder === "asc" ? 1 : -1;

    //             if (typeof valueA === "string") {
    //                 return valueA.localeCompare(valueB) * reverseOrder;
    //             } else {
    //                 return (valueA - valueB) * reverseOrder;
    //             }
    //         });
    //     }

    return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return (
            <div>
                <GoArrowUp />
                <GoArrowDown />
            </div>
        );
    }

    if (sortOrder === null) {
        return (
            <div>
                <GoArrowUp />
                <GoArrowDown />
            </div>
        );
    } else if (sortOrder === "asc") {
        return (
            <div>
                <GoArrowUp />
            </div>
        );
    } else {
        return (
            <div>
                <GoArrowDown />
            </div>
        );
    }
}

export default SortableTable;
