import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import httpOthers from "../services/httpService/httpOthers";
import PermissionsForm from "./PermissionsForm";

const ManageRolesForm = props => {
  const [RolesAndPermissions, setRolesAndPermissions] = useState([]);
  const [Errors, setErrors] = useState([]);
  const [
    ResponseRolesAndPermissionsData,
    setResponseRolesAndPermissionsData
  ] = useState([]);

  useEffect(() => {
    httpOthers("get", "Admin/GetRolesAndClaims", null, null)
      .then(response => {
        if (response.status === 200) {
          const rolesPermissionsData = response.data.map(roleAndPermissions => {
            return {
              id: Object.values(roleAndPermissions)[0],
              role: Object.values(roleAndPermissions)[1],
              permissions: Object.values(roleAndPermissions)[2].join(", ")
            };
          });
          setRolesAndPermissions(rolesPermissionsData);
          setResponseRolesAndPermissionsData(response.data);
        }
      })
      .catch(errors => {
        if (errors.response) {
          const responseErrors = errors.response.data[""];
          setErrors(responseErrors);
          setRolesAndPermissions([]);
        }
      });

    return () => {
      setRolesAndPermissions([]);
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
        <b>Manage Roles and Permissions</b>
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
        data={RolesAndPermissions}
        //options={{ actionsColumnIndex: -1 }}
        editable={{
          onRowAdd: newRoleAndPermissions => {
            return new Promise((resolve, reject) => {
              if (newRoleAndPermissions) {
                setRolesAndPermissions(prevState => {
                  const RolesAndPermissions = [...prevState];
                  return [...RolesAndPermissions, newRoleAndPermissions];
                });
              }

              httpOthers(
                "post",
                "/Admin/CreateRole",
                { "Content-type": "application/json" },
                { role: newRoleAndPermissions.role }
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
          onRowUpdate: (newRoleAndPermissions, oldRoleAndPermissions) => {
            return new Promise((resolve, reject) => {
              if (oldRoleAndPermissions) {
                setRolesAndPermissions(prevState => {
                  const RolesAndPermissions = [...prevState];
                  const index = RolesAndPermissions.indexOf(
                    oldRoleAndPermissions
                  );
                  RolesAndPermissions[index] = newRoleAndPermissions;
                  return RolesAndPermissions;
                });
              }

              const roleAndPermissionsObj = ResponseRolesAndPermissionsData.filter(
                obj => {
                  return obj.name === oldRoleAndPermissions.role;
                }
              );

              httpOthers(
                "put",
                "Admin/UpdateRole",
                {
                  "Content-type": "application/json"
                },
                {
                  id: roleAndPermissionsObj[0].id,
                  role: newRoleAndPermissions.role
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
          onRowDelete: oldRoleAndPermissions => {
            return new Promise((resolve, reject) => {
              if (oldRoleAndPermissions) {
                setRolesAndPermissions(prevState => {
                  const RolesAndPermissions = [...prevState];
                  const index = RolesAndPermissions.indexOf(
                    oldRoleAndPermissions
                  );
                  RolesAndPermissions.splice(index, 1);
                  return RolesAndPermissions;
                });
              }

              const roleAndPermissionsObj = ResponseRolesAndPermissionsData.filter(
                obj => {
                  return obj.role === oldRoleAndPermissions.role;
                }
              );

              httpOthers(
                "delete",
                "Admin/DeleteRole",
                {
                  "Content-type": "application/json"
                },
                { id: roleAndPermissionsObj[0].id }
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
            tooltip: "Show permissions",
            render: rowData => {
              return (
                <PermissionsForm
                  rowData={rowData}
                  RolesAndPermissions={RolesAndPermissions}
                  ResponseRolesAndPermissionsData={
                    ResponseRolesAndPermissionsData
                  }
                />
              );
            }
          }
        ]}
      />
    </div>
  );
};

export default ManageRolesForm;
