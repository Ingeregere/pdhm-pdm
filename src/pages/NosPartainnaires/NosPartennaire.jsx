import CardProduct from '../../components/Card';
import Navigation from '../../components/Navbar';
import NosPartennairePage from '../../components/NosPartennaire/NosPartennaire'

function Vision() {
  return (
    <div className={'tophome'} >
      <NosPartennairePage />
      <CardProduct />
    </div>
  );
}

export default Vision;
