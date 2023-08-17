import { useContext, useState } from "react";
import Papa from "papaparse";
import Header from "../Header/Header";
import { stateContext } from "../context/projectContext";
import { findMaxNumber, findMinNumber } from "../FindMaxAndMin";
import Charts from "./Charts";
const AddProjects = () => {
  const { setProject } = useContext(stateContext);

  const [data, setData] = useState(null);
  const [KP, setKP] = useState([]);
  const [Xs, setXs] = useState([]);
  const [Ys, setYs] = useState([]);
  const [Zs, setZs] = useState([]);

  const handleCsvFile = (e) => {
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (result) {
        const KPArray = [];
        const XArray = [];
        const YArray = [];
        const ZArray = [];
        result.data.map((d) => {
          KPArray.push(parseFloat(d.KP));
          XArray.push(parseFloat(d.X));
          YArray.push(parseFloat(d.Y));
          ZArray.push(parseFloat(d.Z));
        });

        setData(result.data);
        setKP(KPArray);
        setXs(XArray);
        setYs(YArray);
        setZs(ZArray);
      },
    });
  };
  const MaxX = findMaxNumber(Xs);
  const MinX = findMinNumber(Xs);
  const MaxY = findMaxNumber(Ys);
  const MinY = findMinNumber(Ys);
  const MaxZ = findMaxNumber(Zs);
  const MinZ = findMinNumber(Zs);
  const handleaddProject = (e) => {
    e.preventDefault();
    const from = e.target;
    const projectName = from.projectName.value;
    const projectDescription = from.projectDescription.value;
    const client = from.client.value;
    const contractor = from.contractor.value;
    const max_X = parseFloat(from.max_X.value);
    const max_Y = parseFloat(from.max_Y.value);
    const max_Z = parseFloat(from.max_Z.value);
    const min_X = parseFloat(from.min_X.value);
    const min_Y = parseFloat(from.min_Y.value);
    const min_Z = parseFloat(from.min_Z.value);

    const newProject = {
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
    };
    setProject(newProject);
    console.log(newProject);
  };

  return (
    <>
      <Header />
      <div
        className="container flex justify-center
    items-center hero min-h-screen "
      >
        <div className="hero-content flex-col lg:flex-row gap-5">
          {/* chart */}

          {data && (
            <div className="text-center  flex flex-col gap-5">
              <h1 className="text-5xl font-bold">Chart</h1>
              <Charts data={data} />
            </div>
          )}

          {/* from */}

          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <h1 className="text-3xl text-center font-bold">
              Add a new project
            </h1>

            <form onSubmit={handleaddProject} className="card-body">
              {/* project Name */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Projec Name</span>
                </label>
                <input
                  required
                  name="projectName"
                  type="text"
                  placeholder="Projec Name"
                  className="input input-bordered"
                />
              </div>

              {/* Projec description */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Project Description</span>
                </label>
                <input
                  required
                  name="projectDescription"
                  type="text"
                  placeholder="Project description"
                  className="input input-bordered"
                />
              </div>

              {/* client */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Client </span>
                </label>
                <input
                  required
                  name="client"
                  type="text"
                  placeholder="client"
                  className="input input-bordered"
                />
              </div>

              {/* contractor */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contractor </span>
                </label>
                <input
                  required
                  name="contractor"
                  type="text"
                  placeholder="contractor"
                  className="input input-bordered"
                />
              </div>

              {/* csv file input */}
              <div className="form-control">
                <span className="label-text">csv file</span>
                <label className="label"></label>
                <input
                  className="file-input file-input-bordered"
                  onChange={handleCsvFile}
                  type="file"
                  name="file"
                  accept=".csv"
                />
              </div>

              {/* csv values */}

              <div className="form-control grid grid-cols-2 gap-2">
                <p>
                  <span>Max_X</span>
                  <input
                    required
                    name="max_X"
                    disabled={data ? true : false}
                    defaultValue={MaxX}
                    type="number"
                    placeholder="Max x"
                    className="input input-bordered"
                  />
                </p>
                <p>
                  <span>Min_X</span>
                  <input
                    required
                    name="min_X"
                    disabled={data ? true : false}
                    defaultValue={MinX}
                    type="number"
                    placeholder="Min x"
                    className="input input-bordered"
                  />
                </p>
                <p>
                  <span>Max_Y</span>
                  <input
                    required
                    name="max_Y"
                    disabled={data ? true : false}
                    defaultValue={MaxY}
                    type="number"
                    placeholder="Max Y"
                    className="input input-bordered"
                  />
                </p>
                <p>
                  <span>Min_Y</span>
                  <input
                    required
                    name="min_Y"
                    disabled={data ? true : false}
                    defaultValue={MinY}
                    type="number"
                    placeholder="Min Y"
                    className="input input-bordered"
                  />
                </p>
                <p>
                  <span>Max_Z</span>
                  <input
                    required
                    name="max_Z"
                    disabled={data ? true : false}
                    defaultValue={MaxZ}
                    type="number"
                    placeholder="Max Z"
                    className="input input-bordered"
                  />
                </p>
                <p>
                  <span>Min_Z</span>
                  <input
                    required
                    name="min_Z"
                    disabled={data ? true : false}
                    defaultValue={MinZ}
                    type="number"
                    placeholder="Min Z"
                    className="input input-bordered"
                  />
                </p>
              </div>

              {/* submit button */}
              <div className="form-control mt-6">
                <button className="btn btn-primary"> Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProjects;
