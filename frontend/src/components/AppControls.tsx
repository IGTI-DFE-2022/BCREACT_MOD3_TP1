import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import React from "react";

export default function AppControls() {
  function currentYear() {
    let today = new Date();
    return today.getFullYear();
  }

  function currentMonth() {
    let today = new Date();
    return today.getMonth() + 1;
  }

  function allMonths() {
    let months = [];
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
    return months;
  }

  return (
    <div>
      {/* YEAR */}
      <FormControl>
        <InputLabel htmlFor="input-ano">Ano</InputLabel>
        <Select
          value={currentYear()}
          onChange={console.log}
          inputProps={{
            name: "ano",
            id: "input-ano",
          }}
        >
          <MenuItem value={currentYear()}>{currentYear()}</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      {/* MONTH */}
      <FormControl>
        <InputLabel htmlFor="input-mes">Mês</InputLabel>
        <Select
          value={currentMonth()}
          onChange={console.log}
          inputProps={{
            name: "mes",
            id: "input-mes",
          }}
        >
          {allMonths().map((i) => (
            <MenuItem value={i}>{i}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
