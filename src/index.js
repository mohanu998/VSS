import http from 'http';
import Server from './initialize/App';
import socket from './shared/socket';

const socketMap = new Map();
// initialize routes
const appServer = Server.bootstrap(socketMap);
// require express()
const App = appServer.app;

const port = normalizePort(process.env.PORT || '7051');
App.set('port', port);

//  passed express() to the http.Server() method.
const server = http.createServer(App);

/*  Next, we passed the HTTP server directly
    to the SocketIO method exactly as
    we would have if we were using a nonExpress HTTP server.
*/
socket(server);

server.listen(port, () => {
    console.log(`i am listening on port: ${port}`)
})

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }
    return false;
}