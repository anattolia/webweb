
import { createContext, useContext, useState } from 'react';

// Crear contexto
const ProyectoContexto = createContext();

// Crear un componente provider
export const ProyectoProveedor = ({ children }) => {
  const [proyecto, setProyecto] = useState('light'); // default theme

  // Elegir nuevo proyecto
  const elegirProyecto = (proy) => {
    setProyecto(() => proy);
  };

  return (
    <ProyectoContexto.Provider value={{ proyecto, elegirProyecto }}>
      {children}
    </ProyectoContexto.Provider>
  );
};

// Custom hook to use the context
export const useTheme = () => useContext(ProyectoContexto);