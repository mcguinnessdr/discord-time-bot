import { AutocompleteInteraction, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { setTimezone } from "../../database";

export const data = new SlashCommandBuilder()
    .setName("set-timezone")
    .setDescription("Set your timezone")
    .addStringOption(option =>
        option.setName("timezone")
            .setDescription("timezone")
            .setRequired(true)
            .setAutocomplete(true));

export const execute = async (interaction: ChatInputCommandInteraction) => {
    const timezone = interaction.options.getString("timezone")?.toUpperCase() as string;
    setTimezone(interaction.member?.user.id as string, timezone);
    interaction.reply({ content: "set timezone", ephemeral: true });
};

export const autocomplete = async (interaction: AutocompleteInteraction) => {
    const focusedValue = interaction.options.getFocused().toUpperCase();
    const choices = [
        'ACDT', 'ACST', 'ADT', 'AEDT', 'AEST', 'AFT', 'AKDT', 'AKST', 'ALMT', 'AMST', 'AMT', 'ANAST',
        'ANAT', 'AQTT', 'ART', 'AST', 'AWDT', 'AWST', 'AZOST', 'AZOT', 'AZST', 'AZT', 'BNT', 'BOT',
        'BRST', 'BRT', 'BST', 'BTT', 'CAST', 'CAT', 'CCT', 'CDT', 'CEST', 'CET', 'CHADT', 'CHAST',
        'CKT', 'CLST', 'CLT', 'COT', 'CST', 'CT', 'CVT', 'CXT', 'ChST', 'DAVT', 'EASST', 'EAST', 'EAT',
        'ECT', 'EDT', 'EEST', 'EET', 'EGST', 'EGT', 'EST', 'ET', 'FJST', 'FJT', 'FKST', 'FKT', 'FNT',
        'GALT', 'GAMT', 'GET', 'GFT', 'GILT', 'GMT', 'GST', 'GYT', 'HAA', 'HAC', 'HADT', 'HAE', 'HAP',
        'HAR', 'HAST', 'HAT', 'HAY', 'HKT', 'HLV', 'HNA', 'HNC', 'HNE', 'HNP', 'HNR', 'HNT', 'HNY',
        'HOVT', 'ICT', 'IDT', 'IOT', 'IRDT', 'IRKST', 'IRKT', 'IRST', 'IST', 'JST', 'KGT', 'KRAST', 'KRAT',
        'KST', 'KUYT', 'LHDT', 'LHST', 'LINT', 'MAGST', 'MAGT', 'MART', 'MAWT', 'MDT', 'MESZ', 'MEZ',
        'MHT', 'MMT', 'MSD', 'MSK', 'MST', 'MT', 'MUT', 'MVT', 'MYT', 'NCT', 'NDT', 'NFT', 'NOVST',
        'NOVT', 'NPT', 'NST', 'NUT', 'NZDT', 'NZST', 'OMSST', 'OMST', 'PDT', 'PET', 'PETST', 'PETT',
        'PGT', 'PHOT', 'PHT', 'PKT', 'PMDT', 'PMST', 'PONT', 'PST', 'PT', 'PWT', 'PYST', 'PYT', 'RET',
        'SAMT', 'SAST', 'SBT', 'SCT', 'SGT', 'SRT', 'SST', 'TAHT', 'TFT', 'TJT', 'TKT', 'TLT', 'TMT',
        'TVT', 'ULAT', 'UTC', 'UYST', 'UYT', 'UZT', 'VET', 'VLAST', 'VLAT', 'VUT', 'WAST', 'WAT', 'WEST',
        'WESZ', 'WET', 'WEZ', 'WFT', 'WGST', 'WGT', 'WIB', 'WIT', 'WITA', 'WST', 'WT', 'YAKST', 'YAKT',
        'YAPT', 'YEKST', 'YEKT',
    ];

    const filtered = choices.filter(choice => choice.startsWith(focusedValue)).toSpliced(24, choices.length - 24);
    await interaction.respond(
        filtered.map(choice => ({ name: choice, value: choice })),
    );
}