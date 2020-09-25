import React, { useContext } from 'react';
import { GloContext } from '../contexts/GloState';


export const Balance = () => {
  const { transactions } = useContext(GloContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
    <h1>${total}</h1>
    </>
  )
}
