const fs = require('fs');

function readFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (error, filedata) => {
        if(error) {
            console.log('Error reading file: ', error.message);
        }
        else{
                console.log(filedata);
            }
    });
}

readFileContent('test-files/file1.txt');
// Expected Output: Content of file1.txt
readFileContent('test-files/empty-file.txt');
// Expected Output: (empty string)
readFileContent('test-files/nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...