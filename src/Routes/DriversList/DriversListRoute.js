import React, { useEffect, useState, Suspense, lazy } from "react";
import MaterialTable from "material-table";
import httpOthers from "./../../services/httpService/httpOthers";
import * as _ from "lodash";
import { flatten } from "flat";
import { dateddMMYYYTransformationService } from "./../../services/dateTransformationService";
import { fullNameService } from "./../../services/fullNameService";
import { connect } from "react-redux";
import { editDriversDataAction } from "../../actions/editDriversDataAction";
import { Redirect, Route, Switch, Link, useRouteMatch } from "react-router-dom";
import { Portal } from "react-portal";
import ReactLoading from "react-loading";
import Grid from "@material-ui/core/Grid";
import authService from "./../../services/authService";

const VehicleRoute = lazy(() => import("../../Routes/Vehicle/vehicleroute"));

const DriversListRoute = props => {
  const { currentRole, editDriversData, history, match } = props;
  const Role = authService().Role;

  const [toVerification, setToVerification] = useState(false);
  const [AllDrivers, setAllDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Drivers, setDrivers] = useState([]);
  const [Errors, setErrors] = useState([]);

  let DriversDataSorted;
  let DriversData;
  let { path, url } = useRouteMatch();

  useEffect(() => {
    httpOthers("get", "Data/GetDriversData", null, null)
      .then(response => {
        if (response.status === 200) {
          DriversDataSorted = _.orderBy(
            response.data,
            function(officerInfo) {
              if (officerInfo.managedBy !== null)
                return officerInfo.managedBy.managedByName;
            },
            ["asc"]
          );

          let managedByName = "";
          let registeredByName = "";
          DriversData = DriversDataSorted.map((officerInfo, i) => {
            if (officerInfo.managedBy === null) {
              managedByName = "None";
            } else {
              managedByName = officerInfo.managedBy.managedByName;
            }

            if (officerInfo.registeredBy === null) {
              registeredByName = "None";
            } else {
              registeredByName = officerInfo.registeredBy.registeredByName;
            }

            return {
              driverDataId: officerInfo.driverDataId,
              serialNumber: i + 1,
              managedBy: managedByName,
              registeredBy: registeredByName,
              nameOfSupervisor: officerInfo.inspector.nameOfSupervisor,
              placeOfInspection: officerInfo.inspector.placeOfInspection,
              dateOfInspection: dateddMMYYYTransformationService(
                officerInfo.inspector.dateOfInspection
              ),
              driversFullName: fullNameService(officerInfo.driver.name),
              driversMobile: officerInfo.driver.driversMobile,
              driversEmail: officerInfo.driver.driversEmail,
              driversLicenseNo: officerInfo.driver.driversLicenseNo,
              driversLicenseExpiryDate: dateddMMYYYTransformationService(
                officerInfo.driver.driversLicenseExpiryDate
              ),
              vehicleType: officerInfo.vehicle.vehicleType,
              vehicleMake: officerInfo.vehicle.vehicleMake,
              yearOfManufacture: officerInfo.vehicle.yearOfManufacture,
              chassisNo: officerInfo.vehicle.chassisNo,
              engineNo: officerInfo.vehicle.engineNo,
              motExpiry: dateddMMYYYTransformationService(
                officerInfo.vehicle.motExpiry
              ),
              insuranceExpiry: dateddMMYYYTransformationService(
                officerInfo.vehicle.insuranceExpiry
              ),
              nameOfOwner: officerInfo.owner.nameOfOwner,
              ownersHouseAddress: officerInfo.owner.ownersHouseAddress,
              ownersMobileNo: officerInfo.owner.ownersMobileNo
            };
          });
          setDrivers(DriversData);
          setAllDrivers(DriversDataSorted);
          setLoading(false);
        }
      })
      .catch(errors => {
        if (errors.response) {
          const responseErrors = errors.response.data["errors"];
          setErrors(responseErrors);
          setDrivers([]);
          setLoading(false);
        }
      });

    return () => {
      setDrivers([]);
      setErrors([]);
    };
  }, []);

  const capitalizeFirstLetter = string =>
    string[0] ? `${string[0].toUpperCase()}${string.substring(1)}` : "";

  const [columns, setColumns] = useState([
    { title: "S/N", field: "serialNumber" },
    { title: "Managed By", field: "managedBy" },
    { title: "Registered By", field: "registeredBy" },
    { title: "Supervisor's Name", field: "nameOfSupervisor" },
    { title: "Place of Inspection", field: "placeOfInspection" },
    { title: "Date of Inspection", field: "dateOfInspection" },
    { title: "Driver's Fullname", field: "driversFullName" },
    { title: "Driver's Mobile", field: "driversMobile" },
    { title: "Driver's Email", field: "driversEmail" },
    { title: "Driver's License No.", field: "driversLicenseNo" },
    {
      title: "Driver's License Expiry Date",
      field: "driversLicenseExpiryDate"
    },
    { title: "Vehicle Type", field: "vehicleType" },
    { title: "Vehicle Make", field: "vehicleMake" },
    { title: "Year of Manufacture", field: "yearOfManufacture" },
    { title: "Chassis No.", field: "chassisNo" },
    { title: "Engine No.", field: "engineNo" },
    { title: "MOT Expiry Date", field: "motExpiry" },
    { title: "Vehicle Insurance Expiry Date", field: "insuranceExpiry" },
    { title: "Vehicle Owner's Name", field: "nameOfOwner" },
    { title: "Vehicle Owner's Address", field: "ownersHouseAddress" },
    { title: "Vehicle Owner's Mobile No.", field: "ownersMobileNo" }
  ]);

  const DriversRecords = props => {
    return (
      <div>
        <br />
        <br />
        <h2>
          <b>Drivers Records</b>
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
          data={Drivers}
          options={{
            actionsColumnIndex: -1,
            exportButton: true
          }}
          actions={[
            Role === "Admin"
              ? {
                  icon: "edit",
                  tooltip: "Edit Driver",
                  onClick: (event, rowData) => {
                    httpOthers(
                      "get",
                      "Data/GetDriversData",
                      {
                        "Content-type": "application/json"
                      },
                      null
                    )
                      .then(response => {
                        if (response.status === 200) {
                          const driversData = response.data;
                          const driversDataFlat = flatten(driversData);

                          const driversDataFlatRealKeys = {};
                          for (const key in driversDataFlat) {
                            if (driversDataFlat.hasOwnProperty(key)) {
                              let value = driversDataFlat[key];
                              const keyArray = key.split(".");
                              const lastKey = keyArray[keyArray.length - 1];
                              const finalKey = capitalizeFirstLetter(lastKey);
                              driversDataFlatRealKeys[finalKey] = value;
                            }
                          }
                          editDriversData(driversDataFlatRealKeys);
                          history.push(`Admin/Verification`);
                        }
                      })
                      .catch(errors => {
                        if (errors.response) {
                          const responseErrors = errors.response.data;
                          window.location.reload();
                          alert(responseErrors["errors"]);
                        }
                      });
                  }
                }
              : {
                  icon: "edit",
                  tooltip:
                    "You require administrative privileges to edit a driver. Please contact your administrator."
                },
            Role === "Admin"
              ? {
                  icon: "delete",
                  tooltip: "Delete Driver",
                  onClick: (event, rowData) => {
                    console.log("Logged output -->: rowData", rowData);
                    if (rowData) {
                      setDrivers(prevState => {
                        const Drivers = [...prevState];
                        const index = Drivers.indexOf(rowData);
                        Drivers.splice(index, 1);
                        return Drivers;
                      });
                    }
                    httpOthers(
                      "delete",
                      "Admin/DeleteDriver",
                      {
                        "Content-type": "application/json"
                      },
                      { driverDataId: rowData.driverDataId }
                    )
                      .then(response => {
                        if (response.status === 200) {
                          const message = response.data;
                          alert(message["message"]);
                        }
                      })
                      .catch(errors => {
                        if (errors.response) {
                          const responseErrors = errors.response.data;
                          window.location.reload();
                          alert(responseErrors["errors"]);
                        }
                      });
                  }
                }
              : {
                  icon: "delete",
                  tooltip:
                    "You require administrative privileges to delete a driver. Please contact your administrator."
                }
          ]}
        />
      </div>
    );
  };

  // if (loading)
  //   return (
  //     <Portal node={document && document.getElementById("portal")}>
  //       <h1>LOADING...</h1>
  //       {/* <ReactLoading type={"Spin"} color="#006992" /> */}
  //     </Portal>
  //   );

  return (
    <Suspense fallback={<ReactLoading type={"Spin"} color="#006992" />}>
      <Switch>
        <Route
          exact
          path={`${path}`}
          render={props => <DriversRecords {...props} />}
        />
        <Route
          exact
          path={`Auth/Verification`}
          render={props => <VehicleRoute {...props} />}
        />
      </Switch>
    </Suspense>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    editDriversData: driversDataFlat =>
      dispatch(editDriversDataAction(driversDataFlat))
  };
};

export default connect(null, mapDispatchToProps)(DriversListRoute);
