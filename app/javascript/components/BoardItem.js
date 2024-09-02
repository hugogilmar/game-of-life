import { Link } from "react-router-dom";

function BoardItem({ board }) {
    const boardDate = new Date(board.updated_at).toISOString().slice(0, 10);

    return (
        <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
                <p className="text-md font-semibold leading-6 text-gray-900">
                    <Link to={'/boards/' + board.id}>{board.name}</Link>
                </p>
                <p className="mt-1 truncate text-xs text-gray-500">Dimensions: {board.cells.length}x{board.cells.length ? board.cells[0].length: board.cells.length}</p>
            </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">Stage: {board.stage}</p>
            <p className="mt-1 text-xs text-gray-500"><time dateTime={board.updated_at}>{boardDate}</time></p>
            </div>
      </li>
    );
}

export default BoardItem;