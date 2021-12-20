import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/product" component={ProductDetail} />
          <Route path="/users" component={Users} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
