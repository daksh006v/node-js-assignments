const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let states = [
  { id: 1, name: "Andhra Pradesh", population: 49386799, literacyRate: 67.02, annualBudget: 279279, gdp: 14000000 },
  { id: 2, name: "Arunachal Pradesh", population: 1383727, literacyRate: 65.38, annualBudget: 28000, gdp: 300000 },
  { id: 3, name: "Assam", population: 31205576, literacyRate: 72.19, annualBudget: 122000, gdp: 4500000 },
  { id: 4, name: "Bihar", population: 104099452, literacyRate: 61.80, annualBudget: 261885, gdp: 6500000 },
  { id: 5, name: "Chhattisgarh", population: 25545198, literacyRate: 70.28, annualBudget: 121500, gdp: 4000000 },
  { id: 6, name: "Goa", population: 1458545, literacyRate: 88.70, annualBudget: 25000, gdp: 800000 },
  { id: 7, name: "Gujarat", population: 63872399, literacyRate: 78.03, annualBudget: 243965, gdp: 21000000 },
  { id: 8, name: "Haryana", population: 25351462, literacyRate: 75.55, annualBudget: 180000, gdp: 9000000 },
  { id: 9, name: "Himachal Pradesh", population: 6864602, literacyRate: 82.80, annualBudget: 50000, gdp: 2000000 },
  { id: 10, name: "Jharkhand", population: 32988134, literacyRate: 66.41, annualBudget: 110000, gdp: 4500000 }
];

const findStateIndex = (id) => states.findIndex(s => s.id === parseInt(id));

app.get("/states", (req, res) => {
  res.status(200).json(states);
});

app.get("/states/highest-gdp", (req, res) => {
  const highest = states.reduce((max, curr) => curr.gdp > max.gdp ? curr : max, states[0]);
  res.status(200).json(highest);
});

app.get("/states/:id", (req, res) => {
  const state = states.find(s => s.id === parseInt(req.params.id));
  if (!state) return res.status(404).json({ message: "State not found" });
  res.status(200).json(state);
});

app.post("/states", (req, res) => {
  const { name, population, literacyRate, annualBudget, gdp } = req.body;
  const newState = {
    id: states.length ? states[states.length - 1].id + 1 : 1,
    name,
    population,
    literacyRate,
    annualBudget,
    gdp
  };
  states.push(newState);
  res.status(201).json(newState);
});

app.put("/states/:id", (req, res) => {
  const index = findStateIndex(req.params.id);
  if (index === -1) return res.status(404).json({ message: "State not found" });

  const { name, population, literacyRate, annualBudget, gdp } = req.body;

  states[index] = {
    id: states[index].id,
    name,
    population,
    literacyRate,
    annualBudget,
    gdp
  };

  res.status(200).json(states[index]);
});

app.put("/states/:id/budget", (req, res) => {
  const index = findStateIndex(req.params.id);
  if (index === -1) return res.status(404).json({ message: "State not found" });

  states[index].annualBudget = req.body.annualBudget;
  res.status(200).json(states[index]);
});

app.put("/states/:id/population", (req, res) => {
  const index = findStateIndex(req.params.id);
  if (index === -1) return res.status(404).json({ message: "State not found" });

  states[index].population = req.body.population;
  res.status(200).json(states[index]);
});

app.patch("/states/:id/literacy", (req, res) => {
  const index = findStateIndex(req.params.id);
  if (index === -1) return res.status(404).json({ message: "State not found" });

  states[index].literacyRate = req.body.literacyRate;
  res.status(200).json(states[index]);
});

app.patch("/states/:id/gdp", (req, res) => {
  const index = findStateIndex(req.params.id);
  if (index === -1) return res.status(404).json({ message: "State not found" });

  states[index].gdp = req.body.gdp;
  res.status(200).json(states[index]);
});

app.patch("/states/:id", (req, res) => {
  const index = findStateIndex(req.params.id);
  if (index === -1) return res.status(404).json({ message: "State not found" });

  states[index] = { ...states[index], ...req.body };
  res.status(200).json(states[index]);
});

app.delete("/states/:id", (req, res) => {
  const index = findStateIndex(req.params.id);
  if (index === -1) return res.status(404).json({ message: "State not found" });

  states.splice(index, 1);
  res.sendStatus(204);
});

app.delete("/states/name/:stateName", (req, res) => {
  const name = req.params.stateName.toLowerCase();
  const initialLength = states.length;

  states = states.filter(s => s.name.toLowerCase() !== name);

  if (states.length === initialLength)
    return res.status(404).json({ message: "State not found" });

  res.sendStatus(204);
});

app.delete("/states/low-literacy/:percentage", (req, res) => {
  const percentage = parseFloat(req.params.percentage);
  const before = states.length;

  states = states.filter(s => s.literacyRate >= percentage);
  const deletedCount = before - states.length;

  res.status(200).json({ deletedCount });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));