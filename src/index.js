const axios = require('axios');
const url = 'https://botlists.com/api/bot';

const abl = {

    /**
     * bots guild count
     * @param {string} apiKey Your bots token from botlists.com
     * @type {string} apiKey
     * @param {number} data Your guild count
     * @returns {Promise<any>}
     */

     count: async (apiKey, data) => {

        if (typeof apiKey !== "string") throw new Error('Api Key only should be a string, not a number');

        try {
            const post = await axios.post(url, {
                guild_count: data
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

    },

    /**
     * vote on your bot
     * @param {string} apiKey Your bots token from botlists.com
     * @param {string} userID the user's id who voted
     * @returns {Promise<any>}
     */

    vote: async (apiKey, userID) => {

        if (typeof apiKey !== "string" || typeof userID !== "string" ) throw new Error('Api Key only should be a string, not a number');

        try {

            const post = await axios.post(`${url}/vote`, {
                userID
            }, {
                headers: {
                    token: apiKey,
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });

            return post.data

        } catch (e) {
            return e.message
        }
    }
}

module.exports = { abl };
