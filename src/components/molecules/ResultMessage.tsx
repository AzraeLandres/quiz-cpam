import Button from "../atoms/Button";

type Props = {
  score: number;
  total: number;
  onRestart: () => void;
};

export default function ResultMessage({ score, total, onRestart }: Props) {
  const sendEmail = () => {
    const user: string = "azraellandres.pro";
    const domain: string = "gmail.com";
    window.location.href = `mailto:${user}@${domain}`;
  };
  return (
    <div className="text-center flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-indigo-900">Résultat</h2>
      <p className="text-lg">
        Tu as obtenu <strong>{score}</strong> bonne{score > 1 ? "s" : ""}{" "}
        réponse sur {total}.
      </p>
      <Button variant="secondary" onClick={onRestart}>
        Recommencer
      </Button>
      <Button variant="primary" onClick={sendEmail}>
        {" "}
        Contactez moi
      </Button>
    </div>
  );
}
