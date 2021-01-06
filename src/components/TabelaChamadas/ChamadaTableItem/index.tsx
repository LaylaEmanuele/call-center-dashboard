import { intervalToDuration, formatDuration } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export const ChamadaTableItem: React.FC<any> = ({
  direction,
  callstate,
  cid_num,
  dest,
  b_dest,
  created,
  b_created,
}) => {
  return (
    <tr>
      <th className="p-4 px-6 text-xs text-center whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
        {direction}
      </th>
      <th className="p-4 px-6 text-xs text-center whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
        {callstate}
      </th>
      <td className="p-4 px-6 text-xs text-center whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
        {cid_num}
      </td>
      <td className="p-4 px-6 text-xs text-center whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
        {b_dest === '' ? dest : b_dest}
      </td>
      <td className="p-4 px-6 text-xs text-center whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
        {created
          ? created.substring(0, 10) + ' ' + created.substring(10, 20)
          : ' '}
      </td>
      <td className="p-4 px-6 text-xs text-center whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
        {b_created
          ? b_created.substring(0, 10) + ' ' + b_created.substring(10, 20)
          : ' '}
      </td>
      <td className="p-4 px-6 text-xs text-center whitespace-no-wrap align-middle border-t-0 border-l-0 border-r-0">
        {b_created
          ? b_created !== 'Ainda não atendido'
            ? formatDuration(
                intervalToDuration({
                  start: new Date(
                    b_created.substring(0, 10) +
                      ' ' +
                      b_created.substring(10, 20)
                  ),
                  end: new Date(),
                }),
                { delimiter: ', ', locale: pt }
              )
            : 'Ainda não atendido'
          : ''}
      </td>
    </tr>
  );
};
