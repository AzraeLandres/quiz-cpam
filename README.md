src/
├── components/
│ ├── atoms/
│ │ ├── Button.tsx
│ │ ├── Card.tsx // carte de réponse cliquable
│ │ └── Title.tsx
│ ├── molecules/
│ │ ├── QuestionHeader.tsx // question + message "une ou plusieurs bonnes réponses"
│ │ └── AnswerList.tsx // liste de Cards avec logique de sélection
│ ├── organisms/
│ │ └── QuizStep.tsx // toute une étape : header + réponses + bouton valider
│ └── templates/
│ └── QuizLayout.tsx // structure de la page : header, contenu, footer
├── data/
│ └── questions.ts
├── App.tsx
