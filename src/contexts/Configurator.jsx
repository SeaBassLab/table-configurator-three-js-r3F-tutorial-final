import { createContext, useContext, useEffect, useState } from "react";

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [legs, setLegs] = useState(0);
  const [legsColor, setLegsColor] = useState("#777777");
  const [tableWidth, setTableWidth] = useState(100);
  const [model, setModel] = useState(0);
  const [isDraged, setIsDraged] = useState(false);
  const [objSelected, setObjSelected] = useState(null);

  return (
    <ConfiguratorContext.Provider
      value={{
        legs,
        setLegs,
        legsColor,
        setLegsColor,
        tableWidth,
        setTableWidth,
        model,
        setModel,
        isDraged,
        setIsDraged,
        objSelected,
        setObjSelected,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
