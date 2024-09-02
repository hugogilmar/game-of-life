import Check from '../components/CircleCheck';
import Uncheck from '../components/CircleUncheck';

function Cell({ live }) {
    return (
        <button className="inline-block flex items-center justify-items-center size-5 bg-slate-300 font-mono text-white">
            {live ? <Check /> : <Uncheck />}
        </button>
    );
}

export default Cell;