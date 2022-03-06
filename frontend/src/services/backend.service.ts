import { Despesa } from "../App";

const BASE_URL = "http://localhost:3001";

export function fetchDespesas(year: number, month: number): Promise<Despesa[]> {
  return fetch(
    `${BASE_URL}/despesas?mes=${year}-${month.toString().padStart(2, "0")}`
  ).then((data) => data.json());
}

export function fetchAllYearWithExpenses() {
  return fetch(`${BASE_URL}/despesas`)
    .then((data) => data.json())
    .then((expenses: Despesa[]) => {
      let years = new Set<number>();
      expenses.forEach((exp: Despesa) => {
        years.add(parseInt(exp.mes.split("-")[0]));
      });
      return Array.from(years);
    });
}
