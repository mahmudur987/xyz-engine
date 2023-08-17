import { useContext } from "react";
import Header from "../Header/Header";
import { stateContext } from "../context/projectContext";

const Result = () => {
  const { project } = useContext(stateContext);
  const {
    projectName,
    projectDescription,
    client,
    contractor,
    max_X,
    max_Y,
    max_Z,
    min_X,
    min_Y,
    min_Z,
  } = project || {};
  return (
    <>
      <Header />
      <div className="container">
        {!project && (
          <div className="flex justify-center items-center min-h-[400px]">
            <h1 className="text-3xl font-bold text-red-500">
              please add a project to see the result
            </h1>
          </div>
        )}
        {project && (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Description</th>
                    <th>Client</th>
                    <th>Contractor</th>
                    <th>Max X</th>
                    <th>Min X</th>
                    <th>Max Y</th>
                    <th>Min Y</th>
                    <th>Max Z</th>
                    <th>Min Z</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>{projectName}</td>
                    <td>{projectDescription}</td>
                    <td>{client}</td>
                    <td>{contractor}</td>
                    <td>{max_X}</td>
                    <td>{min_X}</td>
                    <td>{max_Y}</td>
                    <td>{min_Y}</td>
                    <td>{max_Z}</td>
                    <td>{min_Z}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Result;
