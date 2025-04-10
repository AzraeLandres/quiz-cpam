import { useState } from "react";
import quiz from "../../data/questions";
import QuizStep from "../../components/organisms/QuizStep";
import Button from "../atoms/Button";

const QuizForm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
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
    <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
      {isFinished ? (
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-indigo-900">Résultat</h2>
          <p className="text-lg">
            Tu as obtenu <strong>{score}</strong> bonne{score > 1 ? "s" : ""}{" "}
            réponse sur {quiz.length}.
          </p>
          <Button variant="primary" onClick={handleRestart}>
            Recommencer
          </Button>
        </div>
      ) : (
        <QuizStep question={quiz[currentIndex]} onNext={handleNext} />
      )}
    </div>
  );
};
export default QuizForm;
