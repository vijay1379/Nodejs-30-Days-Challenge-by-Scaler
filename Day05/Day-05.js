const path = require("path");

function checkFileExtension(filePath, expectedExtension) {
    // Implementation
    const fileExtension = path.extname(filePath);
    if (fileExtension == expectedExtension)
        console.log("File has the expected extension: ", expectedExtension);
    else
        console.log("File does not have the expected extension. Expected: . jpg, Actual: ", fileExtension);
}


checkFileExtension('test-files/file1.txt', '.txt');
// Expected Output: File has the expected extension: .txt
checkFileExtension('test-files/image.png', '.jpg');
// Expected Output: File does not have the expected extension. Expected: 