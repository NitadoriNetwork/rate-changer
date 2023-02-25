const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('mxnjpy-translate')
        .setDescription('メキシコペソ/円変換します！')
        .addIntegerOption(option =>
            option.setName('mxn')
            .setDescription('メキシコペソを入力してください')
            .setRequired(true)),
    async execute(interaction) {
        let mx = interaction.options.getInteger('mxn');
        const url = fetch('https://fx.mybluemix.net')
            .then((response) => {
            return response.json();
            })
        .then((data) => {
            let mxjp = data.rate.MXNJPY;
            let yen = mx * mxjp;
            interaction.reply({
                embeds: [{
                    title: 'メキシコペソ/円変換',
                    description: `メキシコペソ/円変換します！(MXN/JPY=${mxjp})\n[${data.datetime}]`,
                    color: 0xF00035,
                    timestamp: new Date(),
                    fields: [
                        {name: '入力された金額', value: `Mex$${mx}`, inline: true},
                        {name: '変換後の金額', value: `¥${yen}`, inline: true},
                    ],
                }]
            });
    }
        );
    },
};