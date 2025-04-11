import Header from "./components/molecules/Header";
import QuizLayout from "./components/templates/QuizLayout";

function App() {
  return (
    <div className="h-screen bg-lightblue flex flex-col items-center justify-center gap-6 ">
      <Header />
      <main className="flex  items-center justify-center w-full h-3/5 md:h-1/2 px-8">
        <QuizLayout />
      </main>
    </div>
  );
}

export default App;
