var fs = require('fs'),
    glob = require('glob');

['src/ApiClient.js', 'src/model/*.js', 'src/api/*.js'].map(f => {
    glob.sync(f).forEach(function(file) {
        fs.appendFileSync('dist/ordercloud-sdk.js', fs.readFileSync(file, 'UTF-8'));
    });
});