import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTestResults } from "../api/testResult";

export const queryKeys = {
  boardController: {
    testResults: () => ["testResults"],
  },
};

export const useGetTestResultsQuery = () => {
  return useQuery({
    queryKey: queryKeys.boardController.testResults(),
    queryFn: getTestResults,
  });
};

export const useMutateInvalidate = (Fn) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: Fn,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.boardController.testResults());
    },
  });
};
