import Cell from './Cell';

function CellRow({ cells }) {
    return (
        <div className="flex flex-row items-center">
            {cells.map((live, index) => (
                <Cell key={'col-' + index} live={live} />
            ))}
        </div>
    );
}

export default CellRow;