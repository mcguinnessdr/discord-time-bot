import { ApplicationCommandType, ContextMenuCommandBuilder, EmbedBuilder, MessageContextMenuCommandInteraction } from "discord.js";
import { parse } from 'chrono-node';
import { time } from "discord.js";
import { getTimezone } from "../../database";

export const data = new ContextMenuCommandBuilder()
    .setName("Get Time")
    .setType(ApplicationCommandType.Message);

export const execute = (interaction: MessageContextMenuCommandInteraction) => {
    const messageTimezoneResult = getTimezone(interaction.targetMessage.member?.user.id as string);
    if (!messageTimezoneResult) {
        interaction.reply({ content: "User hasn't set their timezone.", ephemeral: true });
        return;
    }
    const messageTimezone = messageTimezoneResult.timezone;
    const times = parse(interaction.targetMessage.content, { timezone: messageTimezone, instant: interaction.targetMessage.createdAt }).map(x => {
        return { name: x.text, value: time(x.date()) }
    });

    if (times.length === 0) {
        interaction.reply({ content: "No times found", ephemeral: true });
        return;
    }

    const embed = new EmbedBuilder()
        .setTitle(`Converted from ${messageTimezone}`)
        .addFields(times)
        .setAuthor({name: interaction.targetMessage.member?.user.username as string, iconURL: interaction.targetMessage.member?.user.displayAvatarURL()});

    interaction.reply({ embeds: [embed], ephemeral: true });
}