require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');

const bot = new Telegraf(process.env.BOT_TOKEN || 8080)
bot.start((ctx) => {
   ctx.reply(`Привет ${ctx.message.from.first_name}`)
   console.log(ctx.message)
})
bot.help((ctx) => ctx.reply('Напиши /bot '))
bot.hears('/bot', async (ctx) => {
async function fartuna() {
    try {
        var col = 0;
        var col2 = 0;
        var col3 = 0;
        var kyb = 0;
        var kyb2 = 0;
        var kyb3 = 0;
        const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/1/")
        const data = await response.json()
        const response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/2/")
        const data2 = await response2.json()
        const response3 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/3/")
        const data3 = await response3.json()
        for (let i = 0; i <= 17; i++) {
            colors = data.items.results[i].results[0].color
            if (colors === 'grey') { col++ }
            if (colors === 'black') { col2++ }
            if (colors === 'red') { col3++ }
        }
        if (col===0) {
            ctx.reply("Серого цвета не было 18 раз");
        }
        if (col2===0) {
            ctx.reply("Чёрного цвета не было 18 раз");
        }
        if (col3===0) {
            ctx.reply("Красного цвета не было 18 раз");
        }
        for (let i = 0; i <= 29; i++) {
            colors = data.items.results[i].results[0].color
            if (colors === 'white') { kyb++ }  
        }
        for (let i = 0; i <= 29; i++) {
            colors2 = data2.items.results[i].results[0].color
            if (colors2 === 'white') { kyb2++ }  
        }
        for (let i = 0; i <= 29; i++) {
            colors3 = data3.items.results[i].results[0].color
            if (colors3 === 'white') { kyb3++ }  
        }
        if (kyb===0 && kyb2===0 && kyb3===0) {
            ctx.reply("Кубка не было 90 раз");
        }
  
    }
    catch (err) {
        console.log(err);
    }
}
async function kosti() {
    try {
        const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/10/1/")
        const data = await response.json()
        var win = 0;
        var vs = 0;
        var total = 0;
        var total2 = 0;
        var total3 = 0;
        var total4 = 0;
        var win2 = 0;
        for (let i = 0; i <= 9; i++) {
            number = data.items.results[i].results[0].number
            number2 = data.items.results[i].results[1].number
            if (parseInt(number, 10) > 3) {
                total++;
            }
            if (parseInt(number, 10) < 3) {
                total2++;
            }
            if (parseInt(number2, 10) > 3) {
                total3++;
            }
            if (parseInt(number2, 10) < 3) {
                total4++;
            }
        }
        if (total === 10) {
            console.log("КРАСНЫЙ больше 3, 10 раз подряд");
        }
        if (total2 === 10) {
            console.log("КРАСНЫЙ меньше 3, 10 раз подряд");
        }
        if (total3 === 10) {
            console.log("СИНИЙ больше 3, 10 раз подряд");
        }
        if (total4 === 10) {
            console.log("СИНИЙ меньше 3, 10 раз подряд");
        }

        for (let i = 0; i <= 9; i++) {
            number = data.items.results[i].results[0].number
            number2 = data.items.results[i].results[1].number
            if (parseInt(number, 10) > parseInt(number2, 10)) {
                win++;
            }
            if (parseInt(number, 10) < parseInt(number2, 10)) {
                win2++;
            }
        }
        if (win === 10) {
            console.log("КРАСНЫЙ победил 10 раз подряд");
        }
        if (win2 === 10) {
            console.log("СИНИЙ победил 10 раз подряд");
        }
        for (let i = 0; i <= 24; i++) {
            number = data.items.results[i].results[0].number
            number2 = data.items.results[i].results[1].number
            if (parseInt(number, 10) === parseInt(number2, 10)) {
                vs++;
            }
        }
        if (win === 25) {
            console.log("Ничьи не было 25 раз");
        }

    } catch (err) {
        console.log(err);
    }
}

async function sevenSorok() {
    try {
        const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/1/1/")
        const data = await response.json()
        const response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/1/2/")
        const data2 = await response2.json()
        let kol175 = 0, kol200 = 0;
        let kol100 = 0, kol125 = 0;

        for (let i = 0; i <= 19; i++) {
            number = parseInt(data.items.results[i].results[0].number, 10) + parseInt(data.items.results[i].results[1].number, 10)
                + parseInt(data.items.results[i].results[2].number, 10) + parseInt(data.items.results[i].results[3].number, 10)
                + parseInt(data.items.results[i].results[4].number, 10) + parseInt(data.items.results[i].results[5].number, 10)
                + parseInt(data.items.results[i].results[6].number, 10)
            if (number > 175) {
                kol175++;
            }

            if (number < 125) {
                kol125++;
            }
        }
        if (kol175 === 0) {
            console.log('число больше 175 не было 20 раз');
        }
        if (kol125 === 0) {
            console.log('число меньше 125 не было 20 раз');
        }
        for (let i = 0; i <= 29; i++) {
            number11 = parseInt(data.items.results[i].results[0].number, 10) + parseInt(data.items.results[i].results[1].number, 10)
                + parseInt(data.items.results[i].results[2].number, 10) + parseInt(data.items.results[i].results[3].number, 10)
                + parseInt(data.items.results[i].results[4].number, 10) + parseInt(data.items.results[i].results[5].number, 10)
                + parseInt(data.items.results[i].results[6].number, 10)
            if (number11 > 200) {
                kol200++;
            }

            if (number11 < 100) {
                kol100++;
            }
        }
        for (let i = 0; i <= 29; i++) {
            number12 = parseInt(data2.items.results[i].results[0].number, 10) + parseInt(data2.items.results[i].results[1].number, 10)
                + parseInt(data2.items.results[i].results[2].number, 10) + parseInt(data2.items.results[i].results[3].number, 10)
                + parseInt(data2.items.results[i].results[4].number, 10) + parseInt(data2.items.results[i].results[5].number, 10)
                + parseInt(data2.items.results[i].results[6].number, 10)
            if (number12 > 200) {
                kol200++;
            }

            if (number12 < 100) {
                kol100++;
            }
        }
        if (kol200 === 0) {
            console.log('число больше 200 не было 60 раз');
        }
        if (kol100 === 0) {
            console.log('число меньше 100 не было 60 раз');
        }
    } catch (err) {
        console.log(err);
    }
}

async function request() {
    try {
        const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
        const data = await response.json()
        const response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/2/")
        const data2 = await response2.json()
        const response3 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/3/")
        const data3 = await response3.json()
        let result = 0;
        let result2 = 0;
        let result3 = 0;
        let result4 = 0;
        let result44 = 0;
        let result444 = 0;
        let result5 = 0;
        let result55 = 0;
        let result555 = 0;
        let result33 = 0;


        for (let i = 0; i <= 20; i++) {
            score_dealer = data.items.results[i].results.score_dealer
            score_player = data.items.results[i].results.score_player
            // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
            if ((score_player === "3" && (score_dealer === "2" || score_dealer === "8" || score_dealer === "3"))
                || (score_player === "13" && (score_dealer === "13" || score_dealer === "8" || score_dealer === "14"))
                || (score_player === score_dealer) || (score_player === "8") || (score_dealer === "8")) {
                result = result + 1;
            }
        }
        console.log(typeof score_dealer)
        if (result === 0) {
            console.log('Больших кэфов давно не было 20 минут');
        }

        for (let i = 0; i <= 29; i++) {
            score_dealer = data.items.results[i].results.score_dealer
            score_player = data.items.results[i].results.score_player
            if ((score_player === "8") || (score_dealer === "8")) {
                result2 = result2 + 1;
            }

        }

        if (result2 === 0) {
            console.log('Не было 8 уже 30 раздач');
        }

        for (let i = 0; i <= 29; i++) {
            score_dealer = data.items.results[i].results.score_dealer
            score_player = data.items.results[i].results.score_player
            if (score_player === "8") {
                result4 = result4 + 1;
            }

        }
        for (let i = 0; i <= 29; i++) {
            score_dealer2 = data2.items.results[i].results.score_dealer
            score_player2 = data2.items.results[i].results.score_player
            if (score_player2 === "8") {
                result44 = result44 + 1;
            }

        }
        for (let i = 0; i <= 29; i++) {
            score_dealer3 = data3.items.results[i].results.score_dealer
            score_player3 = data3.items.results[i].results.score_player
            if (score_player3 === "8") {
                result444 = result444 + 1;
            }

        }
        if (result44 === 0 && result4 === 0 && result444 === 0) {
            console.log('Не было 8 у игрока уже 90 минут (вертикаль)');
        }
        for (let i = 0; i <= 29; i++) {
            score_dealer = data.items.results[i].results.score_dealer
            score_player = data.items.results[i].results.score_player
            if (score_dealer === "8") {
                result5 = result5 + 1;
            }
        }
        for (let i = 0; i <= 29; i++) {
            score_dealer2 = data2.items.results[i].results.score_dealer
            score_player2 = data2.items.results[i].results.score_player
            if (score_dealer2 === "8") {
                result55 = result55 + 1;
            }
        }
        for (let i = 0; i <= 29; i++) {
            score_dealer3 = data3.items.results[i].results.score_dealer
            score_player3 = data3.items.results[i].results.score_player
            if (score_dealer3 === "8") {
                result555 = result555 + 1;
            }
        }

        if (result5 === 0 && result55 === 0 && result555 === 0) {
            console.log('Не было 8 у дилера уже 90 минут (вертикаль)');
        }
        for (let i = 0; i <= 29; i++) {
            score_dealer = data.items.results[i].results.score_dealer
            score_player = data.items.results[i].results.score_player

            if (score_player === score_dealer) {
                result3 = result3 + 1;
            }
        }

        for (let i = 0; i <= 29; i++) {
            score_dealer2 = data2.items.results[i].results.score_dealer
            score_player2 = data2.items.results[i].results.score_player

            if (score_player2 === score_dealer2) {
                result33 = result33 + 1;
            }
        }
        var result334 = 0;
        for (let i = 0; i <= 29; i++) {
            score_dealer3 = data3.items.results[i].results.score_dealer
            score_player3 = data3.items.results[i].results.score_player

            if (score_player3 === score_dealer3) {
                result334 = result334 + 1;
            }
        }
        if (result3 === 0 && result33 === 0 && result334 === 0) {
            console.log('Не было ничьи 90 минут');
        }


    } catch (err) {
        console.log(err);
    }
}
function good() {
    ctx.reply( "Вы запустили Бота на стратегию «Мегабот» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
     ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
    ctx.reply('Бот отслежки запущен!')
    global.time = setInterval(request, 40000)
    global.time2 = setInterval(sevenSorok, 240000)
    global.time3 = setInterval(kosti, 45000)
    global.time4 = setInterval(fartuna, 90000)
 }
 good()
}
)
bot.hears('/end', async (ctx) => {

    try {
       clearInterval(time);
       clearInterval(time2);
       clearInterval(time3);
       clearInterval(time4);
 
       ctx.reply("Пока");
    } catch (err) {
       ctx.reply("Пока");
    }
 })
 
 bot.launch()
