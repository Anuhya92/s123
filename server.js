import express from "express";
const app = express();
app.use(express.json());
const PORT = 300;
app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.json({ message: "users added successfully!", use: newUser });
});
