import { useContext } from "react";
import Header from "../Header/Header";
import { stateContext } from "../context/projectContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
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

  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };

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
          <div className="flex flex-col gap-5 justify-center items-center min-h-[400px]">
            <div id="divToPrint" className="overflow-x-auto p-3">
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

            {/* print */}
            <div className="flex justify-end w-full">
              <button className="btn btn-outline my-6" onClick={printDocument}>
                Print Result As Pdf
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Result;
