import { getInterior, setInterior } from "./database.js";

const interior = getInterior();

document.addEventListener("change", (event) => {
  if (event.target.name === "interior") {
    setInterior(parseInt(event.target.value));
    //window.alert(`User chose option ${event.target.value}`)
  }
});

export const Interior = () => {
  let html = "<ul>";

  const listItems = interior.map((interior) => {
    return `<li>
                <input type="radio" name="interior" value="${interior.id}"/> ${interior.type}
                </li>`;
  });

  html += listItems.join("");
  html += "</ul>";

  return html;
};
