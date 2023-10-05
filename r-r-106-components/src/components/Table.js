import { Fragment } from "react"; // Used when need an HTML element inside some of the table elements such as <tr>

function Table({ data, config, keyFn }) {
    const renderedHeaders = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }
        return <th key={column.label}>{column.label}</th>;
    });

    const renderedRows = data.map((eachRow) => {
        const renderedCells = config.map((eachColumn) => {
            return (
                <td className="p-2" key={eachColumn.label}>
                    {eachColumn.render(eachRow)}
                </td>
            );
        });
        return (
            <tr className="border-b" key={keyFn(eachRow)}>
                {renderedCells}
            </tr>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">{renderedHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );
}

export default Table;
