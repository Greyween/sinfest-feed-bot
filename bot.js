const botApi = require('node-telegram-bot-api');

const parser = require('./parser.js');

const bot = new botApi(process.env.TELEGRAM_TOKEN);

parser((url) => {
	console.log(`Sending ${url} to @${process.env.TELEGRAM_CHANNEL}`);
	bot.sendPhoto(`@${process.env.TELEGRAM_CHANNEL}`, url);
})