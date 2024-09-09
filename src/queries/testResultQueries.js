import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteTestResult,
  getTestResults,
  updateTestResultVisibility,
} from "../api/testResult";

export const queryKeys = {
  boardController: {
    testResults: () => ["testResults"],
  },
};

export const useGetTestResultsQuery = () => {
  return useQuery({
    queryKey: queryKeys.boardController.testResults,
    queryFn: getTestResults,
  });
};

export const useDeleteTestResultsQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  });
};

export const useUpdateTestResultsQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  });
};
