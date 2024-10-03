import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import PostContainer from "./components/PostContainer";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="relative flex bg-gray-100 h-fit pt-14">
        <LeftSidebar />
        <PostContainer />
        <RightSidebar />
      </main>
    </div>
  );
}

export default App;
