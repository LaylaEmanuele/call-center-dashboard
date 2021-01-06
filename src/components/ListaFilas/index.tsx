import { getQtdChamadas, getQtdChamando } from '@lib/utils';
import { FilaItem } from './FilaItem';

export const ListaFilas: React.FC<any> = ({ filas, chamadas }) => {
  return (
    <div className="flex flex-col px-4 mt-8 ">
      <h3 className="pr-4 mb-4 text-2xl font-semibold text-black">Filas</h3>
      <div className="flex flex-row flex-wrap w-full space-x-5">
        {filas &&
          chamadas &&
          filas.map((fila, i) => (
            <FilaItem
              fila={fila}
              qtd={getQtdChamadas(chamadas, fila)}
              key={i}
              waiting={getQtdChamando(chamadas, fila)}
            />
          ))}
      </div>
    </div>
  );
};
