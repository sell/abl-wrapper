const axios = require('axios');
const url = 'https://botlists.com/api/bot';

const abl = {

    /**
     * bots guild count
     * @param {string} apiKey Your bots token from botlists.com
     * @param {object} client
     * @returns {Promise<any>}
     */

     count: async (apiKey, client) => {

        if (typeof apiKey !== "string") throw new Error('Api Key only should be a string, not a number');
        if (!client) throw new Error('Missing client param');
        try {

            client.on('ready', async () => {
                try {
                    const post = await axios.post(url, {
                        guild_count:  client.guilds.cache.size
                    }, {
                        headers: {
                            token: apiKey,
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        }
                    })

                    return post.data
                } catch (e) {
                    return e.message
                }
            });

        } catch (e) {
            return e.message
        }

    },

}

module.exports = { abl };
