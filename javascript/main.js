const inTheWater = ["salt", "dirt", "calcite", "uranium", "rubber"];
const toFilterOut = ["uranium", "dirt"];

let filteredWater = [];

const filterWater = () => {
    event.preventDefault();
    let filteredWater = inTheWater.filter(item => !toFilterOut.includes(item));
    console.log(filteredWater);
    document.getElementById("output").innerHTML = "";
    for (let item of filteredWater) {
        document.getElementById("output").innerHTML +=
        "<p>" + item + "</p>"; 
    }

};

document.getElementById("btn").addEventListener("click", filterWater);