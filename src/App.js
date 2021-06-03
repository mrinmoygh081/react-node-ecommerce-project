import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <div className="grid-container">
      <BrowserRouter>
        <Header />
        <Route exact path="/product/:id" component={ProductScreen}></Route>
        <Route exact path="/" component={HomeScreen}></Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
