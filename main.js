// the discord.js library
const Discord = require('discord.js');
const client = new Discord.Client();

// our discord token + the prefix for our commands
const { token, prefix } = require('./config.json');

// loads our quotes
const { quotes } = require('./quotes.json');

// message when the bot is ready!
client.on('ready', () => {
    console.log('quote-bot succesfully loaded!');
});

// logs in with our token
client.login(token);

client.on('message', message => {
    // checks if the message begins with our prefix and if the author of the message is not the bot itself
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // if the command is "#quote"
    if (message.content === `${prefix}quote`) {
        // get a random quote
        const quoteIndex = Math.floor(Math.random() * quotes.length);

        // gets the message
        const quote = quotes[quoteIndex][0];

        // gets the author
        const author = quotes[quoteIndex][1];

        message.channel.send('`🗨 ' +
            quote +
            '` - ' + author);
    }

});

