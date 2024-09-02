import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleCreateBoard = () => {
    fetch('http://localhost:3000/api/boards', {
      method: 'POST',
    }).then(async (res) => {
      const board = await res.json();
      navigate('/boards/' + board.id);
    });
  };

  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            <Link to="/" relative="path">Boards</Link>
          </h3>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <button type="button" className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleCreateBoard}>Create new board</button>
        </div>
      </div>
    </div>
  );
}

export default Header;