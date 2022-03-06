const BASE_URL = "http://localhost:3001";

export function fetchDespesas(year: number, month: number) {
  return fetch(
    `${BASE_URL}/despesas?mes=${year}-${month.toString().padStart(2, "0")}`
  ).then((data) => data.json());
}
