# discord-quote-bot
Simple discord bot boilierplate for a quote bot that can be set up in a couple of minutes!

## Example

![gif](https://i.imgur.com/VpO3Zi2.gif)

## What?

This is a really simple boilerplate that you can download and set up a fully working bot that will send a random quote from a list of quotes!

## Why?

I made this in about half an hour because I was going to make a bot for a friend of mine and was like, y'know this thing might be useful to others and made it open source.
Hopefully you can get some use of it!

## Getting Started

1. Download [node.js](https://nodejs.org/en/).
2. Download this repo using either git or from [here](https://github.com/fr3fou/discord-quote-bot/archive/master.zip).
3. Open up your terminal / console in the same directory as the repo.
4. Install dependencies using NPM.

    ```sh
    npm install
    ```

5. Go [here](https://discordapp.com/developers/applications/) and make a new application.

    ![png](https://i.imgur.com/mHRVd8O.png)
    Pick an avatar / name for your application (don't worry, you can change it later!).

6. Go to the bot tab.

    ![png](https://i.imgur.com/epQrK5k.png)

7. Add a bot.

    ![png](https://i.imgur.com/hOCEpK6.png)

8. Pick an avatar / name for the bot itself (this is what will appear in the server you invite it to!)

    ![png](https://i.imgur.com/TzEdACa.png)

9. Toggle this bit off if you would rather be the only one who can invite your bot.

    ![png](https://i.imgur.com/VPu8aCA.png)

10. Click copy to get your token! (this is important as you will need it in the next step)

    ![png](https://i.imgur.com/AIkf8q0.png)

11. Rename your config.json.example file to config.json, open it using your favorite text editor and add your Discord bot token inside the quotes `"token":""`

    ![gif](https://i.imgur.com/dzINGrs.gif)
    *Please note that if you can't see the file extension `.json.example`, make sure you toggle the option to see extensions in your Windows folder settings!*
    ```json
    {
    "token":"",
    "prefix":">"
    }
    ```

12. Change the prefix if you feel like the default one is not up to your liking! (Default one is `>` and the command is `quote`, so in order to toggle the command in Discord you would have to type in `>quote`)

13. Edit quotes.json with quotes of your choice!

    ```json
    {
        "quotes": [
            ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
            ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
            ["Argue with idiots, and you become an idiot.", "Paul Graham"],
            ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
            ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
        ]
    }
    ```

    Just add another `[]` with the quote and    the author. Make sure you follow the same  syntax as the other quotes and add a comma   right at the end of the last quote!
    Example:

    ```json
    {
        "quotes": [
            ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
            ["Good Artists Copy, Great Artists  Steal.", "Pablo Picasso"],
            ["Argue with idiots, and you become an idiot.", "Paul Graham"],
            ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
            ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"],
            ["That's one small step for man, one giant leap for mankind.", "Neil Armstrong"]
        ]
    }
    ```

14. After you've added all of your quotes, you can feel free to start the bot! Open up your terminal / console and type in:

```sh
node main.js
```

This should start up the bot and if you've set up the token, you should be good to go!
Invite the bot to your server using this link.

```http
https://discordapp.com/oauth2/authorize?client_id=YOUR_ID_HERE&scope=bot
```

**Make sure you replace YOUR_ID_HERE with your client id from** [here](https://discordapp.com/developers/applications/)! (find the application you made eariler)

![png](https://i.imgur.com/bTTyxkI.png)

![gif](https://i.imgur.com/Lyf4Udu.gif)

## Final words

And that's it! It really was simple, wasn't it? Hope you enjoyed this little guide, if you have any improvements you'd wish to contribute with, feel free to send a pull request over at the GitHub [repo](https://github.com/fr3fou/discord-quote-bot)!

## Credits

[discord.js](https://discord.js.org/#/)

[NexT](http://jekyllthemes.org/themes/jekyll-theme-next/)

###### follow me @ GitHub
