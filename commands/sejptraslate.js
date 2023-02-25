const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('sekjpy-translate')
        .setDescription('スウェーデンクローナ/円変換します！')
        .addIntegerOption(option =>
            option.setName('sek')
            .setDescription('スウェーデンクローナを入力してください')
            .setRequired(true)),
    async execute(interaction) {
        let se = interaction.options.getInteger('sek');
        const url = fetch('https://fx.mybluemix.net')
            .then((response) => {
            return response.json();
            })
        .then((data) => {
            let sejp = data.rate.SEKJPY;
            let yen = se * sejp;
            interaction.reply({
                embeds: [{
                    title: 'スウェーデンクローナ/円変換',
                    description: `スウェーデンクローナ/円変換します！(HKD/JPY=${sejp})\n[${data.datetime}]`,
                    color: 0xF00035,
                    timestamp: new Date(),
                    fields: [
                        {name: '入力された金額', value: `SEK${se}`, inline: true},
                        {name: '変換後の金額', value: `¥${yen}`, inline: true},
                    ],
                }]
            });
    }
        );
    },
};