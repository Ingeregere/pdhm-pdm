import CardProduct from '../../components/Card';
import CarrouselSlide from '../../components/Carrousel';
import './style.css'

function HomePage() {
  return (
    <div className={'tophome'}>
      <CarrouselSlide />
      <CardProduct />
    </div>
  );
}

export default HomePage;
