require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');

const bot = new Telegraf(process.env.BOT_TOKEN || 8080)
bot.start((ctx) => {
   ctx.reply(`Привет ${ctx.message.from.first_name}`)
   console.log(ctx.message)
})
bot.help((ctx) => ctx.reply('Напиши /bot запустите сигнал при 4 минусах ' + '\n' +
   'Напиши /bot5 запустите сигнал при 5 минусах' + '\n' +
   'Напиши /bot3 запустите сигнал при 3 минусах' + '\n' +
   'Чтобы вырубить бота по 4 минусам напишите /end ' + '\n' +
   'Чтобы вырубить бота по 3 минусам напишите /end3' + '\n' +
   'Чтобы вырубить бота по 5 минусам напишите /end5'))
bot.hears('/bot', async (ctx) => {
   async function request2() {

      const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/1/")
      const data = await response.json()
      let arr = [];
      let arrs = [];
      for (let i = 0; i <= 9; i++) {

         colors = data.items.results[i].results[0].color

         arr.push(colors);
      }
      if (arr.includes('grey') = false) {
         ctx.reply("Серого цвета не было 18 раз");
      }
      if (arr.includes('black') = false) {
         ctx.reply("Чёрного цвета не было 18 раз");
      }

      if (arr.includes('red') = false) {
         ctx.reply("Чёрного цвета не было 18 раз");
      }
    
   }
   function good() {
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

