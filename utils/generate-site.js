const fs = require('fs');

module.exports = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if theres an err, reject the Promise and send the error to the Promise's catch method
            if (err) {
                reject (err);
                return;
            }
            // if everything is well, resolve the Promise and send success message
            resolve ({
                ok: true,
                message: 'File created'
            });
        });
    });
};

