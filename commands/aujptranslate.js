const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('audjpy-translate')
        .setDescription('豪ドル/円変換します！')
        .addIntegerOption(option =>
            option.setName('aud')
            .setDescription('オーストラリアドルを入力してください')
            .setRequired(true)),
    async execute(interaction) {
        let au = interaction.options.getInteger('aud');
        const url = fetch('https://fx.mybluemix.net')
            .then((response) => {
            return response.json();
            })
        .then((data) => {
            let aujp = data.rate.AUDJPY;
            let yen = au * aujp;
            interaction.reply({
                embeds: [{
                    title: '豪ドル円変換',
                    description: `オーストラリアドル/円変換します！(EUR/JPY=${aujp})\n[${data.datetime}]`,
                    color: 0xF00035,
                    timestamp: new Date(),
                    fields: [
                        {name: '入力された金額', value: `A$${au}`, inline: true},
                        {name: '変換後の金額', value: `¥${yen}`, inline: true},
                    ],
                }]
            });
    }
        );
    },
};
