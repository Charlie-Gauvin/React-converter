import { Currency } from '../../../@types';

import './style.scss';

type ResultProps = {
  base: number;
  currency: Currency;
};

function Result({ base, currency }: ResultProps) {
  const result = base * currency.rate;

  return (
    <footer className="result">
      <span className="result-value">{result.toFixed(2)}</span>
      <span className="result-currency">{currency.name}</span>
    </footer>
  );
}

export default Result;
