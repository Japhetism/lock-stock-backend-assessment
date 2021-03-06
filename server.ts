const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
});

process.on('uncaughtException', (err: any) => {
    console.log('UNCAUGHT EXCEPTION!!! shutting down...');
    console.log(err);
    console.log(err.name, err.message);
    process.exit(1);
});

const server = require('./app');

// Start the server
const port = process.env.PORT;
const hostName = process.env.HOSTNAME;
server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
});

process.on('unhandledRejection', (err: any)  => {
    console.log('UNHANDLED REJECTION!!! shutting down...');
    console.log(err.name, err.message);
});

module.exports = server;