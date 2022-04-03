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
      let number=0;
      let num2=0;
      let arrs = [];
      let arrs2 = [];
      let kol=9;
      let kol175,kol200;
      let kol100,kol125;
      for (let i = 0; i <= 0; i++) {
         number = parseInt(data.items.results[i].results[0].number,10)+parseInt(data.items.results[i].results[1].number,10)
         +parseInt(data.items.results[i].results[2].number,10)+parseInt(data.items.results[i].results[3].number,10)
         +parseInt(data.items.results[i].results[4].number,10)+parseInt(data.items.results[i].results[5].number,10)
         +parseInt(data.items.results[i].results[6].number,10)
        
      }
       ctx.reply(number);
      if(number>175)
      {
      ctx.reply('число больше 175 не было 20 раз');
      }
       if(number>200)
      {
      ctx.reply('число больше 200 не было 20 раз');
      }
        if(number<125)
      {
      ctx.reply('число меньше 125 не было 20 раз');
      }
       if(number<100)
      {
      ctx.reply('число меньше 100 не было 20 раз');
      }

   }
   function good() {
      ctx.reply( "Вы запустили Бота на стратегию «Колесо» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
       ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
      ctx.reply('Бот отслежки запущен!')
      global.time = setInterval(request2, 10000)
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

