const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('sgdjpy-translate')
        .setDescription('シンガポールドル/円変換します！')
        .addIntegerOption(option =>
            option.setName('sgd')
            .setDescription('シンガポールドルを入力してください')
            .setRequired(true)),
    async execute(interaction) {
        let sg = interaction.options.getInteger('sgd');
        const url = fetch('https://fx.mybluemix.net')
            .then((response) => {
            return response.json();
            })
        .then((data) => {
            let sgjp = data.rate.SGDJPY;
            let yen = sg * sgjp;
            interaction.reply({
                embeds: [{
                    title: 'シンガポールドル/円変換',
                    description: `シンガポールドル/円変換します！(SGD/JPY=${sgjp})\n[${data.datetime}]`,
                    color: 0xF00035,
                    timestamp: new Date(),
                    fields: [
                        {name: '入力された金額', value: `S$${sg}`, inline: true},
                        {name: '変換後の金額', value: `¥${yen}`, inline: true},
                    ],
                }]
            });
    }
        );
    },
};