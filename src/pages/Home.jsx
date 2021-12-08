import CardProduct from '../components/Card';
import CarrouselSlide from '../components/Carrousel';
import Navigation from '../components/Navbar';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Navigation />
      <CarrouselSlide />
      <CardProduct />
    </>
  );
}

export default HomePage;
