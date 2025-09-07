const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel ? each.fuel : ""}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops ? each.stops : ""}</td>
  <td>${each.ownedBy ? each.ownedBy : ""}</td>
  <td>${each.isElectric ? "Yes" : "No"}</td>
  <td>${each.isTandem ? "Yes" : "No"}</td>
</tr>`;
  });
}

function clearTable() {
  tbodyPointer.innerHTML = "";
}

showTheseVehicles(vehicles);

// Show all vehicles
document.getElementById("all").addEventListener("click", () => {
  clearTable();
  showTheseVehicles(vehicles);
});

// Show only elevtric vehicles
const electric = vehicles.filter((vehicle) => vehicle.isElectric === true);
document.getElementById("electric").addEventListener("click", () => {
  clearTable();
  showTheseVehicles(electric);
});

// Show only vehicles with more than 2 passengers
const over2Passengers = vehicles.filter((vehicle) => vehicle.passengers > 2);
document.getElementById("twoPassengers").addEventListener("click", () => {
  clearTable();
  showTheseVehicles(over2Passengers);
});

// Show only electric vehicles owned by Jonas
const electricByJonas = vehicles.filter(
  (vehicle) => vehicle.isElectric === true && vehicle.ownedBy === "Jonas",
);
document.getElementById("jonas").addEventListener("click", () => {
  clearTable();
  showTheseVehicles(electricByJonas);
});

// Show only vehicles that use rugbrød as fuel and have more than 1 passenger
const ryebreadOver1Passenger = vehicles.filter(
  (vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1,
);
document.getElementById("ryebread").addEventListener("click", () => {
  clearTable();
  showTheseVehicles(ryebreadOver1Passenger);
});
