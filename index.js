var child_process = require('child_process');
var fs = require('fs');
var here = __dirname.replace(/\\/g, '/');

if (process.platform != 'win32') {
    console.log('This module only supports Windows, expect crashing and bad stuff')
}

fs.exists(__dirname + '/extractor.exe', (exists) => {
    if (!exists) {
        console.log('Building extractor...')
        child_process.exec(`csc -unsafe ${here}/extractor.cs -out:${here}/extractor.exe`)
    }
})


/**
 * Grabs base64 png icon from file
 * @param {String} iconPath Path to icon
 * @param {Function} callback returns error if there's an error, else base64 png image data
 */
module.exports.extractIcon = function (iconPath, callback) {
    fs.exists(__dirname + '/extractor.exe', (exists) => {
        if (!exists) {
            console.log('csc is still building extractor, if this doesn\'t work or take too long, delete extractor.exe from module path and run `npm run build`')
        }
        child_process.exec(`${here}/extractor.exe "${iconPath}"`, (err, stdout, stderr) => {
            if (err) {
                callback(err)
                return
            }
            callback(stdout.trim())
        })
    })
}

module.exports.extractIconAsync = function (iconPath) {
    return new Promise(callback => {
        module.exports.extractIcon(iconPath, callback)
    })
}