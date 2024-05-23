import Header from '../Header/Header';
import List from '../List/List';
import Footer from '../Footer/Footer';
import currencies from '../../data/currencies';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <List currencies={currencies} />
      <Footer />
    </div>
  );
}

export default App;
