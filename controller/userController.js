let users = [
    {id: 1, nome: "Davi", email:"davi@outlook.com"},
    {id: 2, nome: "Ryan", email:"ryan@outlook.com"},
]

const getAllUsers = (_req, res) => {
    res.json(users);
}

module.exports = {
   getAllUsers
}