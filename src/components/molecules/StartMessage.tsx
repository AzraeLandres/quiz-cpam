import Button from "../atoms/Button";
import QuestionText from "../atoms/QuestionText";

type StartProps = {
  onStart: () => void;
};

const StartMessage = ({ onStart }: StartProps) => {
  return (
    <div className="text-center flex flex-col gap-3 items-center">
      <QuestionText text="Connaissez-vous la CPAM ?" />
      <p className="text-darkblue">
        Bienvenue sur un mini quiz pour tester vos connaissances <br />
        et découvrir mes compétences.
      </p>
      <Button variant="primary" onClick={onStart}>
        C’est parti !
      </Button>
    </div>
  );
};

export default StartMessage;
