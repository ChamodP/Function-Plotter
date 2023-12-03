function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  let right = document.querySelector(".right");

  let parameters = [];
  let xMin = document.getElementById("xMin").value;
  let xMax = document.getElementById("xMax").value;
  let yMin = document.getElementById("yMin").value;
  let yMax = document.getElementById("yMax").value;

  let color = document.getElementById("color").value;

  let fn = document.getElementById("function").value;

  parameters = {
    target: "#functionPlot",
    data: [
      {
        fn: fn,
        color: color,
      },
    ],
    grid: true,
    yAxis: { domain: [yMin, yMax] },
    xAxis: { domain: [xMin, xMax] },
  };

  functionPlot(parameters);

  right.style.border = "solid 2px rgb(41, 39, 39)";
  right.style.backgroundColor = "white";
  right.style.padding = "30px";
  right.style.borderRadius = "4px";
  right.style.justifyContent = "center";
}
