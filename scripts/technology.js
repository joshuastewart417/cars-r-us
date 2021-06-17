import { getTechnology, setTechnology } from "./database.js";

const technology = getTechnology();

document.addEventListener("change", (event) => {
  if (event.target.name === "tech") {
    setTechnology(parseInt(event.target.value));
    //window.alert(`User chose option ${event.target.value}`)
  }
});

export const Technology = () => {
  let html = "<ul>";

  const listItems = technology.map((technology) => {
    return `<li>
            <input type="radio" name="tech" value="${technology.id}"/> ${technology.type}
            </li>`;
  });

  html += listItems.join("");
  html += "</ul>";

  return html;
};
