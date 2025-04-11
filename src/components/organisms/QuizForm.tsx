import { useState } from "react";
import quiz from "../../data/questions";
import QuizStep from "../../components/organisms/QuizStep";
import ResultMessage from "../molecules/ResultMessage";
import StartMessage from "../molecules/startMessage";

const QuizForm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);

  const [isFinished, setIsFinished] = useState(false);

  const handleNext = (isCorrect: boolean) => {
    if (isCorrect) setScore((prev) => prev + 1);

    const nextIndex = currentIndex + 1;
    if (nextIndex < quiz.length) {
      setCurrentIndex(nextIndex);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="w-full  flex flex-col gap-6 px-6 md:p-6 items-center">
      {!started ? (
        <StartMessage onStart={() => setStarted(true)} />
      ) : isFinished ? (
        <ResultMessage
          score={score}
          total={quiz.length}
          onRestart={handleRestart}
        />
      ) : (
        <QuizStep question={quiz[currentIndex]} onNext={handleNext} />
      )}
    </div>
  );
};
export default QuizForm;
