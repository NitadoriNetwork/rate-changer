const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('cnhjpy-translate')
        .setDescription('人民元/円変換します！')
        .addIntegerOption(option =>
            option.setName('cnh')
            .setDescription('人民元を入力してください')
            .setRequired(true)),
    async execute(interaction) {
        let cn = interaction.options.getInteger('cnh');
        const url = fetch('https://fx.mybluemix.net')
            .then((response) => {
            return response.json();
            })
        .then((data) => {
            let cnjp = data.rate.CNHJPY;
            let yen = cn * cnjp;
            interaction.reply({
                embeds: [{
                    title: '人民元/円変換',
                    description: `人民元/円変換します！(CNH/JPY=${cnjp})\n[${data.datetime}]`,
                    color: 0xF00035,
                    timestamp: new Date(),
                    fields: [
                        {name: '入力された金額', value: `¥${cn}`, inline: true},
                        {name: '変換後の金額', value: `¥${yen}`, inline: true},
                    ],
                }]
            });
    }
        );
    },
};