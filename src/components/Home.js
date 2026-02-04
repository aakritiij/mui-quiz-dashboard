import Quiz from "./Quiz";

function Home() {
  const quiz1 = [
    {
      question: "What does Material UI primarily provide?",
      options: [
        { text: "Backend APIs", correct: false },
        { text: "Prebuilt React UI components", correct: true },
        { text: "Database tools", correct: false },
        { text: "Testing framework", correct: false }
      ]
    },
    {
      question: "Which component is used for responsive layout?",
      options: [
        { text: "Box", correct: false },
        { text: "Grid", correct: true },
        { text: "Paper", correct: false },
        { text: "Stack", correct: false }
      ]
    }
  ];

  return <Quiz title="Quiz 1: Material UI Basics" questions={quiz1} />;
}

export default Home;
