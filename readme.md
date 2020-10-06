Astro Bot List wrapper

[https://botlists.com](https://botlists.com)

```js
const { abl } = require('abl-wrapper');
const { client } = require('discord.js');
const client = new Client({
    disableEveryone: true,
})

client.on('ready', () => {
    abl.count('<api key>', client).then((data) => console.log(data)).catch((e) => console.log(e))
})
```

```js
/* WILL NO LONGER WORK, WORKING ON MAKING IT BETTER: DEPRECATED */
abl.vote('api key', 'user id').then((data) => console.log(data)).catch((e) => console.log(e))
```