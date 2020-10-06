Astro Bot List wrapper

[https://botlists.com](https://botlists.com)

```js
const { abl } = require('abl-wrapper');

abl.count('api key', client.guilds.cache.size).then((data) => console.log(data)).catch((e) => console.log(e))

/* voting from api is currently taken down */
abl.vote('api key', 'bot id').then((data) => console.log(data)).catch((e) => console.log(e))
```