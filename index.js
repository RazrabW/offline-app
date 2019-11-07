const express = require('express');
const app = express();
const io = require('socket.io');
const fs = require('fs');
const path = require('path');

let port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('Server listening at port %d', port);
});