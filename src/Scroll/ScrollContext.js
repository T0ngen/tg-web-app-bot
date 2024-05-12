import React, { createContext, useContext, useState } from 'react';

const ScrollContext = createContext(null);

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [scrollToId, setScrollToId] = useState(null);

  return (
    <ScrollContext.Provider value={{ scrollToId, setScrollToId }}>
      {children}
    </ScrollContext.Provider>
  );
};