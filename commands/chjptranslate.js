const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('chfjpy-translate')
        .setDescription('スイスフラン/円変換します！')
        .addIntegerOption(option =>
            option.setName('chf')
            .setDescription('スイスフランを入力してください')
            .setRequired(true)),
    async execute(interaction) {
        let ch = interaction.options.getInteger('chf');
        const url = fetch('https://fx.mybluemix.net')
            .then((response) => {
            return response.json();
            })
        .then((data) => {
            let chjp = data.rate.CHFJPY;
            let yen = ch * chjp;
            interaction.reply({
                embeds: [{
                    title: 'スイスフラン/円変換',
                    description: `スイスフラン/円変換します！(CHF/JPY=${chjp})\n[${data.datetime}]`,
                    color: 0xF00035,
                    timestamp: new Date(),
                    fields: [
                        {name: '入力された金額', value: `Fr${ch}`, inline: true},
                        {name: '変換後の金額', value: `¥${yen}`, inline: true},
                    ],
                }]
            });
    }
        );
    },
};