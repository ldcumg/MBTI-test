import useAuthStore from "../zustand/authStore";
import TestResultItem from "./TestResultItem";
import { useGetTestResultsQuery } from "../queries/testResultQueries";

const TestResultList = () => {
  const { user } = useAuthStore((state) => state);

  const { data: results, isPending, isError } = useGetTestResultsQuery();

  if (isPending) {
    return <div className="flex justify-center items-center">로딩 중입니다...</div>;
  }

  if (isError) {
    return <div className="flex justify-center items-center">오류가 발생했습니다.</div>;
  }

  // results의 객체 중 visibility가 true인 객체 또는 userId가 로그인한 userId와 일치하는 결과들만 나열하기
  return (
    <div className="space-y-4">
      {results
        .filter((result) => result.visibility || result.userId === user.userId)
        .map((result) => (
          <TestResultItem key={result.id} result={result} />
        ))}
    </div>
  );
};

export default TestResultList;
