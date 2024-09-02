import CellRow from './CellRow';

function Board({ rows }) {
    return (
        <>
            {rows.map((cells, index) => (
                <div className="flex flex-col items-center">
                    <CellRow key={'row-' + index} cells={cells} />
                </div>
            ))}
        </>
    );
}

export default Board;