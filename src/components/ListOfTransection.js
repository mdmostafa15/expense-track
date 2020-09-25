import React, { useContext } from 'react';
import { GloContext } from '../contexts/GloState';
import { Transections } from './Transections'

export const ListOfTransection = () => {
  const { transactions } = useContext(GloContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
          {transactions.map(transaction => (
            <Transections key={transaction.id} 
            transaction={transaction} />)
          )}
      </ul>
    </>
  )
}
