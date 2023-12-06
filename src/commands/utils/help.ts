import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("help")
    .setDescription("Explains how to use Time Bot");

export const execute = async (interaction: ChatInputCommandInteraction) => {
    interaction.reply({
        content: `# Welcome to Time Bot!
To get up and running first use the \`/set-timezone\` command to set your timezone. If you don't use the daylight saving identifier then Time Bot will track daylight saving for you automatically. (e.g. use \`PT\` instead of \`PST\`)
Once you've done that you can right click or long press on any message with a time in it and select the \`Apps\` then \`Get Time\` options. If the person has set their timezone it will be converted for you.
That's all there is to it, enjoy using Time Bot!

For more information visit <https://github.com/mcguinnessdr/discord-time-bot/tree/master>`,
        ephemeral: true,
    });
};