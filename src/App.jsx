import { Glasses } from "./components/Glasses";

function App() {
  return (
    <>
      <header>
        <div className="container bg-gray-500 text-center uppercase text-2xl py-5 px-5 text-white">
          try glasses app online
        </div>
      </header>
      <section className="content">
        <div className="container py-5 px-5">
          <Glasses />
        </div>
      </section>
    </>
  );
}

export default App;
