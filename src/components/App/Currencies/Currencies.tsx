import { Currency } from '../../../@types';

import './style.scss';

type CurrenciesProps = {
  currencies: Currency[];
};

function Currencies({ currencies }: CurrenciesProps) {
  const listItems = currencies.map((currency) => (
    <li key={currency.name} className="currencies-item">
      {currency.name}
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
