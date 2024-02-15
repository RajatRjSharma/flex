document.getElementById("container").style.height =
  window.innerHeight * 0.975 + "px";
document.getElementById("container").style.width =
  window.innerWidth * 0.98 + "px";

const justifyContentElement = document.getElementById("justify-content");
justifyContentElement.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  console.log("Selected value: " + selectedValue);
  document.getElementById("box").style.justifyContent = selectedValue;
});

const alignItemsElement = document.getElementById("align-items");
alignItemsElement.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  console.log("Selected value: " + selectedValue);
  document.getElementById("box").style.alignItems = selectedValue;
});
