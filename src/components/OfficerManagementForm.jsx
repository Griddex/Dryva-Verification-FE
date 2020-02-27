import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import httpOthers from "../services/httpService/httpOthers";
import PermissionsForm from "./PermissionsForm";

const OfficerManagementForm = props => {
  const [Officers, setOfficers] = useState([]);
  const [Errors, setErrors] = useState([]);

  let officersData;

  useEffect(() => {
    httpOthers("get", "Admin/GetAllOfficers", null, null)
      .then(response => {
        if (response.status === 200) {
          officersData = response.data.map(officerInfo => {
            const officerInfoValues = Object.values(officerInfo);
            return {
              id: officerInfoValues[0],
              firstName: officerInfoValues[1],
              lastName: officerInfoValues[2],
              role: officerInfoValues[3],
              loginStatus: officerInfoValues[4]
            };
          });
          setOfficers(officersData);
        }
      })
      .catch(errors => {
        if (errors.response) {
          const responseErrors = errors.response.data["Errors"];
          setErrors(responseErrors);
          setOfficers([]);
        }
      });

    return () => {
      setOfficers([]);
      setErrors([]);
    };
  }, []);

  const [columns, setColumns] = useState([
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "Role", field: "role" },
    { title: "Login Status", field: "loginStatus" }
  ]);

  return (
    <div>
      <br />
      <br />
      <h2>
        <b>Officers Management</b>
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
        data={Officers}
        //options={{ actionsColumnIndex: -1 }}
        options={{
          exportButton: true
        }}
        editable={{
          onRowAdd: newofficerInfo => {
            return new Promise((resolve, reject) => {
              if (newofficerInfo) {
                setOfficers(prevState => {
                  const Officers = [...prevState];
                  return [...Officers, newofficerInfo];
                });
              }

              httpOthers(
                "post",
                "/Admin/CreateRole",
                { "Content-type": "application/json" },
                { role: newofficerInfo.role }
              )
                .then(response => {
                  if (
                    response.data.message === "Role Created!" &&
                    response.status === 200
                  ) {
                    resolve("Success!");
                  }
                })
                .catch(errors => {
                  if (errors.response) {
                    const responseErrors = errors.response.data["errors"];
                    setErrors(responseErrors);
                  }
                  reject("Failure!");
                });
            });
          },
          onRowUpdate: (newofficerInfo, oldofficerInfo) => {
            return new Promise((resolve, reject) => {
              if (oldofficerInfo) {
                setOfficers(prevState => {
                  const Officers = [...prevState];
                  const index = Officers.indexOf(oldofficerInfo);
                  Officers[index] = newofficerInfo;
                  return Officers;
                });
              }

              const officerInfoObj = officersData.filter(obj => {
                return obj.name === oldofficerInfo.role;
              });

              httpOthers(
                "put",
                "Admin/UpdateRole",
                {
                  "Content-type": "application/json"
                },
                {
                  id: officerInfoObj[0].id,
                  role: newofficerInfo.role
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
          onRowDelete: oldofficerInfo => {
            return new Promise((resolve, reject) => {
              if (oldofficerInfo) {
                setOfficers(prevState => {
                  const Officers = [...prevState];
                  const index = Officers.indexOf(oldofficerInfo);
                  Officers.splice(index, 1);
                  return Officers;
                });
              }

              const officerInfoObj = officersData.filter(obj => {
                return obj.role === oldofficerInfo.role;
              });

              httpOthers(
                "delete",
                "Admin/DeleteRole",
                {
                  "Content-type": "application/json"
                },
                { id: officerInfoObj[0].id }
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
        actions={[
          {
            icon: "RotateLeft",
            tooltip: "Reset Password",
            onClick: (event, rowData) => alert("You saved " + rowData.role)
          }
        ]}
        detailPanel={[
          {
            icon: "account_circle",
            tooltip: "Show permissions",
            render: rowData => {
              return (
                <PermissionsForm
                  rowData={rowData}
                  Officers={Officers}
                  officersData={officersData}
                />
              );
            }
          }
        ]}
      />
    </div>
  );
};

export default OfficerManagementForm;
