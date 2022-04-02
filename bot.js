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

      const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/1/1/")
      const data = await response.json()
      let arr = [];
      let num=0;
      let num2=0;
      let arrs = [];
      let arrs2 = [];
      let kol=9;
      for (let i = 0; i <= 0; i++) {
         let number = data.items.results[i].results[0].number+data.items.results[i].results[1].number+data.items.results[i].results[2].number+data.items.results[i].results[3].number
         +data.items.results[i].results[4].number+data.items.results[i].results[5].number+data.items.results[i].results[6].number
       
      }
         ctx.reply(number);
      }
    

   }
   function good() {
      ctx.reply( "Вы запустили Бота на стратегию «Колесо» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
       ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
      ctx.reply('Бот отслежки запущен!')
      global.time = setInterval(request2, 20000)
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

