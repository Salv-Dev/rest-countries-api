import { createContext, useState } from 'react';

import React from 'react';

export const Context = createContext([[], () => {}])

function DataContext({ children }) {
  const [selectedData, setSelectedData] = useState([]);

  return (
    <Context.Provider value={[selectedData, setSelectedData]}>
        { children }
    </Context.Provider>
  )
}

export default DataContext;