const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('rate')
        .setDescription('為替レートを取得します！'),
    async execute(interaction) {
        const url = fetch('https://fx.mybluemix.net')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            try {
            let status = data.status;
            let time = data.datetime;
            let rate = data.rate;

            //〇〇〇JPY
            let usjp = rate.USDJPY;
            let eujp = rate.EURJPY;
            let aujp = rate.AUDJPY;
            let gbjp = rate.GBPJPY;
            let nzjp = rate.NZDJPY;
            let cajp = rate.CADJPY;
            let chjp = rate.CHFJPY;
            let hkjp = rate.HKDJPY;
            let zajp = rate.ZARJPY;
            let trjp = rate.TRYJPY;
            let cnjp = rate.CNHJPY;
            let nojp = rate.NOKJPY;
            let sejp = rate.SEKJPY;
            let mxjp = rate.MXNJPY;
            let sgjp = rate.SGDJPY;
            //〇〇〇USD
            let euus = rate.EURUSD;
            let gbus = rate.GBPUSD;
            let auus = rate.AUDUSD;
            let nzus = rate.NZDUSD;
            ///〇〇〇AUD
            let euau = rate.EURAUD;
            let gbau = rate.GBPAUD;
            //〇〇〇CAD
            let usca = rate.USDCAD;
            let auca = rate.AUDCAD;
            //〇〇〇NZD
            let eunz = rate.EURNZD;
            let aunz = rate.AUDNZD;
            //〇〇〇TRY
            let ustr = rate.USDTRY;
            let eutr = rate.EURTRY;
            //〇〇〇CHF
            let usch = rate.USDCHF;
            //〇〇〇GBP
            let eugb = rate.EURGBP;

            interaction.reply({
                embeds: [{
                    title: '為替レート',
                    description: `${time}時点での為替レートです！`,
                    color: 0xF00035,
                    timestamp: new Date(),
                    footer: {
                        text: "高識先輩",
                    },
                    fields: [
                        {name: 'status', value: status},
                        {name: '米ドル/円(USD/JPY)', value: `${usjp}円`, inline: true},
                        {name: '豪ドル/円(AUR/JPY)', value: `${aujp}円`, inline: true},
                        {name: 'NZドル/円(NZD/JPY)', value: `${nzjp}円`, inline: true},
                        {name: 'カナダドル/円(CAD/JPY)', value: `${cajp}円`, inline: true},
                        {name: '香港ドル/円(HKD/JPY)', value: `${hkjp}円`, inline: true},
                        {name: 'シンガポールドル/円(SGD/JPY)', value: `${sgjp}円`, inline: true},
                        {name: '英ポンド/円(GBP/JPY)', value: `${gbjp}円`, inline: true},
                        {name: 'ユーロ/円(EUR/JPY)', value: `${eujp}円`, inline: true},
                        {name: 'スイスフラン/円(CHF/JPY)', value: `${chjp}円`, inline: true},
                        {name: '南アフリカランド/円(ZAR/JPY)', value: `${zajp}円`, inline: true},
                        {name: 'トルコリラ/円(TRY/JPY)', value: `${trjp}円`, inline: true},
                        {name: '人民元/円(CNH/JPY)', value: `${cnjp}円`, inline: true},
                        {name: 'ノルウェークローネ/円(NOK/JPY)', value: `${nojp}円`, inline: true},
                        {name: 'スウェーデンクローナ/円(SEK/JPY)', value: `${sejp}円`, inline: true},
                        {name: 'メキシコペソ/円(MXN/JPY)', value: `${mxjp}円`, inline: true},
                    ],
                }]
            });
        } catch(error){
            interaction.reply({
                embeds: [{
                    fields: [
                    {name: 'Error', value: `申し訳ございません！エラーが発生しました！`},
                    {name: 'ErrorCode', value: '858649'},
                    ],
                    color: 0xF00035,
                    timestamp: new Date(),
                    footer: {
                        text: "高識先輩",
                    },
                    }],
                    ephemeral: true,
                });
            console.log(`1.エラーが発生しました！ (/rate)`);
            console.log(`2.ErrorCode:858649`);
        }
    }
        );
    },
};
