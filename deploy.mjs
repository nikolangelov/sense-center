import {NodeSSH} from "node-ssh";
import * as path from "node:path";
import * as dotenv from 'dotenv';
dotenv.config({path: "./.env.deploy"});

const {
    SSH_HOST,
    SSH_USERNAME,
    SSH_PRIVATE_KEY,
    SSH_PORT,
    SOURCE_FOLDER,
    TARGET_CLIENT_FOLDER,
    TARGET_SERVER_FOLDER
} = process.env;

if (!TARGET_CLIENT_FOLDER || !TARGET_SERVER_FOLDER)
    throw "TARGET_CLIENT_FOLDER and TARGET_SERVER_FOLDER should be specified"

await deployViaSSH()

function tick(localPath, remotePath, error) {
    if (error) {
        console.error(`Failed to copy ${localPath} -> ${remotePath}`, error);
    } else {
        console.log(`Copied ${localPath} -> ${remotePath}`);
    }
}

async function deployViaSSH() {
    try {
        const ssh = new NodeSSH();

        // Connection config
        const sshConfig = {
            host: SSH_HOST,
            username: SSH_USERNAME,
            port: parseInt(SSH_PORT || '22'),
            privateKeyPath: SSH_PRIVATE_KEY
        };

        console.log('Connecting to remote server...');
        await ssh.connect(sshConfig);
        console.log('Connected successfully!');

        // Resolve source and target paths
        const sourcePathClient = path.resolve(process.cwd(), SOURCE_FOLDER || 'dist', 'client');
        const targetPathClient = TARGET_CLIENT_FOLDER;

        console.log(`Copying files from ${sourcePathClient} to ${targetPathClient}`);
        await ssh.putDirectory(sourcePathClient, targetPathClient, {
            tick,
            recursive: true,
            concurrency: 10,
        });

        console.log('Deployment completed successfully!');
        const res = await ssh.execCommand("pm2 reload crm-server")
        console.log(res.stdout, res.stderr)
        ssh.dispose();

    } catch (error) {
        console.error('Deployment failed:', error);
        process.exit(1);
    }
}
