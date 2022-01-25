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
   async function request2() {

      const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/1/")
      const data = await response.json()
      let arr = [];
      let num=0;
      let num2=0;
      let arrs = [];
      let arrs2 = [];
      let kol=9;
      for (let i = 0; i <= kol; i++) {
         number = data.items.results[i].results[0].number
         if(number<=10)
         {
            num=num+1;
         }
      }
      if(kol===num){
         ctx.reply("Сектор с числом БОЛЬШЕ 9.5 не падал 10 раз");
      }
      for (let i = 0; i <= kol; i++) {
         number2 = data.items.results[i].results[0].number
         if(number2<=10)
         {
            num2=num2+1;
         }
      }
      if(kol===num2){
         ctx.reply("Сектор с числом МЕНЬШЕ 9.5 не падал 10 раз");
      }

      for (let i = 0; i <= 14; i++) {

         colors = data.items.results[i].results[0].color

         arr.push(colors);
      }
      if (arr.includes('grey') === false) {
         ctx.reply("Серого цвета не было 14 раз");
      }
      if (arr.includes('black') === false) {
         ctx.reply("Чёрного цвета не было 14 раз");
      }

      if (arr.includes('red') === false) {
         ctx.reply("Красного цвета не было 14 раз");
      }


      for (let i = 0; i <= 29; i++) {
         colorss = data.items.results[i].results[0].color
         arrs.push(colorss);
      }
      if (arrs.includes('white') === true) { global.firstch = 2; }
      else {
         global.firstch = 0;
      }

      const response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/2/")
      const data2 = await response2.json()
       for (let i = 0; i <= 29; i++) {
         colors_cyb = data2.items.results[i].results[0].color
         arrs2.push(colors_cyb);
      }
         if (arrs2.includes('white') === true) { global.firstch_two = 2; }
      else {
         global.firstch_two = 0;
      }
      if (global.firstch === 0 && global.firstch_two === 0) {
         ctx.reply("Кубка не было 60 раз");
      }


   }
   function good() {
      ctx.reply( "Вы запустили Бота на стратегию «Колесо» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
       ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
      ctx.reply('Бот отслежки запущен!')
      global.time = setInterval(request2, 90000)
   }



   good()
}
)

bot.hears('/end', async (ctx) => {

   try {
      clearInterval(time);

      ctx.reply("Пока");
   } catch (err) {
      ctx.reply("Этот бот и так выключен");
   }
})

bot.launch()

