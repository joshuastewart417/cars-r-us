import { Colors } from "./colors.js";
import { Interior } from "./interior.js";
import { Technology } from "./technology.js";
import { Wheels } from "./wheels.js";
import { Orders } from "./orders.js";
import { addCustomOrder } from "./database.js";

document.addEventListener("click", (event) => {
  if (event.target.id === "orderButton") {
    addCustomOrder();
  }
});

export const cars_r_us = () => {
  return `
        <h1>Cars-R-Us</h1>
        
        <article class="choices">
            <section class="choices_colors options">
                <h2>Colors</h2>
                    ${Colors()}
            </section>
            <section class="choices_interior options">
                <h2>Interior</h2>
                    ${Interior()}
            </section>
            <section class="choices_technology options">
                <h2>Technology</h2>
                    ${Technology()}
            </section>
            <section class="choices_wheels options">
                <h2>Wheels</h2>
                    ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
                ${Orders()}
        </article>

    `;
};
