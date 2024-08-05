import { Currency } from '../../../@types';

// permet de charger le style de la page
import './style.scss';

type CurrenciesProps = {
  currencies: Currency[];
  setSelectedCurrency: (currency: Currency) => void;
};

function Currencies({ currencies, setSelectedCurrency }: CurrenciesProps) {
  const handleClick = (currency: Currency) => {
    setSelectedCurrency(currency);
  };

  const listItems = currencies.map((currency) => (
    <li key={currency.name} className="currencies-item">
      <div
        onClick={() => handleClick(currency)}
        onKeyDown={() => handleClick(currency)}
        role="button"
        tabIndex={0}
      >
        {currency.name}
      </div>
    </li>
  ));

  return (
    <main className="currencies">
      <h2 className="currencies-title">Currencies</h2>

      <ul className="currencies-list">{listItems}</ul>
    </main>
  );
}

export default Currencies;
