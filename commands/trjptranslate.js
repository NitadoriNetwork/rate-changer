const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('tryjpy-translate')
        .setDescription('トルコリラ/円変換します！')
        .addIntegerOption(option =>
            option.setName('try')
            .setDescription('トルコリラを入力してください')
            .setRequired(true)),
    async execute(interaction) {
        let tr = interaction.options.getInteger('try');
        const url = fetch('https://fx.mybluemix.net')
            .then((response) => {
            return response.json();
            })
        .then((data) => {
            let trjp = data.rate.TRYJPY;
            let yen = tr * trjp;
            interaction.reply({
                embeds: [{
                    title: 'トルコリラ/円変換',
                    description: `トルコリラ/円変換します！(TRY/JPY=${trjp})\n[${data.datetime}]`,
                    color: 0xF00035,
                    timestamp: new Date(),
                    fields: [
                        {name: '入力された金額', value: `₺${tr}`, inline: true},
                        {name: '変換後の金額', value: `¥${yen}`, inline: true},
                    ],
                }]
            });
    }
        );
    },
};