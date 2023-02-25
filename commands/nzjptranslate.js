const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('nzdjpy-translate')
        .setDescription('NZドル/円変換します！')
        .addIntegerOption(option =>
            option.setName('nzd')
            .setDescription('ニュージーランドドルを入力してください')
            .setRequired(true)),
    async execute(interaction) {
        let nz = interaction.options.getInteger('nzd');
        const url = fetch('https://fx.mybluemix.net')
            .then((response) => {
            return response.json();
            })
        .then((data) => {
            let nzjp = data.rate.NZDJPY;
            let yen = nz * nzjp;
            interaction.reply({
                embeds: [{
                    title: 'NZドル/円変換',
                    description: `ニュージーランドドル/円変換します！(NZD/JPY=${nzjp})\n[${data.datetime}]`,
                    color: 0xF00035,
                    timestamp: new Date(),
                    fields: [
                        {name: '入力された金額', value: `NZ$${nz}`, inline: true},
                        {name: '変換後の金額', value: `¥${yen}`, inline: true},
                    ],
                }]
            });
    }
        );
    },
};