const { abl } = require('../index');

abl.count('<api key>', '').then((data) => console.log(data)).catch((e) => console.log(e))
