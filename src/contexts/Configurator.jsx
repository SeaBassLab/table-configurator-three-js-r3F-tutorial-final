import { createContext, useContext, useEffect, useState } from "react";
import { ElectricMediumDuty } from "../components/models/desks/ElectricMediumDuty";

import { ESDLaminate } from "../components/models/tables/ESDLaminate";
import { ESDLaminateWood } from "../components/models/tables/ESDLaminate_wood";

import { CPUHolder } from "../components/models/accessories/CPUHolder";
import { KBAA } from "../components/models/accessories/KBAA";

import { Casters } from "../components/models/legs/Casters";
import { LevelerFeet } from "../components/models/legs/LevelerFeet";

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [objSelected, setObjSelected] = useState(false);
  const [dutyVisibility, setDutyVisibility] = useState(true);
  const [esdVisibility, setEsdVisibility] = useState(false);
  const [esdwoodVisibility, setEsdwoodVisibility] = useState(false);
  const [cpuVisibility, setCpuVisibility] = useState(false);
  const [kbaaVisibility, setKbaaVisibility] = useState(false);
  const [castersVisibility, setCastersVisibility] = useState(false);
  const [feetVisibility, setfeetVisibility] = useState(false);

  const MODEL = {
    duty: {
      name: "Electric Duty",
      src: "./models/ElectricMediumDuty.glb",
      imgURL: "./screenshot/ElectricMediumDuty.png",
      visibility: dutyVisibility,
      setVisibility: setDutyVisibility,
      component: () => <ElectricMediumDuty rotation={[0, 3.5, 0]} />,
    },
    esd: {
      name: "ESD Laminate",
      src: "./models/ESDLaminate.glb",
      imgURL: "./screenshot/ESDLaminate.png",
      visibility: esdVisibility,
      setVisibility: setEsdVisibility,
      component: () => <ESDLaminate rotation={[0, 3.5, 0]} />,
    },
    esdwood: {
      name: "Hardwood Maple",
      src: "",
      imgURL: "./screenshot/ESDLaminate_wood.png",
      visibility: esdwoodVisibility,
      setVisibility: setEsdwoodVisibility,
      component: () => <ESDLaminateWood rotation={[0, 3.5, 0]} />,
    },
    cpu: {
      name: "CPU Holder",
      src: "",
      imgURL: "./screenshot/CPUHolder.png",
      visibility: cpuVisibility,
      setVisibility: setCpuVisibility,
      component: () => <CPUHolder rotation={[0, 3.5, 0]} />,
    },
    kbaa: {
      name: "KBAA",
      src: "",
      imgURL: "./screenshot/KBAA.png",
      visibility: kbaaVisibility,
      setVisibility: setKbaaVisibility,
      component: () => <KBAA rotation={[0, 3.5, 0]} />,
    },
    casters: {
      name: "Casters",
      src: "",
      imgURL: "./screenshot/Casters.png",
      visibility: castersVisibility,
      setVisibility: setCastersVisibility,
      component: () => <Casters rotation={[0, 3.5, 0]} />,
    },
    feet: {
      name: "Laveler Feet",
      src: "",
      imgURL: "./screenshot/LevelerFeet.png",
      visibility: feetVisibility,
      setVisibility: setfeetVisibility,
      component: () => <LevelerFeet rotation={[0, 3.5, 0]} />,
    },
  };

  useEffect(() => {
    if (esdwoodVisibility) {
      setEsdVisibility(false);
      setEsdwoodVisibility(true);
    }
  }, [esdwoodVisibility]);

  useEffect(() => {
    if (esdVisibility) {
      setEsdwoodVisibility(false);
      setEsdVisibility(true);
    }
  }, [esdVisibility]);

  useEffect(() => {
    if (castersVisibility) {
      setfeetVisibility(false);
      setCastersVisibility(true);
    }
  }, [castersVisibility]);

  useEffect(() => {
    if (feetVisibility) {
      setCastersVisibility(false);
      setfeetVisibility(true);
    }
  }, [feetVisibility]);

  return (
    <ConfiguratorContext.Provider
      value={{
        objSelected,
        setObjSelected,
        MODEL,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
