const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('help')
        .setDescription('ヘルプコマンドです！'),
    async execute(interaction) {
        try {
        interaction.reply({
            embeds: [{
                title: 'ヘルプです！',
                description: `私が実行できるコマンドです！`,
                color: 0xF00035,
                timestamp: new Date(),
                footer: {
                    text: "高識先輩",
                },
                fields: [
                    {name: '為替レート', value: `/rate にて使用できます！\n〇〇〇/JPYのレートを表示します`, inline: true},
                    {name: '短縮URL', value: `/surl-create にて使用できます！`, inline: true},
                    {name: '郵便番号検索', value: `/zipsearch にて使用できます！`, inline: true},
                    {name: 'Whois情報', value: `/whois にて使用できます！`, inline: true},
                    {name: 'ユーザ情報', value: `/user-infomation にて使用できます！`, inline: true},
                    {name: 'サーバ(ギルド)情報', value: `/guild-infomation にて使用できます！`, inline: true},
                    {name: 'GitHubユーザ情報', value: `/github-user にて使用できます！`, inline: true},
                    {name: '10進数変換', value: `/dn-convert にて使用できます！`, inline: true},
                    {name: '乱数生成', value: `/rn-create にて使用できます！`, inline: true},
                    {name: 'Ping確認', value: `/ping にて使用できます！\n(ちなみにbotのステータスにも書いてあります)`, inline: true},
                ],
            }]
        })
    } catch(error) {
        interaction.reply({
            embeds: [{
                fields: [
                {name: 'Error', value: `申し訳ございません！\nエラーが発生しました！`},
                {name: 'ErrorCode', value: `706819`},
                ],
                color: 0xF00035,
                timestamp: new Date(),
                footer: {
                    text: "高識先輩",
                },
                }],
                ephemeral: true,
            });
        console.log(`1.エラーが発生しました！ (/help)`);
        console.log(`2.ErrorCode:706819`);
    }
    }}