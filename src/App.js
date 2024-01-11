
import App_NavBar from "./components/App_NavBar";
import Banner from "./components/Banner";
import Comments from "./components/Comments";
import Menu from "./components/Menu";
import Pickoftheweek from "./components/Pickoftheweek";



function App() {
  return (
    <div className="App">
      <>
      < App_NavBar />
      < Banner />
      < Menu />
      < Pickoftheweek />
      < Comments />
      <div className="text-center my-3 text-primary small">
      <i class="bi bi-c-circle"></i> Copyright 2024-2025
      </div>
      </>
    </div>
  );
}

export default App;
