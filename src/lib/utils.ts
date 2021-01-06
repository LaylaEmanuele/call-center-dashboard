import useSWR from 'swr';

//Data Fetch Related
const fetcher = async (url) => await fetch(url).then((r) => r.json());
export const fetchSwr = (url, timer) =>
  useSWR(url, fetcher, { refreshInterval: timer * 1000, dedupingInterval: 0 });

//Utility functions
export function getQtdChamadas(chamadas, fila) {
  var qtd = 0;

  if (chamadas) {
    chamadas.map((chamada) => {
      if (chamada.dest === fila.name.substring(0, 4)) {
        qtd++;
      }
    });
  }

  return qtd;
}

export function getQtdChamando(chamadas, fila) {
  var qtd = 0;

  if (chamadas) {
    chamadas.map((chamada) => {
      if (
        chamada.dest === fila.name.substring(0, 4) &&
        chamada.callstate === 'Chamando'
      ) {
        qtd++;
      }
    });
  }

  return qtd;
}
