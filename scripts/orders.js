import {
  getOrders,
  getColors,
  getInterior,
  getTechnology,
  getWheels,
} from "./database.js";

const colors = getColors();
const interior = getInterior();
const technology = getTechnology();
const wheels = getWheels();

const buildOrderListItem = (order) => {
  let totalCost = 0;

  const foundColor = colors.find((color) => {
    return color.id === order.colorsId;
  });
  totalCost += foundColor.price;

  const foundInterior = interior.find((interior) => {
    return interior.id === order.interiorId;
  });
  totalCost += foundInterior.price;

  const foundTechnology = technology.find((technology) => {
    return technology.id === order.technologyId;
  });
  totalCost += foundTechnology.price;

  const foundWheel = wheels.find((wheel) => {
    return wheel.id === order.wheelsId;
  });
  totalCost += foundWheel.price;

  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return `<li>
    Order #${order.id} cost ${costString} and was placed on ${order.timestamp}
    </li>`;
};

export const Orders = () => {
  const orders = getOrders();
  let html = "<ul>";

  const listItems = orders.map(buildOrderListItem);

  html += listItems.join("");
  html += "</ul>";

  return html;
};
