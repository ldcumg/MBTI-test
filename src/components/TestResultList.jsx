import useAuthStore from "../zustand/authStore";
import { getTestResults } from "../api/testResult";
import TestResultItem from "./TestResultItem";
import { useQuery } from "@tanstack/react-query";

const TestResultList = () => {
  const { user } = useAuthStore((state) => state);

  const {
    data: results,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  if (isLoading) {
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
