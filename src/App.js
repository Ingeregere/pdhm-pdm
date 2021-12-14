import './App.css';
import HomePage from './pages/Home/Home'
import Vision from './pages/Vision/Vision'
import Mission from './pages/Mission/Mission'
import NosPartenaires from './pages/NosPartainnaires/NosPartennaire'
import Innovation from './pages/Innovation/Innovation'
import National from './pages/National/National'
import Regional from './pages/Regional/Regional'
import Provincial from './pages/Provincial/Provincial'
import Zonal from './pages/Zonal/Zonal'
import Collinaire from './pages/Collinaire/Collinaire'
import BusinnessPlan from './pages/BisinessPlan/BusinessPlan'
import Reglement from './pages/Reglement/Reglement'
import Historique from './pages/Historique/Historique'
import ManueldeProcedure from './pages/ManueldeProcedure/ManueldeProcedure'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navbar';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/Vision' exact component={Vision} />
          <Route path='/Mission' exact component={Mission} />
          <Route path='/Nos-partenaires' exact component={NosPartenaires} />
          <Route path='/Innovation' exact component={Innovation} />
          <Route path='/National' exact component={National} />
          <Route path='/Regional' exact component={Regional} />
          <Route path='/Provinciale' exact component={Provincial} />
          <Route path='/Zonale' exact component={Zonal} />
          <Route path='/Collinaire' exact component={Collinaire} />
          <Route path='/Businness-plan' exact component={BusinnessPlan} />
          <Route path='/Règlement' exact component={Reglement} />
          <Route path='/Historique' exact component={Historique} />
          <Route path='/Procedure' exact component={ManueldeProcedure} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
