// script.js

// function to generate a range of numbers
const range = (start, end) => Array();


window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = (name) => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label); // Add the label to the container
  };
};