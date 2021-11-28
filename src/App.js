import './App.css';
import CardProduct from './components/Card';
import CarrouselSlide from './components/Carrousel';
import Navigation from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <CarrouselSlide />
      <CardProduct />
      <Footer />
    </Router>
  );
}

export default App;
