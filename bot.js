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
      const response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/1/2/")
      const data2 = await response2.json()
      let arr = [];
      let num=0;
      let number=0;
      let number2=0;
      let number1=0;
      let number11=0;
      let number12=0;
      let num1=0;
      let num2=0;
      let arrs = [];
      let arrs2 = [];
      let kol=9;
      let kol175=0,kol200=0;
      let kol100=0,kol125=0;
      let color72=0,color74=0;
      let black72=0,black74=0;
      for (let i = 0; i <= 9; i++) {
      if(data.items.results[i].results[0].color==='yellow')
      {number1=number1+parseInt(data.items.results[i].results[0].number,10)}
         if(data.items.results[i].results[1].color==='yellow')
      {numbe1r=number1+parseInt(data.items.results[i].results[1].number,10)}
         if(data.items.results[i].results[2].color==='yellow')
      {number1=number1+parseInt(data.items.results[i].results[2].number,10)}
         if(data.items.results[i].results[3].color==='yellow')
      {number1=number1+parseInt(data.items.results[i].results[3].number,10)}
         if(data.items.results[i].results[4].color==='yellow')
      {number1=number1+parseInt(data.items.results[i].results[4].number,10)}
         if(data.items.results[i].results[5].color==='yellow')
      {number1=number1+parseInt(data.items.results[i].results[5].number,10)}
         if(data.items.results[i].results[6].color==='yellow')
      {number1=number1+parseInt(data.items.results[i].results[6].number,10)}
      if(number1>73)
      {
     color74++;
      }
         if(number1<73)
      {
     color72++;
      }
       number1=0;
      }
      if(color74===0)
      {
      ctx.reply('ЖЁЛТЫЕ больше 73 не было 10 раз');
      }
      if(color72===0)
      {
      ctx.reply('ЖЁЛТЫЕ меньше 73 не было 10 раз');
      }
      
      for (let i = 0; i <= 9; i++) {
      if(data.items.results[i].results[0].color==='black')
      {number2=number2+parseInt(data.items.results[i].results[0].number,10)}
         if(data.items.results[i].results[1].color==='black')
      {number2=number2+parseInt(data.items.results[i].results[1].number,10)}
         if(data.items.results[i].results[2].color==='black')
      {number2=number2+parseInt(data.items.results[i].results[2].number,10)}
         if(data.items.results[i].results[3].color==='black')
      {number2=number2+parseInt(data.items.results[i].results[3].number,10)}
         if(data.items.results[i].results[4].color==='black')
      {number2=number2+parseInt(data.items.results[i].results[4].number,10)}
         if(data.items.results[i].results[5].color==='black')
      {number2=number2+parseInt(data.items.results[i].results[5].number,10)}
         if(data.items.results[i].results[6].color==='black')
      {number2=number2+parseInt(data.items.results[i].results[6].number,10)}
       
      if(number2>73)
      {
     black74++;
      }
         if(number2<73)
      {
     black72++;
      }
         number2=0
      }
      if(black74===0)
      {
      ctx.reply('ЧЁРНЫХ больше 73 не было 10 раз');
      }
      if(black72===0)
      {
      ctx.reply('ЧЁРНЫЕ меньше 73 не было 10 раз');
      }
      
      for (let i = 0; i <= 19; i++) {
         number = parseInt(data.items.results[i].results[0].number,10)+parseInt(data.items.results[i].results[1].number,10)
         +parseInt(data.items.results[i].results[2].number,10)+parseInt(data.items.results[i].results[3].number,10)
         +parseInt(data.items.results[i].results[4].number,10)+parseInt(data.items.results[i].results[5].number,10)
         +parseInt(data.items.results[i].results[6].number,10)
         if(number>175)
      {
     kol175++;
      }
      
        if(number<125)
      {
     kol125++;
      } 
   }
      if(kol175===0)
      {
      ctx.reply('число больше 175 не было 20 раз');
      }
        if(kol125===0)
      {
      ctx.reply('число меньше 125 не было 20 раз');
      }
      
       for (let i = 0; i <= 29; i++) {
         number11 = parseInt(data.items.results[i].results[0].number,10)+parseInt(data.items.results[i].results[1].number,10)
         +parseInt(data.items.results[i].results[2].number,10)+parseInt(data.items.results[i].results[3].number,10)
         +parseInt(data.items.results[i].results[4].number,10)+parseInt(data.items.results[i].results[5].number,10)
         +parseInt(data.items.results[i].results[6].number,10)
         if(number11>200)
      {
     kol200++;
      }
      
        if(number11<100)
      {
     kol100++;
      } 
   }
          for (let i = 0; i <= 29; i++) {
         number12 = parseInt(data2.items.results[i].results[0].number,10)+parseInt(data2.items.results[i].results[1].number,10)
         +parseInt(data2.items.results[i].results[2].number,10)+parseInt(data2.items.results[i].results[3].number,10)
         +parseInt(data2.items.results[i].results[4].number,10)+parseInt(data2.items.results[i].results[5].number,10)
         +parseInt(data2.items.results[i].results[6].number,10)
         if(number12>200)
      {
     kol200++;
      }
      
        if(number12<100)
      {
     kol100++;
      } 
   }
      if(kol200===0)
      {
      ctx.reply('число больше 200 не было 60 раз');
      }
        if(kol100===0)
      {
      ctx.reply('число меньше 100 не было 60 раз');
      }
      
   }
   function good() {
      ctx.reply( "Вы запустили Бота на стратегию «7/42» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
       ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
      ctx.reply('Бот отслежки запущен!')
      global.time = setInterval(request2, 60000)
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

