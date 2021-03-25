import './App.css';
import {FooterContainer} from './container/footer'
import Navbar from './component/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Upper from './component/main1'

function App() {
  return (
    <Router>
      <Navbar />
      <Upper />
      <FooterContainer />
    </Router>
  );
}

export default App;
