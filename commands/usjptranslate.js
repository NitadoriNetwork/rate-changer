const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('usdjpy-translate')
        .setDescription('米ドル/円変換します！')
        .addIntegerOption(option =>
            option.setName('dollar')
            .setDescription('米ドルを入力してください')
            .setRequired(true)),
    async execute(interaction) {
        let dol = interaction.options.getInteger('dollar');
        const url = fetch('https://fx.mybluemix.net')
            .then((response) => {
            return response.json();
            })
        .then((data) => {
            let usjp = data.rate.USDJPY;
            let yen = dol * usjp;
            interaction.reply({
                embeds: [{
                    title: '米ドル円変換',
                    description: `米ドル/円変換します！(USD/JPY=${usjp})\n[${data.datetime}]`,
                    color: 0xF00035,
                    timestamp: new Date(),
                    fields: [
                        {name: '入力された金額', value: `$${dol}`, inline: true},
                        {name: '変換後の金額', value: `¥${yen}`, inline: true},
                    ],
                }]
            });
    }
        );
    },
};
