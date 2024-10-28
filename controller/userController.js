let users = [
    {id: 1, nome: "Davi", email:"davi@outlook.com"},
    {id: 2, nome: "Ryan", email:"ryan@outlook.com"},
]

const getAllUsers = (_req, res) => {
    res.json(users);
}

const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id == userId);
    if (!user) {
        const error = new Error("Usuário nãp Encontrado!");
        error.statusCode = 404;
    }
    res.json(user)
}

const createUser = (req, res) => {
    const  {nome, email } = req.body;
    if (!nome || !email) {
        return res
        .status(400)
        .json({error: " Nome e E-mail são obrigatários!"})
    }
    const newUser = {
        id: users.length + 1,
        nome,
        email
    }
    users.push(newUser);
    res.status(201).json(newUser);
}

const UpdateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const {nome, email} = req.body;

    const userIndex = users.findIndex((u) => u.id == userId)
    if (userIndex === -1){
        return res.status(404).json({error: "Usuário não encontrado!"})
    }

    if (nome) users[userIndex].nome = nome;
    if (email) users[userIndex].email = email;
    // users[userIndex] = {
    //     ...users[userIndex],
    //     nome,
    //     email
    // };
    res.json(users[userIndex]);
}

const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.find((u) => u.id !== userId);
    res.json({mensagem: " Usuário deletado com sucesso!"})
}
module.exports = {
   getAllUsers,
   getUserById,
   createUser,
   UpdateUser,
   deleteUser
}
