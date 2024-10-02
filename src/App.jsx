function App() {
  return (
    <div className="min-h-screen bg-yellow-100">
      <header className="bg-orange-200 h-14 w-full fixed top-0 z-10">
        Header
      </header>
      <main className="relative flex bg-blue-200 border h-screen pt-14">
        <div className="fixed top-14 h-[calc(100%-3.5rem)] bg-red-200 w-[280px] overflow-auto">
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
        </div>
        <div className="fixed top-14 h-[calc(100%-3.5rem)] right-[280px] left-[280px]">
          Content
        </div>
        <div className="fixed top-14 right-0 h-[calc(100%-3.5rem)] bg-red-200 w-[280px] overflow-auto">
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
          <div className="btn btn-xl m-10">Menu Item</div>
        </div>
      </main>
    </div>
  );
}

export default App;
