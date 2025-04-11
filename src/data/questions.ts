export type Question = {
  question: string;
  options: string[];
  answer: number[];
};
const quiz: Question[] = [
  {
    question: "1. Que signifie l’acronyme CPAM ?",
    options: [
      "Caisse Publique d’Assurance Médicale",
      "Centre de Protection d’Assurance Maladie",
      "Caisse Primaire d’Assurance Maladie",
    ],
    answer: [2],
  },
  {
    question:
      "2. Quel est le nom du site en ligne pour suivre ses remboursements santé ?",
    options: ["MonEspaceSanté.fr", "Ameli.fr", "MaCarteSanté.fr"],
    answer: [1],
  },
  {
    question:
      "3. Quel document faut-il présenter pour se faire rembourser ses soins ?",
    options: [
      "Une carte Vitale",
      "Une ordonnance",
      "Une attestation de mutuelle",
    ],
    answer: [0],
  },
  {
    question: "4. Que permet la carte Vitale ?",
    options: [
      "Accéder aux urgences sans rendez-vous",
      "Transmettre automatiquement ses infos à la CPAM",
      "Bénéficier d’une mutuelle gratuite",
    ],
    answer: [1],
  },
  {
    question: "5. Qui est l'alternant qu'il vous faut ?",
    options: ["Azraël Landres", "A. Landres", "Azraël L."],
    answer: [0, 1, 2],
  },
];

export default quiz;
