export default StoreInitialValues = {
  //Inspector's Form
  nameOfInspector: "",
  nameOfSupervisor: "",
  placeOfInspection: "",
  dateOfInspection: new Date(),
  vehiclePlateNumber: "",
  inspectionPassed: "No",
  generalRemarks: "",

  //Driver's Form
  driversFirstName: "",
  driversMiddleName: "",
  driversSurname: "",
  driversMobile: "",
  driversEmail: "",
  driversLicenseNo: "",
  driversLicenseExpiryDate: "",
  addressLine1: "",
  addressLine2: "",
  postalCode: "",
  country: "Nigeria",
  state: "Akwa Ibom",
  city: "Uyo",

  //Owner's Form
  nameOfOwner: "",
  ownersHouseAddress: "",
  ownersMobileNo: "",
  ownersNextOfKinName: "",

  //Vehicle Details Form
  vehicleType: "",
  vehicleMake: "",
  vehicleModel: "",
  yearOfManufacture: "",
  ChassisNo: "",
  EngineNo: "",
  MOTExpiry: new Date(),
  InsuranceExpiry: new Date(),

  //Engine Fluid Levels Form
  FuelGaugeWorking: false,
  OilLevelPressureGaugeWorking: false,
  TransmissionFluidLevel: false,
  PowerSteeringFluidLevel: false,
  BrakeFluidLevel: false,
  BatteryCharge: false,
  WindshieldWiperFluid: false,
  RadiatorFluidLevel: false,
  FluidsLeakingUnderBus: false,
  EngineWarningLights: false,
  OtherEngineFluidLevels: "",

  //Exterior Checks Form
  HeadlightsHiLow: false,
  FoglampsHazardlamps: false,
  WindshieldCondition: false,
  DirectionalSignalsFrontrear: false,
  TaillightsRunninglights: false,
  BrakelightsBackUpLights: false,
  TireconditionAirpressure: false,
  LugnutsTight: false,
  WindowscanWindfreely: false,
  LuggageStoragedoorsEnginecompartmentPanels: false,
  ExteriorClean: false,
  BodyconditionScratchesDingsDents: false,
  OtherExteriorChecks: "",

  //Interior Checks Form
  Mirrors: false,
  WindshieldWipers: false,
  Horn: false,
  ParkingBrake: false,
  Fans: false,
  AirConditioning: false,
  RadioEquipmentCellphone: false,
  CantheDoorsbeOpenedFreely: false,
  InteriorLights: false,
  DriverSeatBelts: false,
  PassengerSeats: false,
  FireExtinguisher: false,
  OtherEmergencyGear: false,
  DestinationSignbox: false,
  WindowsCleanandcanWindFreely: false,
  InteriorClean: false,
  WastebinAvailableOrEmptied: false,
  OtherInteriorChecks: "",

  //Safety Technical Summary Form
  noOfDefectsOnBus: 0,
  hasSupervisorBeenNotified: "No",
  generalRemarks: "",

  //Upload Images Form
  images: [],

  errors: []
};
