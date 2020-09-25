import React from 'react';
import './App.css';
import {AddTransection} from './components/AddTransection';
import {Balance} from './components/Balance';
import {Header} from './components/Header';
import {IncomeExpenses} from './components/IncomeExpenses';
import {ListOfTransection} from './components/ListOfTransection';
import  {GloProvider}  from './contexts/GloState';

function App() {
  return (
    <GloProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <ListOfTransection />
        <AddTransection />
      </div>
    </GloProvider>
  );
}

export default App;
