import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { Button, TextField } from "@mui/material";


export const Home = () => {

  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [value, setValue] = React.useState(0);

  return (
    <div>
      <h1>Balance : {account}</h1>
      <TextField
        variant="outlined"
        type="number"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
      <Button variant="contained" onClick={() => depositMoney(value)}>
        Deposit
      </Button>
      <Button variant="contained" onClick={() => withdrawMoney(value)}>
        Withdraw
      </Button>
    </div>
  )
}
