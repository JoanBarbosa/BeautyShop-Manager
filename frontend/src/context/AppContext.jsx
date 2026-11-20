import { createContext, useMemo, useState } from "react";

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [appName] = useState("BeautyShop Manager");

  const value = useMemo(() => ({ appName }), [appName]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
