/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const stateContext = createContext();

const ProjectContext = ({ children }) => {
  const [project, setProject] = useState(null);

  const info = { project, setProject };

  return <stateContext.Provider value={info}>{children}</stateContext.Provider>;
};

export default ProjectContext;
