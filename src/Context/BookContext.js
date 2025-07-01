// Context/BookContext.js
import { createContext, useState, useCallback } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTarget, setSearchTarget] = useState(null);
  const [resetTrigger, setResetTrigger] = useState(0);

  const resetSearch = useCallback(() => {
    setSearchTerm("");
    setSearchTarget(null);
    setResetTrigger(prev => prev + 1); // Increment to trigger effect
  }, []);

  return (
    <BookContext.Provider value={{ 
      searchTerm, 
      setSearchTerm,
      searchTarget,
      setSearchTarget,
      resetSearch,
      resetTrigger
    }}>
      {children}
    </BookContext.Provider>
  );
};