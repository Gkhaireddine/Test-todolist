import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Liste from "./components/Liste";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

function App(props) {
  const sessionLog = props?.log.logged;
  {
    if (sessionLog == false) {
      return (
        <>
          <LoginForm />
        </>
      );
    } else {
      return (
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/liste-tache" component={Liste} />
        </BrowserRouter>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    log: state?.user,
    tache: state?.tache,
  };
};
export default connect(mapStateToProps)(App);
