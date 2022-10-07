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
                    ctx.reply("(Фартуна) Серого цвета не было 18 раз");
                }
                if (col2===0) {
                    ctx.reply("(Фартуна) Чёрного цвета не было 18 раз");
                }
                if (col3===0) {
                    ctx.reply("(Фартуна) Красного цвета не было 18 раз");
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
                    ctx.reply("(Фартуна) Кубка не было 90 раз");
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
                    ctx.reply('(Битва) Больших кэфов давно не было 20 минут');
                }

                for (let i = 0; i <= 29; i++) {
                    score_dealer = data.items.results[i].results.score_dealer
                    score_player = data.items.results[i].results.score_player
                    if ((score_player === "8") || (score_dealer === "8")) {
                        result2 = result2 + 1;
                    }
                }
                var result2222=0;
                for (let i = 0; i <= 6; i++) {
                    score_dealer2 = data2.items.results[i].results.score_dealer
                    score_player2 = data2.items.results[i].results.score_player
                    if ((score_player2 === "8") || (score_dealer2 === "8")) {
                        result2222 = result2222 + 1;
                    }

                }

                if (result2 === 0 && result2222 === 0) {
                    ctx.reply('(Битва) Не было 8 уже 37 раздач');
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
                var result4444=0;
                for (let i = 0; i <= 24; i++) {
                    score_dealer4 = data4.items.results[i].results.score_dealer
                    score_player4 = data4.items.results[i].results.score_player
                    if (score_player4 === "8") {
                        result4444 = result4444 + 1;
                    }

                }
                if (result44 === 0 && result4 === 0 && result444 === 0 && result4444 === 0) {
                    ctx.reply('(Битва) Не было 8 у игрока уже 115 минут (вертикаль)');
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
                var result5555=0;
                for (let i = 0; i <= 24; i++) {
                    score_dealer4 = data4.items.results[i].results.score_dealer
                    score_player4 = data4.items.results[i].results.score_player
                    if (score_dealer4 === "8") {
                        result5555 = result5555 + 1;
                    }
                }

                if (result5 === 0 && result55 === 0 && result555 === 0 && result5555 === 0) {
                    ctx.reply('(Битва) Не было 8 у дилера уже 115 минут (вертикаль)');
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
            ctx.reply( "Вы запустили Бота на заказ ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
            ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin");
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
