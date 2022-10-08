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
            for (let i = 0; i <= 4; i++) {
                colors = data.items.results[i].results[0].color
                if (colors === 'grey') { col++ }
                if (colors === 'black') { col2++ }
                if (colors === 'red') { col3++ }
            }
            if (col === 0) {
                ctx.reply("(Фартуна) Серого цвета не было 5 раз");
            }
            if (col2 === 0) {
                ctx.reply("(Фартуна) Чёрного цвета не было 5 раз");
            }
            if (col3 === 0) {
                ctx.reply("(Фартуна) Красного цвета не было 5 раз");
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
            if (kyb === 0 && kyb2 === 0 && kyb3 === 0) {
                ctx.reply("(Фартуна) Кубка не было 90 раз");
            }
            var green5=0,black5=0,red5=0;
            for (let i = 0; i <= 4; i++) {
                colors = data.items.results[i].results[0].color
                if (colors === 'grey') { green5++ }
                if (colors === 'black') { black5++ }
                if (colors === 'red') { red5++ }
            }
            if (green5 === 5) {
                ctx.reply("(Фартуна) Серый цвет был 5 раз подряд");
            }
            if (black5 === 5) {
                ctx.reply("(Фартуна) Чёрный цвет был 5 раз подряд");
            }
            if (red5 === 5) {
                ctx.reply("(Фартуна) Красный цвет был 5 раз подряд");
            }
            var num16=0,num712 = 0, num1318;
            for (let i = 0; i <= 4; i++) {
                number = data.items.results[i].results[0].number
                if (number === '1'||number === '2'||number === '3'||number === '4' || number === '5' || number === '6') { num16++ }
                if (number === '7'||number === '8'||number === '9'||number === '10' || number === '11' || number === '12') { num712++ }
                if (number === '13'||number === '14'||number === '15'||number === '16' || number === '17' || number === '18') { num1318++ }
            }
            if (num16 === 5) {
                ctx.reply("(Фартуна) Числа 1-6 выпали 5 раз подряд");
            }
            if (num712 === 5) {
                ctx.reply("(Фартуна) Числа 7-12 выпали 5 раз подряд");
            }
            if (num1318 === 5) {
                ctx.reply("(Фартуна) Числа 13-18 выпали 5 раз подряд");
            }
        }
        catch (err) {
            console.log(err)
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
            const response4 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/4/")
            const data4 = await response4.json()
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
            let fir = 0;
            for (let i = 0; i <= 12; i++) {
                score_dealer = data.items.results[i].results.score_dealer
                score_player = data.items.results[i].results.score_player

                if ((parseInt(score_player, 10) === 11) || (parseInt(score_dealer, 10) === 11) || (parseInt(score_player, 10) === 12) || (parseInt(score_dealer, 10) === 12) ||
                    (parseInt(score_player, 10) === 13) || (parseInt(score_dealer, 10) === 13)) { fir = fir + 1; }
            }
            console.log(fir + ' фигурок')
            if (fir === 0) { ctx.reply('Фигурок не было 13 раздач'); }
            let mast1 = 0;
            let mast2 = 0;
            let mast3 = 0;
            let mast4 = 0;
            for (let i = 0; i < 13; i++) {
                score_dealer = data.items.results[i].results.card_dealer.suit
                score_player = data.items.results[i].results.card_player.suit

                if (score_dealer != 'diamonds' && score_player != 'diamonds') { mast1 = mast1 + 1; }
                if (score_dealer != 'clubs' && score_player != 'clubs') { mast2 = mast2 + 1; }
                if (score_dealer != 'spades' && score_player != 'spades') { mast3 = mast3 + 1; }
                if (score_dealer != 'hearts' && score_player != 'hearts') { mast4 = mast4 + 1; }

            }
            console.log(mast1 + ' буби не было раздач')
            if (mast1 === 15) { ctx.reply('Буби не было 13 раздач') }
            //diamonds- буби
            //clubs - крести
            //spades - пики
            //hearts - чирва
            //
            if (mast2 === 13) { ctx.reply('Крести не было 13 раздач') }

            if (mast3 === 13) { ctx.reply('Пики не было 13 раздач') }

            if (mast4 === 13) { ctx.reply('Чирвы не было 13 раздач') }
            for (let i = 0; i <= 29; i++) {
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
                ctx.reply('(Битва) Больших кэфов давно не было 30 минут');
            }

            for (let i = 0; i <= 29; i++) {
                score_dealer = data.items.results[i].results.score_dealer
                score_player = data.items.results[i].results.score_player
                if ((score_player === "8") || (score_dealer === "8")) {
                    result2 = result2 + 1;
                }
            }
            var result2222 = 0;
            for (let i = 0; i <= 9; i++) {
                score_dealer2 = data2.items.results[i].results.score_dealer
                score_player2 = data2.items.results[i].results.score_player
                if ((score_player2 === "8") || (score_dealer2 === "8")) {
                    result2222 = result2222 + 1;
                }

            }

            if (result2 === 0 && result2222 === 0) {
                ctx.reply('(Битва) Не было 8 уже 40 раздач');
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
            var result4444 = 0;
            for (let i = 0; i <= 14; i++) {
                score_dealer4 = data4.items.results[i].results.score_dealer
                score_player4 = data4.items.results[i].results.score_player
                if (score_player4 === "8") {
                    result4444 = result4444 + 1;
                }

            }
            if (result44 === 0 && result4 === 0 && result444 === 0 && result4444 === 0) {
                ctx.reply('(Битва) Не было 8 у игрока уже 105 минут (вертикаль)');
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
            var result5555 = 0;
            for (let i = 0; i <= 14; i++) {
                score_dealer4 = data4.items.results[i].results.score_dealer
                score_player4 = data4.items.results[i].results.score_player
                if (score_dealer4 === "8") {
                    result5555 = result5555 + 1;
                }
            }

            if (result5 === 0 && result55 === 0 && result555 === 0 && result5555 === 0) {
                ctx.reply('(Битва) Не было 8 у дилера уже 105 минут (вертикаль)');
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
            var result3344 = 0;
            for (let i = 0; i <= 29; i++) {
                score_dealer4 = data4.items.results[i].results.score_dealer
                score_player4 = data4.items.results[i].results.score_player

                if (score_player4 === score_dealer4) {
                    result3344 = result3344 + 1;
                }
            }
            if (result3 === 0 && result33 === 0 && result334 === 0 && result3344 === 0) {
                ctx.reply('(Битва) Не было ничьи 120 минут');
            }


        } catch (err) {
            console.log(err)
        }
    }
    function good() {
        ctx.reply("Вы запустили Бота на заказ ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
        ctx.reply("Удачи! По всем вопросам пишите @BetgamesTV_Admin");
        ctx.reply('Бот отслежки запущен!')
        global.time = setInterval(request, 40000)
        global.time4 = setInterval(fartuna, 90000)

    }
    good()
}
)
bot.hears('/end', async (ctx) => {
    try {
        clearInterval(time);
        clearInterval(time4);
        ctx.reply("Пока");
    } catch (err) {
        ctx.reply("Пока");
    }
})

bot.launch()
