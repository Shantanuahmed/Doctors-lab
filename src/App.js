import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Service from './components/Service/Service';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import HealthTips from './components/HealthTips/HealthTips';
import HealthQuote from './components/HealthQuote/HealthQuote';
import Doctors from './components/Doctors/Doctors';
import AboutUs from './components/AboutUs/AboutUs';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';



function App() {
  return (
    <div className="container-fluid">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              <Service></Service>
              <HealthTips></HealthTips>
              <HealthQuote></HealthQuote>
            </Route>
            <Route path="/home">
              <Home></Home>
              <Service></Service>
              <HealthTips></HealthTips>
              <HealthQuote></HealthQuote>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/service/:serviceDetails">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <AboutUs></AboutUs>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
