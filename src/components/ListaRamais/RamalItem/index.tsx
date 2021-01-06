import cs from 'classnames';

export const RamalItem: React.FC<any> = ({ ramal }) => {
  return (
    <div
      className={cs(
        'p-1 text-xs align-middle ',
        {
          'bg-danger-500': ramal.status === 'OCUPADO',
          'bg-gray-500': ramal.status === 'OFFLINE',
          'bg-green-500': ramal.status === 'ONLINE',
          'bg-yellow-500': ramal.status === 'CHAMANDO',
        },
        'flex flex-col rounded-lg shadow-lg'
      )}
    >
      <div className="px-2 py-1">
        <p className="text-black">
          <span className="font-medium text-black">
            {ramal.name.substring(0, 4)}
          </span>
        </p>
      </div>
    </div>
  );
};
