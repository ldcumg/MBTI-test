import useAuthStore from "../zustand/authStore";
import TestResultItem from "./TestResultItem";
import { useGetTestResultsQuery } from "../queries/testResultQueries";

const TestResultList = () => {
  const { user } = useAuthStore((state) => state);

  const { data: results, isPending, isError } = useGetTestResultsQuery();

  if (isPending) {
    return <div>로딩 중</div>;
  }

  if (isError) {
    return <div>오류 발생</div>;
  }

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
