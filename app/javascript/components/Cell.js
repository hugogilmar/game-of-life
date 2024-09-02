import Check from '../components/CircleCheck';
import Uncheck from '../components/CircleUncheck';

function Cell({ live }) {
    return (
        <div>
            <button className="inline-block w-96 h-96 px-8 bg-indigo-600 font-mono text-white">
                {live ? <Check /> : <Uncheck />}
            </button>
        </div>
    );
}

export default Cell;