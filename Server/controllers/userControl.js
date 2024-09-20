const {v4: uuidv4} = require('uuid');
const users=[
    {
        id: 1,
        email: 'johndoe@yf.com',
        password: 'password123'
    }
]


const getUser=(req, res) => {
    res.json({users})

}
const signUP=(req, res) => {
    
    const {email, password} = req.body;

    const newUser = {id: uuidv4(), email, password};
     users.push(newUser);
     res.status(201).json(newUser);
}
const signIN=(req, res) => {
    const {email, password} = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.json({user});
    } else {
        res.status(401).json({error: 'Invalid credentials'});
    }
}

module.exports = {getUser, signIN, signUP}