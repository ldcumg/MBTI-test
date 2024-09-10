import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTestResults } from "../api/testResult";

// query key 객체로 관리
const queryKeys = {
  boardController: {
    testResults: () => ["testResults"],
  },
};

// testResults를 불러오는 query
export const useGetTestResultsQuery = () => {
  return useQuery({
    queryKey: queryKeys.boardController.testResults(),
    queryFn: getTestResults,
  });
};

// mutationFn를 인자로 받아오는 mutation과 invalidate
export const useMutateInvalidate = (Fn) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: Fn,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.boardController.testResults());
    },
  });
};
