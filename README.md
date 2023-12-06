# Discord Time Bot

Discord Time Bot is designed to allow easy conversion of times into your own timezone.

## Usage

First you need to set your timezone by using `/set-timezone`

<img width="220" alt="image" src="https://github.com/mcguinnessdr/discord-time-bot/assets/2281608/7719afb8-f661-4d94-b884-a15fdac8a8ac">

Once that is done you can right click or long press on any message from someone that has set their timezone and select `Apps > Get Time`.

<img width="299" alt="image" src="https://github.com/mcguinnessdr/discord-time-bot/assets/2281608/fdaf06e2-2074-4455-81cc-4cbe4c35e305">
<img width="241" alt="image" src="https://github.com/mcguinnessdr/discord-time-bot/assets/2281608/4d11bc68-f327-4843-867c-068da8965571">


## Self Hosting

This bot requires the [Bun](https://bun.sh/) runtime. 

1. Set up a [Discord Bot Application](https://discord.com/developers/docs/getting-started).
2. Clone the repository.
3. Run `bun install` in the root of the cloned repository.
4. Create a file called `config.json` in the root directory and fill it out with the information from the bot you created in step 1.

config.json: 

```json
{
    "token": string,
    "clientId": string,
}
```

5. Run `bun deploy-commands`.
6. Run `bun start` to start the bot.
7. Add your bot's `clientId` to this url and go to it to invite the bot to your server: `https://discord.com/api/oauth2/authorize?client_id=your client id here&permissions=274877908992&scope=bot`.
