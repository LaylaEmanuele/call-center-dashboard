import { ChamadaTableItem } from './ChamadaTableItem';

export const TabelaChamadas: React.FC<any> = ({ chamadas }) => {
  return (
    <div className="w-full px-1 py-3 mb-12 xl:w-full xl:mb-0">
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
        <div className="px-4 py-3 mb-0 border-0 rounded-t">
          <div className="flex flex-wrap items-center">
            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
              <h3 className="text-base font-semibold text-gray-800">
                Chamadas
              </h3>
            </div>
          </div>
        </div>

        <div className="block w-full ">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-5 py-3 text-xs font-semibold text-left text-gray-600 uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                  Tipo de Ligação
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-left text-gray-600 uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                  Estado
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-left text-gray-600 uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                  Origem
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-left text-gray-600 uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                  Destino
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-left text-gray-600 uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                  Atendimento URA
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-left text-gray-600 uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                  Atendimento Ramal
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-left text-gray-600 uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                  Duração da chamada
                </th>
              </tr>
            </thead>
            <tbody>
              {chamadas &&
                chamadas.map((chamada, i) => (
                  <ChamadaTableItem {...chamada} key={i} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
