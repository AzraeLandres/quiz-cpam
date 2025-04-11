type QuestionTextProps = {
  text: string;
};

const QuestionText = ({ text }: QuestionTextProps) => {
  return (
    <h1 className=" text-lg md:text-2xl uppercase font-semibold text-darkblue text-center ">
      {text}
    </h1>
  );
};

export default QuestionText;
