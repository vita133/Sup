const db = require('./db_connection');
const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use('/api', require('./router'));

db.connect(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)));