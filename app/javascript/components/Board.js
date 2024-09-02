import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Header from './Header';
import CellRow from './CellRow';

function Board() {
    let { boardId } = useParams();
    const queryClient = useQueryClient();
    queryClient.invalidateQueries({ queryKey: ['boardData'] });
    const { isPending, data, refetch } = useQuery({
    queryKey: ['boardData'],
    queryFn: () =>
        fetch('http://localhost:3000/api/boards/' + boardId).then((res) =>
        res.json(),
        ),
    });

    const handleNextStage = () => {
        fetch('http://localhost:3000/api/boards/' + boardId + '/next').then(() => {
          refetch();
        });
    };

    if (isPending) return 'Loading...'
    
    return (
        <>
            <Header />
            <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 mt-4">
                    <div className="flex items-center">
                        <div className="ml-4">
                            <h3 className="text-base font-semibold leading-6 text-gray-900">{data.name}</h3>
                            <p className="text-sm text-gray-500">Stages: {data.stage}</p>
                        </div>
                    </div>
                    </div>
                    <div className="ml-4 mt-4 flex flex-shrink-0">
                    <button type="button" className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onClick={handleNextStage}>
                        <span>Next stage</span>
                    </button>
                    <button type="button" className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <svg className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                        </svg>
                        <span>Email</span>
                    </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center space-y-0.5">
                {data?.cells?.map((row, index) => (
                    <CellRow key={'row-' + index} cells={row} />
                ))}
            </div>
        </>
    );
}

export default Board;