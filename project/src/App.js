import './App.css';
import Footer from './components/Footer/footer.js';
import Header from './components/Header/header.js';
import { BrowserRouter, Link, Route, Switch } from "react-router";

function App() {
  return (
    <div className="cont">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
