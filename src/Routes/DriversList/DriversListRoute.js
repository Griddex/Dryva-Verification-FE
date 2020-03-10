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
import ReactLoading from "react-loading";

const VehicleRoute = lazy(() => import("../../Routes/Vehicle/vehicleroute"));

const DriversListRoute = props => {
  const { currentRole, editDriversData, history, match } = props;

  const [toVerification, setToVerification] = useState(false);
  const [AllDrivers, setAllDrivers] = useState([]);
  const [Drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Errors, setErrors] = useState([]);

  let DriversDataSorted;
  let DriversData;
  let { path, url } = useRouteMatch();

  useEffect(() => {
    httpOthers("get", "Data/GetDriversData", null, null)
      .then(response => {
        if (response.status === 200) {
          DriversDataSorted = _.sortBy(response.data, "officerName");
          DriversData = DriversDataSorted.map((officerInfo, i) => {
            return {
              dataUniqueNumber: officerInfo.dataUniqueNumber,
              serialNumber: i + 1,
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
        }
      })
      .catch(errors => {
        if (errors.response) {
          const responseErrors = errors.response.data["Errors"];
          setErrors(responseErrors);
          setDrivers([]);
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
        <Link to={"/Admin/DriversList/Verification"}>Edit Drivers</Link>
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
            {
              icon: "save",
              tooltip: "Save User",
              onClick: (event, rowData) => {
                httpOthers(
                  "get",
                  "Data/GetAllDriversData",
                  {
                    "Content-type": "application/json"
                  },
                  null
                )
                  .then(response => {
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
                    //setToVerification(true);
                    // history.push(`${url}/Verification`);
                    history.push(`Admin/Verification`);
                    //How does verification form knows to load from redux store?
                    //-->Create an equivalent update component for each form that reads
                    //from the store? OR checking the route from which admin is coming from
                    //and using that route as a parameter to load redux store or not
                  })
                  .catch(error => {});
              }
            }
          ]}
          editable={{
            onRowDelete: oldofficerInfo => {
              return new Promise((resolve, reject) => {
                if (oldofficerInfo) {
                  setDrivers(prevState => {
                    const Drivers = [...prevState];
                    const index = Drivers.indexOf(oldofficerInfo);
                    Drivers.splice(index, 1);
                    return Drivers;
                  });
                }

                const officerInfoObj = DriversData.filter(obj => {
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
        />
      </div>
    );
  };

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
          // path={`${path}/Verification`}
          path={`Admin/Verification`}
          render={props => <VehicleRoute {...props} />}
          //render={props => <h1>DDV</h1>}
        />
      </Switch>
    </Suspense>
  );

  if (toVerification) {
    //return <Redirect to={`${currentRole}/DriversList/verification`} />;
    //history.push(`Admin/DriversList/verification`);
  }
};

const mapDispatchToProps = dispatch => {
  return {
    editDriversData: driversDataFlat =>
      dispatch(editDriversDataAction(driversDataFlat))
  };
};

export default connect(null, mapDispatchToProps)(DriversListRoute);
