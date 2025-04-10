import { useState } from "react";
import { Question } from "../../data/questions";
import QuestionHeader from "../atoms/QuestionHeader";
import Button from "../atoms/Button";
import AnswerOption from "../atoms/AnswerOption";

type QuizStepProps = {
  question: Question;
  onNext: (isCorrect: boolean) => void;
};

const QuizStep = ({ question, onNext }: QuizStepProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [validated, setValidated] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleValidate = () => {
    if (selectedOption !== null) {
      const correct = question.answer.includes(selectedOption);
      setIsCorrect(correct);
      setValidated(true);
    }
  };

  const handleNext = () => {
    onNext(isCorrect);
    setSelectedOption(null);
    setValidated(false);
  };
  return (
    <div>
      <QuestionHeader text={question.question} />

      <ul className="flex flex-col gap-2 w-full max-w-md">
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            text={option}
            isSelected={selectedOption === index}
            isCorrect={question.answer.includes(index)}
            showFeedback={validated}
            onClick={() => !validated && setSelectedOption(index)}
          />
        ))}
      </ul>

      {!validated ? (
        <Button onClick={handleValidate} disabled={selectedOption === null}>
          Valider
        </Button>
      ) : (
        <Button onClick={handleNext} variant="success">
          Suivant
        </Button>
      )}
    </div>
  );
};

export default QuizStep;
