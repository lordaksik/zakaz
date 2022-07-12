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
   async function poker(){
try{
    const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/12/1/")
    const data = await response.json()
    const response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/12/2/")
    const data2 = await response2.json()
    const response3 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/12/3/")
    const data3 = await response3.json()
    const response4 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/12/4/")
    const data4 = await response4.json()
    const response5 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/12/5/")
    const data5 = await response5.json()
    

    let two_pairs=0,one_pair=0,straight=0,three_of_a_kind=0,full_house=0,flush1=0,flush2=0,split=0,player=0;
    for (let i = 0; i <= 29; i++) {
        let hand=data.items.results[i].results.results.winners[0];

        if(hand==="split"){
            split++
        }
    }
    if(split===0){
        ctx.reply(' 30 раздач нет Сплита')
    }
    for (let i = 0; i <= 7; i++) {
        let hand=data.items.results[i].results.results.winners[0];
        if(hand==="player"){
            player++
        }
    }
    if(player===0){
        ctx.reply(' 8 раздач игрок не выигрывал')
    }

    for (let i = 0; i <= 11; i++) {
        let hand=data.items.results[i].results.results.hand;
        if(hand==="two_pairs"){
            two_pairs++
        }
    }
    if(two_pairs===0){
        ctx.reply(' 12 раздач нет двух пар')
    }
    for (let i = 0; i <= 29; i++) {
        let hand=data.items.results[i].results.results.hand;
        if(hand==="one_pair"){
            one_pair++
        }
    }
    if(one_pair===0){
        ctx.reply(' 30 раздач нет одной пары')
    }

    for (let i = 0; i <= 14; i++) {
        let hand=data.items.results[i].results.results.hand;
        if(hand==="straight"){
            straight++
        }
    }
    if(straight===0){
        ctx.reply(' 15 раздач нет Стрита')
    }
    for (let i = 0; i <= 21; i++) {
        let hand=data.items.results[i].results.results.hand;
        if(hand==="three_of_a_kind"){
            three_of_a_kind++
        }
    }
    if(three_of_a_kind===0){
       ctx.reply(' 22 раздач нет Сета')
    }

    for (let i = 0; i <= 19; i++) {
        let hand=data.items.results[i].results.results.hand;
        if(hand==="full_house"){
            full_house++
        }
    }
    if(full_house===0){
        ctx.reply(' 20 раздач нет Фул-хауса')
    }

    for (let i = 0; i <= 29; i++) {
        let hand=data.items.results[i].results.results.hand;
        if(hand==="flush"){
            flush1++
        }
    }
    for (let i = 0; i <= 29; i++) {
        let hand2=data2.items.results[i].results.results.hand;
        if(hand2==="flush"){
            flush2++
        }
    }
   let flush3=0;
   for (let i = 0; i <= 29; i++) {
        let hand3=data3.items.results[i].results.results.hand;
        if(hand3==="flush"){
            flush3++
        }
    }
    if(flush1===0 && flush2===0 && flush3===0){
        ctx.reply(' 90 раздач нет Флэша')
    }
    let four_of_a_kind=0,four_of_a_kind2=0,four_of_a_kind3=0,four_of_a_kind4=0,four_of_a_kind5=0;
    for (let i = 0; i <= 29; i++) {
        let hand1=data.items.results[i].results.results.hand;
        if(hand1==="four_of_a_kind"){
            four_of_a_kind++
        }
    }
    for (let i = 0; i <= 29; i++) {
        let hand2=data2.items.results[i].results.results.hand;
        if(hand2==="four_of_a_kind"){
            four_of_a_kind2++
        }
    }
    for (let i = 0; i <= 29; i++) {
        let hand3=data3.items.results[i].results.results.hand;
        if(hand3==="four_of_a_kind"){
            four_of_a_kind3++
        }
    }
    for (let i = 0; i <= 29; i++) {
        let hand4=data4.items.results[i].results.results.hand;
        if(hand4==="four_of_a_kind"){
            four_of_a_kind4++
        }
    }
    for (let i = 0; i <= 29; i++) {
        let hand5=data5.items.results[i].results.results.hand;
        if(hand5==="four_of_a_kind"){
            four_of_a_kind5++
        }
    }
    if(four_of_a_kind===0 && four_of_a_kind2===0 && four_of_a_kind3===0 && four_of_a_kind4===0 && four_of_a_kind5===0){
      //  ctx.reply(' 150 раздач нет Каре')
    }
} catch (err) {
    console.log(err);
}
}
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
             ctx.reply("(Кости) КРАСНЫЙ больше 3, 10 раз подряд");
        }
        if (total2 === 10) {
             ctx.reply("(Кости) КРАСНЫЙ меньше 3, 10 раз подряд");
        }
        if (total3 === 10) {
             ctx.reply("(Кости) СИНИЙ больше 3, 10 раз подряд");
        }
        if (total4 === 10) {
             ctx.reply("(Кости) СИНИЙ меньше 3, 10 раз подряд");
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
             ctx.reply("(Кости) КРАСНЫЙ победил 10 раз подряд");
        }
        if (win2 === 10) {
            ctx.reply("(Кости) СИНИЙ победил 10 раз подряд");
        }
        for (let i = 0; i <= 24; i++) {
            number = data.items.results[i].results[0].number
            number2 = data.items.results[i].results[1].number
            if (parseInt(number, 10) === parseInt(number2, 10)) {
                vs++;
            }
        }
        if (win === 25) {
            ctx.reply("(Кости) Ничьи не было 25 раз");
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

        for (let i = 0; i <= 24; i++) {
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
            ctx.reply('(7-42) число больше 175 не было 25 раз');
        }
        if (kol125 === 0) {
             ctx.reply('(7-42) число меньше 125 не было 25 раз');
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
             ctx.reply('(7-42) число больше 200 не было 60 раз');
        }
        if (kol100 === 0) {
            ctx.reply('(7-42) число меньше 100 не было 60 раз');
        }
    } catch (err) {
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
             ctx.reply('(Битва) Больших кэфов давно не было 20 минут');
        }

        for (let i = 0; i <= 29; i++) {
            score_dealer = data.items.results[i].results.score_dealer
            score_player = data.items.results[i].results.score_player
            if ((score_player === "8") || (score_dealer === "8")) {
                result2 = result2 + 1;
            }

        }

        if (result2 === 0) {
             ctx.reply('(Битва) Не было 8 уже 30 раздач');
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
             ctx.reply('(Битва) Не было 8 у игрока уже 90 минут (вертикаль)');
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
             ctx.reply('(Битва) Не было 8 у дилера уже 90 минут (вертикаль)');
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
            ctx.reply('(Битва) Не было ничьи 90 минут');
        }


    } catch (err) {
       console.log(err)
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
    global.time5 = setInterval(poker, 100000)
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
      clearInterval(time5);
       ctx.reply("Пока");
    } catch (err) {
       ctx.reply("Пока");
    }
 })
 
 bot.launch()
