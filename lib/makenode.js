const chokidar = require('chokidar');
const spawn = require('child_process').spawn;
const path = require('path');

class Makenode {
    constructor() {
        this.__init__();
    }

    __init__ = () => {
        this.args = process.argv;
        this.file = this.args[2];
        this.cwd = process.cwd();
        this.watchPaths = [path.join(this.cwd, '**/*.js')];
        this.ignoredPaths = '**/node_modules/*';
    
        this.reload();
        this.startWatching();
        this.listeningEvents();
    }
    reload = () => {
        if (this.nodeServer) this.nodeServer.kill('SIGTERM');

        this.nodeServer = spawn('node', [this.file], {
            stdio: [process.stdin, process.stdout, process.stderr],
        })
    }
    startWatching = () => {
        chokidar
            .watch(this.watchPaths, {
                ignored: this.ignoredPaths,
                ignoreInitial: true,
            })
            .on('all', (event, path) => {
                this.reload();
            })
    }
    listeningEvents = () => {
        // listening on CLI input
        process.stdin.on('data', (chunk) => {
            let cliInput = chunk.toString();

            switch (cliInput) {
                case 'rs\n':
                    this.reload();
                    break;
            }
        })
    }
}
