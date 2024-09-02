import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import CellRow from './CellRow';

function Board() {
    let { boardId } = useParams();
    const [number, setNumber] = useState(1);
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
        const url = new URL('http://localhost:3000/api/boards/' + boardId + '/next');
        url.searchParams.append('number', number);

        fetch(url.toString()).then(() => {
          refetch();
        });
    };

    const handleOnChange = event => {
        const { value } = event.target;
        setNumber(value);
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
                        <input type="number" className="ml-2 w-12 border border-gray-300 rounded-md p-1 text-sm text-gray-900" value={number} onChange={handleOnChange} />
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