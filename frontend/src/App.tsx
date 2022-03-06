import "./App.css";
import {
  fetchAllYearWithExpenses,
  fetchDespesas,
} from "./services/backend.service";
import AppControls from "./components/AppControls";
import DespesasTable from "./components/DespesasTable";
import { useEffect, useState } from "react";

export interface Despesa {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: number;
}

function App() {
  const [years, setYears] = useState<number[]>([]);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(1);
  const [despesas, setDespesas] = useState<Despesa[]>([]);

  function handleYearChange(year: number) {
    setYear(year);
  }

  function handleMonthChange(month: number) {
    setMonth(month);
  }

  useEffect(() => {
    fetchAllYearWithExpenses().then((d) => {
      setYears(d);
      setYear(years[years.length - 1]);
    });
  }, []);

  useEffect(() => {
    if (month > 0 && year > 0) {
      fetchDespesas(year, month).then((d) => setDespesas(d));
    }
  }, [month, year]);

  return (
    <div className="App">
      <AppControls
        years={years}
        year={year}
        month={month}
        onMonthChange={handleMonthChange}
        onYearChange={handleYearChange}
      />
      <DespesasTable rows={despesas} />
    </div>
  );
}

export default App;
