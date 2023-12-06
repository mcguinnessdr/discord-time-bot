import { REST, Routes } from 'discord.js';
const { token, clientId } = require('../config.json');
var parseArgs = require('minimist');

const args = parseArgs(Bun.argv, { string: ["guildId", "commandId"] });
const guildId = args.guildId;
const commandId = args.commandId;
const rest = new REST().setToken(token);
(async () => {
    try {
        if (commandId) {
            if (guildId) {
                rest.delete(Routes.applicationGuildCommand(clientId, guildId, commandId))
                    .then(() => console.log('Successfully deleted guild command'))
                    .catch(console.error);
            } else {
                rest.delete(Routes.applicationCommand(clientId, commandId))
                    .then(() => console.log('Successfully deleted global command'))
                    .catch(console.error);
            }
        } else {
            if (guildId) {
                rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
                    .then(() => console.log('Successfully deleted all guild commands.'))
                    .catch(console.error);
            } else {
                rest.put(Routes.applicationCommands(clientId), { body: [] })
                    .then(() => console.log('Successfully deleted all global commands.'))
                    .catch(console.error);
            }
        }
    } catch (error) {
        console.error(error);
    }
})();