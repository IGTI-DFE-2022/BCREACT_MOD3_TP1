const BASE_URL = "http://localhost:3001";

export function fetchDespesas() {
  return fetch(BASE_URL + "/despesas").then((data) => data.json());
}
