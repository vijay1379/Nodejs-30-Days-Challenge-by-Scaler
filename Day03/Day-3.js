const { exec } =require('child_process');
function executeCommand(command) {
    const childProcess = exec(command,(error,stdout,stderr)=>{
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Command stderr: ${stderr}`);
            return;
        }
        console.log(`Command output: ${stdout}`);
    });
    childProcess.on("error",(err)=>{
        console.error(`Error spawning process: ${err}`);

    });   
}

executeCommand('ls -la');
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!