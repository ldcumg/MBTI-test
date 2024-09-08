import { createTestResult } from "../api/testResult";
import { useNavigate } from "react-router-dom";
import TestForm from "./../components/TestForm";
import calculateMBTI from "./../utils/mbtiCalculator";
import useAuthStore from "../zustand/authStore";

const Test = () => {
  const { user } = useAuthStore((state) => state);
  
  const navigate = useNavigate();

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const resultData = {
      userId: user.userId,
      nickname: user.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };
    await createTestResult(resultData);
    navigate("/results");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default Test;
