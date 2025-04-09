type QuestionHeaderProps = {
  text: string;
};

const QuestionHeader = ({ text }: QuestionHeaderProps) => {
  return <h1>{text}</h1>;
};

export default QuestionHeader;
