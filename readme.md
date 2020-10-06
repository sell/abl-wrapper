<h1 align="center">Astro Bot List Javascript wrapper</h1>

<p>Send your guild count easily</p>

[https://botlists.com](https://botlists.com)

```js
const { abl } = require('abl-wrapper');
const { client } = require('discord.js');
const client = new Client({
    disableEveryone: true,
})

abl.count('token', client, (error, success) => {
    if(error) throw new Error(error);
    else console.log(success)
});
```