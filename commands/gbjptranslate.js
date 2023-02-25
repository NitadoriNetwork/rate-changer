const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('gbpjpy-translate')
        .setDescription('英ポンド/円変換します！')
        .addIntegerOption(option =>
            option.setName('gbp')
            .setDescription('スターリング・ポンドを入力してください')
            .setRequired(true)),
    async execute(interaction) {
        let gb = interaction.options.getInteger('gbp');
        const url = fetch('https://fx.mybluemix.net')
            .then((response) => {
            return response.json();
            })
        .then((data) => {
            let gbjp = data.rate.GBPJPY;
            let yen = gb * gbjp;
            interaction.reply({
                embeds: [{
                    title: '英ポンド円変換',
                    description: `スターリング・ポンド/円変換します！(GBP/JPY=${gbjp})\n[${data.datetime}]`,
                    color: 0xF00035,
                    timestamp: new Date(),
                    fields: [
                        {name: '入力された金額', value: `£${gb}`, inline: true},
                        {name: '変換後の金額', value: `¥${yen}`, inline: true},
                    ],
                }]
            });
    }
        );
    },
};
