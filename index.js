const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ] })

const { request } = require('undici')
const dotenv = require('dotenv')
dotenv.config()

client.on('ready', () => {
    console.log('Bot started working...')
})

client.login(process.env.BOT_TOKEN)