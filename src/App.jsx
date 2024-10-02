import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="min-h-screen bg-yellow-100">
      <Header />
      <main className="relative flex bg-blue-200 border h-screen pt-14">
        <LeftSidebar />
        <div className="bg-white mt-3 mx-auto">
          {/* <div className="bg-white fixed top-14 ml-[350px] min-w-[100%] mr-[350px] overflow-auto"> */}
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
