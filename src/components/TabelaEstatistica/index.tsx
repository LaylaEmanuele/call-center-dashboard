export const TabelaEstatistica: React.FC<any> = ({
  ramais,
  filas,
  chamadas,
}) => {
  return (
    <div>
      <h1 className="pt-4 pr-4 mb-4 text-2xl font-semibold text-black">
        Estatísticas
      </h1>

      <div className="flex flex-wrap w-full mt-4">
        <div className="w-full px-1 mb-12 xl:w-full xl:mb-0">
          <table className="items-center bg-transparent border-collapse shadow-lg table-auto text-2xs">
            <thead>
              <tr>
                <th className="px-6 py-3 font-bold text-left text-black uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                  Total de Ramais
                </th>
                <th className="px-6 py-3 font-bold text-left text-black uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                  Ramais Disponíveis
                </th>
                <th className="px-6 py-3 font-bold text-left text-black uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                  Ramais Ocupados
                </th>
                <th className="px-6 py-3 font-bold text-left text-black uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                  Ramais Offline
                </th>
                <th className="px-6 py-3 font-bold text-left text-black uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                  Em fila
                </th>
                <th className="px-6 py-3 font-bold text-left text-black uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                  Recebidas
                </th>
                <th className="px-6 py-3 font-bold text-left text-black uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                  Atendidas
                </th>
                <th className="px-6 py-3 font-bold text-left text-black uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                  Abandonadas
                </th>
                <th className="px-6 py-3 font-bold text-left text-black uppercase whitespace-no-wrap align-middle bg-gray-100 border border-l-0 border-r-0 border-gray-200 border-solid">
                  Maior espera
                </th>
              </tr>
            </thead>
            <tbody className="bg-white ">
              <tr>
                <td className="py-2 text-center ">{ramais.length}</td>
                <td className="text-center ">
                  {
                    ramais.filter((e) => {
                      return e.status === 'ONLINE';
                    }).length
                  }
                </td>
                <td className="text-center ">
                  {
                    ramais.filter((e) => {
                      return e.status === 'OCUPADO';
                    }).length
                  }
                </td>
                <td className="text-center ">
                  {
                    ramais.filter((e) => {
                      return e.status === 'OFFLINE';
                    }).length
                  }
                </td>
                <td className="text-center ">{filas ? filas.length : ''}</td>
                <td className="text-center ">{chamadas && chamadas.length}</td>
                <td className="text-center ">
                  {chamadas &&
                    chamadas.filter((e) => {
                      return e.b_created !== 'Ainda não atendido';
                    }).length}
                </td>
                {/* <td className='text-center '>
                    {chamadas && chamadas.length}
                  </td>
                  <td className='text-center '>
                    {chamadas && chamadas.length}
                  </td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
