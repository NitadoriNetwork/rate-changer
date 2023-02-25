const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('nokjpy-translate')
        .setDescription('ノルウェークローネ/円変換します！')
        .addIntegerOption(option =>
            option.setName('nok')
            .setDescription('ノルウェークローネを入力してください')
            .setRequired(true)),
    async execute(interaction) {
        let no = interaction.options.getInteger('nok');
        const url = fetch('https://fx.mybluemix.net')
            .then((response) => {
            return response.json();
            })
        .then((data) => {
            let nojp = data.rate.NOKJPY;
            let yen = no * nojp;
            interaction.reply({
                embeds: [{
                    title: 'ノルウェークローネ/円変換',
                    description: `ノルウェークローネ/円変換します！(NOK/JPY=${nojp})\n[${data.datetime}]`,
                    color: 0xF00035,
                    timestamp: new Date(),
                    fields: [
                        {name: '入力された金額', value: `NKr${no}`, inline: true},
                        {name: '変換後の金額', value: `¥${yen}`, inline: true},
                    ],
                }]
            });
    }
        );
    },
};