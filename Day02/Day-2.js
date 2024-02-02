const fs = require("fs")

function writeToFile(filePath, content) {

    try {
        fs.writeFileSync(filePath, content)
        console.log("Data written to", filePath)
    } 
    catch (error)
    {
        console.log(error.message)
    }

}
writeToFile('test-files/output1.txt', 'Sample content.');
writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');