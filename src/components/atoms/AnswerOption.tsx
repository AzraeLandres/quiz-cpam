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
  const base = "border p-2 rounded cursor-pointer text-center transition";
  const style = clsx(base, {
    "bg-green-100 border-green-600 text-green-800":
      showFeedback && isCorrect && isSelected,
    "bg-red-100 border-red-600 text-red-800":
      showFeedback && !isCorrect && isSelected,
    "bg-white border-gray-300 text-gray-800": showFeedback && !isSelected,
    "bg-indigo-100 border-indigo-600 text-indigo-800":
      !showFeedback && isSelected,
    "hover:bg-gray-100 bg-white border-gray-300": !showFeedback && !isSelected,
  });

  return (
    <li onClick={onClick} className={style}>
      {text}
    </li>
  );
}
