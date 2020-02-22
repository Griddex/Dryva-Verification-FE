import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import httpOthers from "./../../services/httpService/httpOthers";

export default function DriversListRoute() {
  const [DriversData, setDriversData] = useState([]);
  const [Errors, setErrors] = useState([]);
  const [ResponseDriversDataData, setResponseDriversDataData] = useState([]);

  useEffect(() => {
    httpOthers("get", "Data/GetDriversData", null, null)
      .then(response => {
        if (response.status === 200) {
          console.log("Logged output -->: response.data", response.data);
          // const drvData = response.data.map(DrvData => {
          //   return {
          //     id: Object.values(DrvData)[0],
          //     role: Object.values(DrvData)[1],
          //     permissions: Object.values(DrvData)[2].join(", ")
          //   };
          // });
          // setDriversData(drvData);
          // setResponseDriversDataData(response.data);
        }
      })
      .catch(errors => {
        if (errors.response) {
          const responseErrors = errors.response.data[""];
          setErrors(responseErrors);
          setDriversData([]);
        }
      });

    return () => {
      setDriversData([]);
      setErrors([]);
    };
  }, []);

  const [columns, setColumns] = useState([
    { title: "Role", field: "role" },
    { title: "Permissions", field: "permissions" }
  ]);

  return (
    <div>
      <br />
      <br />
      <h2>
        <b>Drivers' Records</b>
      </h2>
      <hr />
      {Errors &&
        Errors.map((e, i) => {
          return (
            <p key={i} style={{ color: "red" }}>
              {e}
            </p>
          );
        })}
      <MaterialTable
        title=""
        columns={columns}
        data={DriversData}
        editable={{
          // onRowAdd: newDrvData => {
          //   return new Promise((resolve, reject) => {
          //     if (newDrvData) {
          //       setDriversData(prevState => {
          //         const DriversData = [...prevState];
          //         return [...DriversData, newDrvData];
          //       });
          //     }

          //     httpOthers(
          //       "post",
          //       "/Admin/CreateRole",
          //       { "Content-type": "application/json" },
          //       { role: newDrvData.role }
          //     )
          //       .then(response => {
          //         if (
          //           response.data.message === "Role Created!" &&
          //           response.status === 200
          //         ) {
          //           resolve("Success!");
          //         }
          //       })
          //       .catch(errors => {
          //         if (errors.response) {
          //           const responseErrors = errors.response.data["errors"];
          //           setErrors(responseErrors);
          //         }
          //         reject("Failure!");
          //       });
          //   });
          // },
          onRowUpdate: (newDrvData, oldDrvData) => {
            return new Promise((resolve, reject) => {
              if (oldDrvData) {
                setDriversData(prevState => {
                  const DriversData = [...prevState];
                  const index = DriversData.indexOf(oldDrvData);
                  DriversData[index] = newDrvData;
                  return DriversData;
                });
              }

              const DrvDataObj = ResponseDriversDataData.filter(obj => {
                return obj.name === oldDrvData.role;
              });

              httpOthers(
                "put",
                "Admin/UpdateRole",
                {
                  "Content-type": "application/json"
                },
                {
                  id: DrvDataObj[0].id,
                  role: newDrvData.role
                }
              )
                .then(response => {
                  resolve(response);
                })
                .catch(error => {
                  reject(error);
                });
            });
          },
          onRowDelete: oldDrvData => {
            return new Promise((resolve, reject) => {
              if (oldDrvData) {
                setDriversData(prevState => {
                  const DriversData = [...prevState];
                  const index = DriversData.indexOf(oldDrvData);
                  DriversData.splice(index, 1);
                  return DriversData;
                });
              }

              const DrvDataObj = ResponseDriversDataData.filter(obj => {
                return obj.role === oldDrvData.role;
              });

              httpOthers(
                "delete",
                "Admin/DeleteRole",
                {
                  "Content-type": "application/json"
                },
                { id: DrvDataObj[0].id }
              )
                .then(response => {
                  resolve(response);
                })
                .catch(error => {
                  reject(error);
                });
            });
          }
        }}
      />
    </div>
  );
}
