import React, {useContext} from 'react';
import { GloContext } from '../contexts/GloState';

export const Transections = ({ transaction }) => {
  const { deleteTransaction } = useContext(GloContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}
