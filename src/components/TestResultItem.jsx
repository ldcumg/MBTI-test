import useAuthStore from "../zustand/authStore";
import MBTI_DESCRIPTIONS from "../constant/mbtiDescriptions";
import { useMutateInvalidate } from "../queries/testResultQueries";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResult";

const TestResultItem = ({ result }) => {
  const { user } = useAuthStore((state) => state);

  const isOwner = result.userId === user.userId;

  const formattedDate = new Date(result.date).toLocaleString();
  const description =
    MBTI_DESCRIPTIONS[result.result] || "MBTI 유형 설명을 찾을 수 없습니다.";

  const updateMutate = useMutateInvalidate(updateTestResultVisibility).mutate;

  const handleToggleVisibility = async () => {
    try {
      updateMutate(result);
    } catch (error) {
      console.error("Visibility toggle failed:", error);
      alert("Visibility toggle failed. Please try again.");
    }
  };

  const deleteMutate = useMutateInvalidate(deleteTestResult).mutate;

  const handleDelete = () => {
    if (confirm("삭제하시겠습니까?")) {
      try {
        deleteMutate(result.id);
        alert("삭제되었습니다.");
      } catch (error) {
        console.error("Delete failed:", error);
        alert("Delete failed. Please try again.");
      }
    } else {
      alert("삭제를 취소하였습니다.");
    }
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-white">
      <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-3">
        <h4 className="text-xl font-semibold">{result.nickname}</h4>
        <p className="text-sm text-gray-400">{formattedDate}</p>
      </div>
      <p className="text-2xl font-bold text-yellow-400 mb-4">{result.result}</p>
      <p className="text-base text-gray-300 mb-4">{description}</p>
      {isOwner && (
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleToggleVisibility}
            className="bg-blue-500 py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition"
          >
            {result.visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 py-2 px-4 rounded-lg text-sm hover:bg-red-600 transition"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
