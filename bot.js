 require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');
const bot = new Telegraf(process.env.BOT_TOKEN||8080)
bot.start((ctx) => {ctx.reply(`Привет ${ctx.message.from.first_name}`)
console.log(ctx.message)}) 
bot.help((ctx) => ctx.reply('Напиши /bot'))
bot.hears('/bot', async (ctx) => {
    async function request2(){

        const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/1/")
        const data = await response.json()
       let arr=[];
        for(let i=0; i<5;i++){
     
        colors =data.items.results[i].results[0].color
       arr.push(colors);
    }
   
       ctx.reply("Ставим:  ⬜Серый ⬛ Чёрный");
       console.log("Ставим:  ⬜Серый ⬛ Чёрный");   
    }
    function good(){
        ctx.reply('Бот запущен!')
       global.time= setInterval(request2,10000) 
       }



good()}
)
bot.hears('/end', async (ctx) => {
    clearInterval(time);
    ctx.reply("Пока");  
})
bot.launch()
