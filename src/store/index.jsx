import React, { createContext, useContext, useState } from 'react';
import { wallet } from '../services/near';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const defaultContractId = process.env.REACT_APP_CONTRACT_ID;
  const contractId = localStorage.getItem('CONTRACT_ID');
  !contractId && localStorage.setItem('CONTRACT_ID', defaultContractId);

  const [data, setData] = useState(contractId ?? defaultContractId);

  const setContractId = (contractId) => {
    localStorage.setItem('CONTRACT_ID', contractId);
    setData(contractId);
  };

  const [accountId, setAccountId] = useState(wallet.getAccountId());

  const store = { contractId: data, setContractId, accountId, setAccountId };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);
