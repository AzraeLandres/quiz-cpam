import { useState } from "react";
import { Question } from "../../data/questions";

import Button from "../atoms/Button";
import AnswerOption from "../atoms/AnswerOption";
import QuestionText from "../atoms/QuestionText";

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
      <QuestionText text={question.question} />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 gap-4 w-full ">
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
      <section className="flex justify-center mt-4">
        {!validated ? (
          <Button onClick={handleValidate} disabled={selectedOption === null}>
            Valider
          </Button>
        ) : (
          <Button onClick={handleNext} variant="success">
            Suivant
          </Button>
        )}
      </section>
    </div>
  );
};

export default QuizStep;
