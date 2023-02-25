const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('hkdjpy-translate')
        .setDescription('香港ドル/円変換します！')
        .addIntegerOption(option =>
            option.setName('hkd')
            .setDescription('香港ドルを入力してください')
            .setRequired(true)),
    async execute(interaction) {
        let hk = interaction.options.getInteger('hkd');
        const url = fetch('https://fx.mybluemix.net')
            .then((response) => {
            return response.json();
            })
        .then((data) => {
            let hkjp = data.rate.HKDJPY;
            let yen = hk * hkjp;
            interaction.reply({
                embeds: [{
                    title: '香港ドル/円変換',
                    description: `香港ドル/円変換します！(HKD/JPY=${hkjp})\n[${data.datetime}]`,
                    color: 0xF00035,
                    timestamp: new Date(),
                    fields: [
                        {name: '入力された金額', value: `HK$${hk}`, inline: true},
                        {name: '変換後の金額', value: `¥${yen}`, inline: true},
                    ],
                }]
            });
    }
        );
    },
};