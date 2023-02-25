const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('cadjpy-translate')
        .setDescription('カナダドル/円変換します！')
        .addIntegerOption(option =>
            option.setName('cad')
            .setDescription('カナダドルを入力してください')
            .setRequired(true)),
    async execute(interaction) {
        let ca = interaction.options.getInteger('cad');
        const url = fetch('https://fx.mybluemix.net')
            .then((response) => {
            return response.json();
            })
        .then((data) => {
            let cajp = data.rate.CADJPY;
            let yen = ca * cajp;
            interaction.reply({
                embeds: [{
                    title: 'カナダドル/円変換',
                    description: `カナダドル/円変換します！(CAD/JPY=${cajp})\n[${data.datetime}]`,
                    color: 0xF00035,
                    timestamp: new Date(),
                    fields: [
                        {name: '入力された金額', value: `C$${ca}`, inline: true},
                        {name: '変換後の金額', value: `¥${yen}`, inline: true},
                    ],
                }]
            });
    }
        );
    },
};