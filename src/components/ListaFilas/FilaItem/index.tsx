export const FilaItem: React.FC<any> = ({ fila, qtd, waiting }) => {
  return (
    <div className="flex flex-col px-5 py-4 bg-white rounded-lg shadow-lg">
      <p className="text-gray-600">
        Name:{' '}
        <span className="font-medium text-black">
          {fila.name.substring(0, 4)}
        </span>
      </p>
      <p className="text-gray-600">
        Quantidade de ligações na fila:
        <span className="font-medium text-black"> {qtd}</span>
      </p>
      <p className="text-gray-600">
        Quantidade de ligações chamando:
        <span className="font-medium text-black"> {waiting}</span>
      </p>
    </div>
  );
};
