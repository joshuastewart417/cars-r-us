const database = {
  orderBuilder: {
    colorsId: "",
    interiorId: "",
    technologyId: "",
    wheelsId: "",
  },

  colors: [
    { id: 1, type: "Silver", price: 210 },
    { id: 2, type: "Midnight Blue", price: 245 },
    { id: 3, type: "Firebrick Red", price: 190 },
    { id: 4, type: "Spring Green", price: 235 },
  ],
  interior: [
    { id: 1, type: "Beige Fabric", price: 350 },
    { id: 2, type: "Charcoal Fabric", price: 280 },
    { id: 3, type: "White Leather", price: 410 },
    { id: 4, type: "Black Leather", price: 375 },
  ],
  technology: [
    { id: 1, type: "Basic Package", price: 50 },
    { id: 2, type: "Navigation Package", price: 175 },
    { id: 3, type: "Visibility Package", price: 385 },
    { id: 4, type: "Ultra Package", price: 500 },
  ],
  wheels: [
    { id: 1, type: "17-inch Pair Radial", price: 470 },
    { id: 2, type: "17-inch Pair Radial Black", price: 510 },
    { id: 3, type: "18-inch Pair Spoke Silver", price: 550 },
    { id: 4, type: "18-inch Pair Spoke Black", price: 500 },
  ],
  customOrders: [
    {
      id: 1,
      colorsId: 2,
      interiorId: 1,
      technologyId: 2,
      wheelsId: 1,
    },
  ],
};

export const setColor = (id) => {
    database.orderBuilder.colorsId = id;
};
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id;
};
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id;
};
export const setWheel = (id) => {
    database.orderBuilder.wheelsId = id;
};
export const getColors = () => {
  return database.colors.map((color) => ({...color}));
};
export const getInterior = () => {
  return database.interior.map((interior) => ({...interior}));
};
export const getTechnology = () => {
  return database.technology.map((technology) => ({...technology}));
};
export const getWheels = () => {
  return database.wheels.map((wheel) => ({...wheel}));
};
export const getOrders = () => {
  return database.customOrders.map((order) => ({...order}));
};

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder };
  
    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1;
    newOrder.id = database.customOrders[lastIndex].id + 1;
  
    // Add a timestamp to the order
    newOrder.timestamp = Date.now();
  
    // Add the new order object to custom orders state
    database.customOrders.push(newOrder);
  
    // Reset the temporary state for user choices
    database.orderBuilder = {};
  
    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"));
  };