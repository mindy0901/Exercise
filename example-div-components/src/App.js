import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Promotion from "./components/Promotion";
import Slide from "./components/Slide";

function App() {
      return (
            <div className="App">
                  <Navbar />
                  <Slide />
                  <Products />
                  <Promotion />
            </div>
      );
}

export default App;
