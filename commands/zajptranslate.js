const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('zarjpy-translate')
        .setDescription('南アランド/円変換します！')
        .addIntegerOption(option =>
            option.setName('zar')
            .setDescription('南アフリカランドを入力してください')
            .setRequired(true)),
    async execute(interaction) {
        let za = interaction.options.getInteger('zar');
        const url = fetch('https://fx.mybluemix.net')
            .then((response) => {
            return response.json();
            })
        .then((data) => {
            let zajp = data.rate.ZARJPY;
            let yen = za * zajp;
            interaction.reply({
                embeds: [{
                    title: '南アランド/円変換',
                    description: `南アフリカランド/円変換します！(ZAR/JPY=${zajp})\n[${data.datetime}]`,
                    color: 0xF00035,
                    timestamp: new Date(),
                    fields: [
                        {name: '入力された金額', value: `R${za}`, inline: true},
                        {name: '変換後の金額', value: `¥${yen}`, inline: true},
                    ],
                }]
            });
    }
        );
    },
};