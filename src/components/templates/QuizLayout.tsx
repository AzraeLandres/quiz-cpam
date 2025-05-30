import QuizForm from "../organisms/QuizForm";

const QuizLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full md:w-[55%] bg-white rounded-2xl drop-shadow-main gap-3">
      <img src="./cpam.svg" alt="logo cpam vert et bleu" />
      <QuizForm />
    </div>
  );
};
export default QuizLayout;
