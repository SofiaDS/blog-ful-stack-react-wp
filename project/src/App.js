import "./App.css";
import Footer from "./components/Footer/footer.js";
import Header from "./components/Header/header.js";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <div>
      <div className="cont">
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
