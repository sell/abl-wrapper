const { abl } = require('../index');

abl.count(1, 1).then((data) => console.log(data)).catch((e) => console.log(e))
abl.vote('', '').then((data) => console.log(data)).catch((e) => console.log(e))