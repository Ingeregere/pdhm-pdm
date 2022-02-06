import CardProduct from '../../components/Card';
import CarrouselSlide from '../../components/Carrousel';
import VideoPdhm from '../../components/Video/video';
import './style.css'

function HomePage() {
  return (
    <div className={'tophome'}>
      <CarrouselSlide />
      <CardProduct />
      <VideoPdhm />
    </div>
  );
}

export default HomePage;
