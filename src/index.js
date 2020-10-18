const axios = require('axios');
const url = 'https://botlists.com/api/bot';

const abl = {

    /**
     * bots guild count
     * @param {string} apiKey Your bots token from botlists.com
     * @param {object} client
     * @param callback
     */

    count: (apiKey, client, callback) => {

        if (typeof apiKey !== "string") throw new Error('Api Key only should be a string, not a number');
        if (!client) throw new Error('Missing client param');

        async function postingStats () {
            try {
                const post = await axios.post(url, {
                    guild_count: client.guilds.cache.size
                }, {
                    headers: {
                        token: apiKey,
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                });

                callback(null, post.data);
            } catch (e) {
                callback(new Error('API limit reached try again in an hour!'))
            }
        }

        client.on('ready', async () => {
            postingStats()
            setInterval(postingStats, 1200000)
        });

    },

    /**
     * GET bots stats
     * @param apiKey
     * @return {Promise<any>}
     */

    stats: async (apiKey) => {

        const stat = await axios.get(url, {
            headers: {
                token: apiKey,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });

        return stat.data;
    }

}

module.exports = { abl };