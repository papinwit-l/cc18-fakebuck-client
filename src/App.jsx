import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="min-h-screen bg-yellow-100">
      <Header />
      <main className="relative flex bg-blue-200 border h-screen pt-14">
        <LeftSidebar />
        <div className="border fixed top-14 h-[calc(100%-3.5rem)] right-[280px] left-[280px] overflow-auto">
          <div className="artboard phone-3 border">414x736</div>
          <div className="artboard phone-3 border">414x736</div>
          <div className="artboard phone-3 border">414x736</div>
        </div>
        <RightSidebar />
      </main>
    </div>
  );
}

export default App;
