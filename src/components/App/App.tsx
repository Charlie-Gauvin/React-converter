import { useState } from 'react';

import Currencies from './Currencies/Currencies';
import Header from './Header/Header';
import Result from './Result/Result';
import Likes from './Likes/Likes';

import currencies from '../../data/currencies';

import './App.scss';

function App() {
  const [baseAmount, setBaseAmount] = useState(1);

  /*
    Objectif : Vue conditionnelle

    je veux un état (true ou false) pour afficher (ou non)
    la liste des devises
  */
  // 1. initialise l'état
  const [isOpen, setIsOpen] = useState(true);

  const toggleList = () => {
    setIsOpen((current) => !current);
  };

  return (
    <>
      <div className={isOpen ? 'app is-open' : 'app'}>
        <Header
          isOpen={isOpen} // 3. diffusion vers Toggler
          toggleList={toggleList} // 4. diffuser la modification du setter
          base={baseAmount}
          setBaseAmount={setBaseAmount}
        />

        <div className="main-wrapper">
          {isOpen && <Currencies currencies={currencies} />}
        </div>

        <Result base={baseAmount} currency={currencies[16]} />
      </div>

      <Likes />
    </>
  );
}

export default App;
