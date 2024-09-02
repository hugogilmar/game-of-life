import { useQuery } from '@tanstack/react-query';
import Header from '../components/Header';
import BoardItem from '../components/BoardItem';

function BoardList() {
  const { isPending, error, data } = useQuery({
    queryKey: ['boardListData'],
    queryFn: () =>
      fetch('http://localhost:3000/api/boards').then((res) =>
        res.json(),
      ),
  });

  if (isPending) return 'Loading...'

  return (
    <>
      <Header />
      <ul role="list" className="divide-y divide-gray-100 px-4">
        {data?.map((board) => <BoardItem key={board.id} board={board} />)}
      </ul>
    </>
  );
  }
  
  export default BoardList;