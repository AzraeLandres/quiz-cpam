import clsx from "clsx";

type Props = {
  text: string;
  isSelected: boolean;
  isCorrect: boolean;
  showFeedback: boolean;
  onClick: () => void;
};

export default function AnswerOption({
  text,
  isSelected,
  isCorrect,
  showFeedback,
  onClick,
}: Props) {
  const base =
    "border p-2 rounded cursor-pointer text-center transition h-full flex items-center justify-center";

  const feedbackStyle = clsx({
    "bg-successlight border-green-600 text-green-800":
      showFeedback && isCorrect,
    "bg-red-100 border-red-600 text-red-800":
      showFeedback && !isCorrect && isSelected,
    "bg-white border-gray-300 text-gray-800":
      showFeedback && !isSelected && !isCorrect,
  });

  const normalStyle = clsx({
    "bg-lightblue border-darkblue text-darkblue": !showFeedback && isSelected,
    "bg-white border-gray-300 hover:bg-gray-100": !showFeedback && !isSelected,
  });

  return (
    <li
      onClick={onClick}
      className={clsx(base, showFeedback ? feedbackStyle : normalStyle)}
    >
      {text}
    </li>
  );
}
