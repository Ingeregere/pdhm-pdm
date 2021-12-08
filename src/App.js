import './App.css';
import HomePage from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/' exact component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
