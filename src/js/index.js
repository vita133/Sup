const db = require('./db_connection');

const getAllUsers = (req, res) => {
    const query = 'SELECT * FROM user';
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result);
    });
};

const getOneUser = (req, res) => {
    const query = `SELECT * FROM user WHERE id=${req.params.id}`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.sendStatus(404);
        res.status(200).json(result);
    });
};

const createNewUser = (req, res) => {
    if (!req.body.name || !req.body.password || !req.body.isAdmin || !req.body.member_id ) return res.status(400).json({ 'message': 'Name and description required' });

    const query = 'INSERT INTO user SET ?';
    const user = {
        name: req.body.name,
        password: req.body.password,
        isAdmin: req.body.isAdmin,
        member_id: req.body.member_id
    };
    db.query(query, user, (err) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ 'message': 'New user created' });
    });
};

const updateOneUser = (req, res) => {
    if (!req.body.name && !req.body.password && !req.body.isAdmin && !req.body.member_id) return res.status(204).json({ 'message': 'Name or description required' });

    let query = '';
    if (req.body.name) {
        query = `UPDATE user SET name = '${req.body.name}' WHERE id = '${req.params.id}'`;
        db.query(query, (err) => { if (err) return res.status(500).json(err) });
    }
    if (req.body.password) {
        query = `UPDATE user SET password = '${req.body.password}' WHERE id = '${req.params.id}'`;
        db.query(query, (err) => { if (err) return res.status(500).json(err) });
    }
    if (req.body.isAdmin) {
        query = `UPDATE user SET isAdmin = '${req.body.isAdmin}' WHERE id = '${req.params.id}'`;
        db.query(query, (err) => { if (err) return res.status(500).json(err) });
    }
    if (req.body.member_id) {
        query = `UPDATE user SET isAdmin = '${req.body.isAdmin}' WHERE id = '${req.params.id}'`;
        db.query(query, (err) => { if (err) return res.status(500).json(err) });
    }

    res.status(200).json({ 'message': 'User updated' });
};

const deleteOneUser = (req, res) => {
    const query = `DELETE FROM user WHERE id=${req.params.id}`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ 'message': 'User deleted' });
    });
};

module.exports = { 
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
};