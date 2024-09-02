import Cell from './Cell';

function CellRow({ cells }) {
    return (
        <div className="flex flex-row items-center space-x-0.5">
            {cells.map((live, index) => (
                <Cell key={'col-' + index} live={live} />
            ))}
        </div>
    );
}

export default CellRow;