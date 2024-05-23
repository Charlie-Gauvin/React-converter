type ListProps = {
  currencies: { name: string }[];
};

export default function List({ currencies }: ListProps) {
  return (
    <div className="list-container">
      <ul>
        <h2>Currencies</h2>
        {currencies.map((list) => (
          <a key={list.name} href={list.name}>
            <li>{list.name}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
