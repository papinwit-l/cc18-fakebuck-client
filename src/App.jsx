import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="min-h-screen bg-yellow-100">
      <Header />
      <main className="relative flex bg-gray-100 border h-fit pt-14">
        <LeftSidebar />
        <div className="w-[680px] mx-auto min-h-[calc(100%-3.5rem)] my-3 flex flex-col gap-4 rounded-lg">
          {/* <div className="bg-white fixed top-14 ml-[350px] min-w-[100%] mr-[350px] overflow-auto"> */}
          <div className="artboard phone-3 border min-h-[414px]">414x736</div>
          <div className="artboard phone-3 border min-h-[414px]">414x736</div>
          <div className="artboard phone-3 border min-h-[414px]">414x736</div>
          <div className="artboard phone-3 border min-h-[414px]">414x736</div>
          <div className="artboard phone-3 border min-h-[414px]">414x736</div>
          <div className="artboard phone-3 border min-h-[414px]">414x736</div>
        </div>
        <RightSidebar />
      </main>
    </div>
  );
}

export default App;
