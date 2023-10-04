function Table({ data, config, keyFn }) {
    const renderedHeaders = config.map((column) => {
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
