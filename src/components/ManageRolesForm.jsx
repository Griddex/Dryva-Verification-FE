import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import httpOthers from "../services/httpService/httpOthers";

const ManageRolesForm = props => {
  const [Roles, setRoles] = useState([]);
  const [Errors, setErrors] = useState([]);
  const [ResponseRolesData, setResponseRolesData] = useState([]);

  useEffect(() => {
    httpOthers("get", "Admin/GetRoles", null, null)
      .then(response => {
        if (response.status === 200) {
          const rolesdata = response.data.map(role => {
            return { role: Object.values(role)[1] };
          });
          setRoles(rolesdata);
          setResponseRolesData(response.data);
        }
      })
      .catch(errors => {
        if (errors.response) {
          const responseErrors = errors.response.data[""];
          setErrors(responseErrors);
          setRoles([]);
        }
      });
    return () => {
      setRoles([]);
      setErrors([]);
    };
  }, []);

  const [columns, setColumns] = useState([{ title: "Role", field: "role" }]);

  return (
    <div>
      <h2>
        <b>Manage Roles</b>
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
        title="Roles"
        columns={columns}
        data={Roles}
        options={{ actionsColumnIndex: -1 }}
        editable={{
          onRowAdd: newRole => {
            return new Promise((resolve, reject) => {
              if (newRole) {
                setRoles(prevState => {
                  const Roles = [...prevState];
                  return [...Roles, newRole];
                });
              }

              httpOthers(
                "post",
                "/Admin/CreateRole",
                { "Content-type": "application/json" },
                { role: newRole.role }
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
          onRowUpdate: (newRole, oldRole) => {
            return new Promise((resolve, reject) => {
              if (oldRole) {
                setRoles(prevState => {
                  const Roles = [...prevState];
                  const index = Roles.indexOf(oldRole);
                  Roles[index] = newRole;
                  return Roles;
                });
              }

              const roleObj = ResponseRolesData.filter(obj => {
                return obj.name === oldRole.role;
              });

              httpOthers(
                "put",
                "Admin/UpdateRole",
                {
                  "Content-type": "application/json"
                },
                { id: roleObj[0].id, role: newRole.role }
              )
                .then(response => {
                  resolve(response);
                })
                .catch(error => {
                  reject(error);
                });
            });
          },
          onRowDelete: oldRole => {
            return new Promise((resolve, reject) => {
              if (oldRole) {
                setRoles(prevState => {
                  const Roles = [...prevState];
                  const index = Roles.indexOf(oldRole);
                  Roles.splice(index, 1);
                  return Roles;
                });
              }

              const roleObj = ResponseRolesData.filter(obj => {
                return obj.name === oldRole.role;
              });

              httpOthers(
                "delete",
                "Admin/DeleteRole",
                {
                  "Content-type": "application/json"
                },
                { id: roleObj[0].id }
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
        detailPanel={[
          {
            icon: "account_circle",
            tooltip: "Show Surname",
            render: rowData => {
              return (
                <div
                  style={{
                    fontSize: 100,
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "#E53935"
                  }}
                >
                  {rowData.role}
                </div>
              );
            }
          }
        ]}
      />
    </div>
  );
};

export default ManageRolesForm;
