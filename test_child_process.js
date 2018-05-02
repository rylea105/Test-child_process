'use strict';

console.log('Starting');
const child_process = require('child_process');

setInterval(() => {
    console.log('Spawning test.sh');
    const process = child_process.spawn('./test.sh');
    process.on('exit', () => {
        console.log('process exit');
    });
    process.stdout.on('data', (data) => {
    	console.log('Output: ' + data.toString('utf8'));
    });
}, 1000);
