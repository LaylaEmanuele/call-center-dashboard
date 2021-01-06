import { useEffect, useState } from 'react';
import {
  Navbar,
  Footer,
  ListaRamais,
  ListaFilas,
  TabelaChamadas,
  TabelaEstatistica,
} from '@components/index';
import { getQtdChamadas, fetchSwr } from '@lib/utils';
import { FiRefreshCw } from 'react-icons/fi';

export default function Index() {
  const [filas, setFilas] = useState(null);
  const [ramais, setRamais] = useState([]);
  const [ramaisAtivos, setRamaisAtivos] = useState(null);
  const [chamadas, setChamadas] = useState(null);
  const [waiting, setWaiting] = useState<number>(0);
  const [timer, setTimer] = useState(10);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  const chamadasFetch = fetchSwr(
    `${process.env.NEXT_PUBLIC_API_KEY}api/api.php?request=calls`,
    timer
  );

  const ramaisFetch = fetchSwr(
    `${process.env.NEXT_PUBLIC_API_KEY}api/api.php?request=users`,
    timer
  );

  const ramaisAtivosFetch = fetchSwr(
    `${process.env.NEXT_PUBLIC_API_KEY}api/api.php?request=usersonline`,
    timer
  );

  const filasFetch = fetchSwr(
    `${process.env.NEXT_PUBLIC_API_KEY}api/api.php?request=queues`,
    timer
  );

  function onPageMount(): void {
    if (
      !chamadasFetch.data ||
      !ramaisAtivosFetch.data ||
      !ramaisFetch.data ||
      !filasFetch.data
    ) {
      return;
    }

    setFilas(filasFetch.data);

    setChamadas(
      chamadasFetch.data.map((chamada) => {
        if (chamada.direction === 'inbound') {
          //verifica se é de saida

          if (chamada.b_created == '' || !chamada.b_created) {
            //verifica se foi atendido pelo ramal
            chamada.b_created = 'Ainda não atendido';
          }
          if (
            parseInt(chamada.dest) <= 4999 &&
            parseInt(chamada.dest) >= 4000
          ) {
            chamada.callstate = 'Fila';
          } else {
            if (chamada.callstate === 'ACTIVE') {
              //verifica se está ativa
              chamada.callstate = 'Ativa';
            } else {
              // setWaiting(waiting + 1);
              chamada.callstate = 'Chamando';
            }
          }

          return { ...chamada, direction: 'Ligação de Entrada' }; //retorno do tipo de direção da chamada
        } else if (chamada.direction === 'outbound') {
          //se for de entrada e realiza as mesmas verificacoes acima

          if (chamada.b_created == '' || !chamada.b_created) {
            chamada.b_created = 'Ainda não atendido';
          }

          if (
            parseInt(chamada.dest) <= 4999 &&
            parseInt(chamada.dest) >= 4000
          ) {
            chamada.callstate = 'Fila';
          } else {
            if (chamada.callstate === 'ACTIVE') {
              chamada.callstate = 'Ativa';
            } else {
              setWaiting(waiting + 1);
              chamada.callstate = 'Chamando';
            }
          }

          return {
            ...chamada,
            direction: 'Ligação de Saída',
          };
        } else {
          return {
            ...chamada,
            direction: '',
          };
        }
      })
    );

    setRamaisAtivos(ramaisAtivosFetch.data);

    const ordered = ramaisFetch.data.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setRamais(
      ordered.map((ramal) => {
        if (
          chamadasFetch.data.find((c) => {
            return ramal.name.includes(c.dest) && c.callstate === 'Chamando';
          })
        ) {
          return {
            ...ramal,
            status: 'CHAMANDO',
          };
        } else if (
          chamadasFetch.data.find((c) => {
            return (
              (ramal.name.includes(c.b_dest) && c.b_dest !== '') ||
              (ramal.name.includes(c.dest) && c.dest !== '') ||
              (ramal.name.includes(c.cid_num) && c.cid_num !== '')
            );
          })
        ) {
          return {
            ...ramal,
            status: 'OCUPADO',
          };
        } else if (
          ramaisAtivosFetch.data.find((a) => ramal.name.includes(a.reg_user))
        ) {
          return {
            ...ramal,
            status: 'ONLINE',
          };
        } else {
          return {
            ...ramal,
            status: 'OFFLINE',
          };
        }
      })
    );
  }

  useEffect(() => {
    if (
      chamadasFetch.data &&
      ramaisAtivosFetch.data &&
      filasFetch.data &&
      ramaisAtivosFetch.data
    ) {
      onPageMount();
    } else {
      setTimeout(onPageMount, 1000);
    }
  }, [chamadasFetch, filasFetch, ramaisFetch, ramaisAtivosFetch]);

  useEffect(() => {
    if (filas) {
      setFilas(
        filas.map((fila) => {
          return { ...fila, qtd: getQtdChamadas(chamadas, fila) };
        })
      );
    }
    // prettier-ignore
    if(chamadas && chamadas[0][""] === "0 total."){
          setChamadas(null);
    }
  }, [chamadas]);

  return (
    <>
      <div className="relative min-w-full bg-gray-200">
        <div className="relative flex flex-col">
          <Navbar />
          <div className="absolute top-0 right-0 z-50 flex flex-col mt-3 mr-5 justify-items-center">
            <label htmlFor="timer" className="text-base "></label>
            <div className="flex flex-row items-center space-x-2">
              <FiRefreshCw
                className="text-xl cursor-pointer "
                onClick={() => onPageMount()}
              />
              <input
                className="w-12 px-2 py-1 mt-2 rounded-md"
                name="timer"
                type="number"
                min="10"
                value={timer}
                onChange={(e) => setTimer(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-full py-8 bg-green-500">
          <div className="w-full px-4 mx-auto md:px-10 /" />
        </div>
        <div className="w-full px-4 pt-16 mx-auto -m-24 md:px-10">
          <ListaRamais ramais={ramais} />

          <ListaFilas filas={filas} chamadas={chamadas} />

          <div className="flex flex-wrap mt-4">
            <TabelaChamadas chamadas={chamadas} />

            <TabelaEstatistica
              filas={filas}
              chamadas={chamadas}
              ramais={ramais}
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
