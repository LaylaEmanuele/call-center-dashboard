import { RamalItem } from './RamalItem';

export const ListaRamais: React.FC<any> = ({ ramais }) => {
  return (
    <div className="flex flex-col px-4 mt-8 ">
      <div className="flex flex-row justify-between w-full">
        <h3 className="pt-4 pr-4 mb-4 text-2xl font-semibold text-black">
          Ramais
        </h3>
        <div className="grid items-center w-full grid-flow-row grid-cols-10 gap-2">
          <p className="text-center text-white bg-green-500 rounded-lg shadow-lg ">
            Online
          </p>
          <p className="text-center text-white bg-gray-500 rounded-lg shadow-lg">
            Offline
          </p>
          <p className="text-center text-white rounded-lg shadow-lg bg-danger-500">
            Ocupado
          </p>
          <p className="text-center text-white bg-yellow-500 rounded-lg shadow-lg ">
            Chamando
          </p>
        </div>
      </div>
      <div className="grid items-center w-full grid-flow-row grid-cols-12 gap-2">
        {ramais &&
          ramais.map((ramal, i) => <RamalItem ramal={ramal} key={i} />)}
      </div>
    </div>
  );
};
