 require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');

const bot = new Telegraf(process.env.BOT_TOKEN||8080)
bot.start((ctx) => {ctx.reply(`Привет ${ctx.message.from.first_name}`)
console.log(ctx.message)})
bot.help((ctx) => ctx.reply('Напиши /bot запустите сигнал при 4 минусах '+'\n'+
'Напиши /bot5 запустите сигнал при 5 минусах'+'\n'+
'Напиши /bot3 запустите сигнал при 3 минусах'+'\n'+
'Чтобы вырубить бота по 4 минусам напишите /end '+'\n'+
'Чтобы вырубить бота по 3 минусам напишите /end3'+'\n'+
'Чтобы вырубить бота по 5 минусам напишите /end5'))
bot.hears('/bot', async (ctx) => {
    async function request2(){

        const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/1/")
        const data = await response.json()
       let arr=[];
        for(let i=0; i<5;i++){
     
        colors =data.items.results[i].results[0].color
       arr.push(colors);
    }

    if((arr[0]==="black" && (arr[1]==="white" ||arr[1]==="red") && arr[2]==="black"  && (arr[3]==="white" ||arr[3]==="red")&& arr[4]==="black")||
    ((arr[0]==="white") && arr[1]==="black"  && (arr[2]==="white" ||arr[2]==="red")&& arr[3]==="black" && (arr[4]==="white" ||arr[4]==="red") ))
    { 
       ctx.reply( "Ставим:  ⬛ Чёрный  ⬜ Серый");
    }
    if((arr[0]==="red" && (arr[1]==="white" ||arr[1]==="black") && arr[2]==="red"  && (arr[3]==="white" ||arr[3]==="black")&& arr[4]==="red"  )
    ||((arr[0]==="white") && arr[1]==="red"  && (arr[2]==="white" ||arr[2]==="black")&& arr[3]==="red" && (arr[4]==="white" ||arr[4]==="black")))
    {
       ctx.reply( "Ставим: 🟥 Красный ⬜ Серый");
    }
if((arr[0]==="black" && (arr[1]==="white" ||arr[1]==="grey") && arr[2]==="black"  && (arr[3]==="white" ||arr[3]==="grey")&& arr[4]==="black" )||
((arr[0]==="white") && arr[1]==="black"  && (arr[2]==="white" ||arr[2]==="grey")&& arr[3]==="black" && (arr[4]==="white" ||arr[4]==="grey")))
    {

       ctx.reply( "Ставим:  ⬛ Чёрный 🟥 Красный");
    }
    
if((arr[0]==="red" && (arr[1]==="white" ||arr[1]==="grey") && arr[2]==="red"  && (arr[3]==="white" ||arr[3]==="grey")&& arr[4]==="red" )||
( (arr[0]==="white") && arr[1]==="red"  && (arr[2]==="white" ||arr[2]==="grey")&& arr[3]==="red" && (arr[4]==="white" ||arr[4]==="grey") ))
    {
       ctx.reply("Ставим: 🟥 Красный ⬛ Чёрный");
    }
   
    if((arr[0]==="grey" && (arr[1]==="white" ||arr[1]==="black") && arr[2]==="grey"  && (arr[3]==="white" ||arr[3]==="black")&& arr[4]==="grey" )||
    ((arr[0]==="white") && arr[1]==="grey"  && (arr[2]==="white" ||arr[2]==="black")&& arr[3]==="grey" &&(arr[4]==="white" ||arr[4]==="black") ))
    {   
       ctx.reply("Ставим: ⬜ Серый 🟥 Красный ");
    }
        if((arr[0]==="grey" && (arr[1]==="white" ||arr[1]==="red") && arr[2]==="grey"  && (arr[3]==="white" ||arr[3]==="red")&& arr[4]==="grey" )||
        ( (arr[0]==="white" ) && arr[1]==="grey"  && (arr[2]==="white" ||arr[2]==="red")&& arr[3]==="grey" &&(arr[4]==="white" ||arr[4]==="red")))
    {    
       ctx.reply("Ставим:  ⬜Серый ⬛ Чёрный");
    }
      
         console.log(arr);
    }
    function good(){
        ctx.reply('Бот отслежки 4 минусов запущен!')
       global.time= setInterval(request2,6000) 
       }



good()}
)
bot.hears('/bot3', async (ctx) => {
    async function bot_3(){

        const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/1/")
        const data = await response.json()
       let arr=[];
        for(let i=0; i<4;i++){
     
        colors =data.items.results[i].results[0].color
       arr.push(colors);
    }

    if((arr[0]==="black" && (arr[1]==="white" ||arr[1]==="red") && arr[2]==="black"  && (arr[3]==="white" ||arr[3]==="red"))||
    ((arr[0]==="white") && arr[1]==="black"  && (arr[2]==="white" ||arr[2]==="red")&& arr[3]==="black"  ))
    { 
       ctx.reply( "Ставим:  ⬛ Чёрный  ⬜ Серый");
    }
    if((arr[0]==="red" && (arr[1]==="white" ||arr[1]==="black") && arr[2]==="red"  && (arr[3]==="white" ||arr[3]==="black")  )
    ||((arr[0]==="white") && arr[1]==="red"  && (arr[2]==="white" ||arr[2]==="black")&& arr[3]==="red"))
    {
       ctx.reply( "Ставим: 🟥 Красный ⬜ Серый");
    }
if((arr[0]==="black" && (arr[1]==="white" ||arr[1]==="grey") && arr[2]==="black"  && (arr[3]==="white" ||arr[3]==="grey"))||
((arr[0]==="white") && arr[1]==="black"  && (arr[2]==="white" ||arr[2]==="grey")&& arr[3]==="black"))
    {

       ctx.reply( "Ставим:  ⬛ Чёрный 🟥 Красный");
    }
    
if((arr[0]==="red" && (arr[1]==="white" ||arr[1]==="grey") && arr[2]==="red"  && (arr[3]==="white" ||arr[3]==="grey"))||
( (arr[0]==="white") && arr[1]==="red"  && (arr[2]==="white" ||arr[2]==="grey")&& arr[3]==="red"))
    {
       ctx.reply("Ставим: 🟥 Красный ⬛ Чёрный");
    }
   
    if((arr[0]==="grey" && (arr[1]==="white" ||arr[1]==="black") && arr[2]==="grey"  && (arr[3]==="white" ||arr[3]==="black") )||
    ((arr[0]==="white") && arr[1]==="grey"  && (arr[2]==="white" ||arr[2]==="black")&& arr[3]==="grey"  ))
    {   
       ctx.reply("Ставим: ⬜ Серый 🟥 Красный ");
    }
        if((arr[0]==="grey" && (arr[1]==="white" ||arr[1]==="red") && arr[2]==="grey"  && (arr[3]==="white" ||arr[3]==="red") )||
        ( (arr[0]==="white" ) && arr[1]==="grey"  && (arr[2]==="white" ||arr[2]==="red")&& arr[3]==="grey" ))
    {    
       ctx.reply("Ставим:  ⬜Серый ⬛ Чёрный");
    }
      
         console.log(arr);
    }
    function good_bot3(){
        ctx.reply('Бот отслежки 3 минусов запущен!')
       global.times= setInterval(bot_3,6000) 
       }



good_bot3()}
)
bot.hears('/bot5', async (ctx) => {
    async function bot5(){

        const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/1/")
        const data = await response.json()
       let arr=[];
        for(let i=0; i<6;i++){
     
        colors =data.items.results[i].results[0].color
       arr.push(colors);
    }

    if((arr[0]==="black" && (arr[1]==="white" ||arr[1]==="red") && arr[2]==="black"  && (arr[3]==="white" ||arr[3]==="red")&& arr[4]==="black"&& (arr[5]==="white" ||arr[5]==="red"))||
    ((arr[0]==="white") && arr[1]==="black"  && (arr[2]==="white" ||arr[2]==="red")&& arr[3]==="black" && (arr[4]==="white" ||arr[4]==="red")&& arr[5]==="black" ))
    { 
       ctx.reply( "Ставим:  ⬛ Чёрный  ⬜ Серый");
    }
    if((arr[0]==="red" && (arr[1]==="white" ||arr[1]==="black") && arr[2]==="red"  && (arr[3]==="white" ||arr[3]==="black")&& arr[4]==="red"&& (arr[5]==="white" ||arr[5]==="black")  )
    ||((arr[0]==="white") && arr[1]==="red"  && (arr[2]==="white" ||arr[2]==="black")&& arr[3]==="red" && (arr[4]==="white" ||arr[4]==="black")&& arr[5]==="red"))
    {
       ctx.reply( "Ставим: 🟥 Красный ⬜ Серый");
    }
if((arr[0]==="black" && (arr[1]==="white" ||arr[1]==="grey") && arr[2]==="black"  && (arr[3]==="white" ||arr[3]==="grey")&& arr[4]==="black"&& (arr[5]==="white" ||arr[5]==="grey") )||
((arr[0]==="white") && arr[1]==="black"  && (arr[2]==="white" ||arr[2]==="grey")&& arr[3]==="black" && (arr[4]==="white" ||arr[4]==="grey")&& arr[5]==="black"))
    {

       ctx.reply( "Ставим:  ⬛ Чёрный 🟥 Красный");
    }
    
if((arr[0]==="red" && (arr[1]==="white" ||arr[1]==="grey") && arr[2]==="red"  && (arr[3]==="white" ||arr[3]==="grey")&& arr[4]==="red"&& (arr[5]==="white" ||arr[5]==="grey") )||
( (arr[0]==="white") && arr[1]==="red"  && (arr[2]==="white" ||arr[2]==="grey")&& arr[3]==="red" && (arr[4]==="white" ||arr[4]==="grey")&& arr[5]==="red" ))
    {
       ctx.reply("Ставим: 🟥 Красный ⬛ Чёрный");
    }
   
    if((arr[0]==="grey" && (arr[1]==="white" ||arr[1]==="black") && arr[2]==="grey"  && (arr[3]==="white" ||arr[3]==="black")&& arr[4]==="grey" && (arr[5]==="white" ||arr[5]==="black"))||
    ((arr[0]==="white") && arr[1]==="grey"  && (arr[2]==="white" ||arr[2]==="black")&& arr[3]==="grey" &&(arr[4]==="white" ||arr[4]==="black")&& arr[5]==="grey" ))
    {   
       ctx.reply("Ставим: ⬜ Серый 🟥 Красный ");
    }
        if((arr[0]==="grey" && (arr[1]==="white" ||arr[1]==="red") && arr[2]==="grey"  && (arr[3]==="white" ||arr[3]==="red")&& arr[4]==="grey" && (arr[5]==="white" ||arr[5]==="red"))||
        ( (arr[0]==="white" ) && arr[1]==="grey"  && (arr[2]==="white" ||arr[2]==="red")&& arr[3]==="grey" &&(arr[4]==="white" ||arr[4]==="red")&& arr[5]==="grey"))
    {    
       ctx.reply("Ставим:  ⬜Серый ⬛ Чёрный");
    }
      
         console.log(arr);
    }
    function good_bot5(){
        ctx.reply('Бот отслежки 5 минусов запущен!')
       global.time5= setInterval(bot5,6000) 
       }

good_bot5()}
)


bot.hears('/end', async (ctx) => {
   
    try {
      clearInterval(time);
  
      ctx.reply("Пока");  
    } catch(err) {
      ctx.reply("Этот бот и так выключен");    
    }
})
bot.hears('/end3', async (ctx) => {
   try {
      clearInterval(times);
  
      ctx.reply("Пока");  
    } catch(err) {
      ctx.reply("Этот бот и так выключен");    
    }
})
bot.hears('/end5', async (ctx) => {
   try {
      clearInterval(time5);
  
      ctx.reply("Пока");  
    } catch(err) {
      ctx.reply("Этот бот и так выключен");    
    }
})
bot.hears('/kub', async (ctx) => {
   async function cup(){

       const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/1/")
       const data = await response.json()
      let arr=[];
     
      try {
       for(let i=0; i<=29;i++){
    
       colors =data.items.results[i].results[0].color
      
      arr.push(colors);
   }
      if(arr.includes('white') ===true)
    {  global.firstch = 2;}
  else{
   global.firstch=0;
  }
  const response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/2/")
  const data2 = await response2.json()
 let arr2=[];

  for(let i=0; i<=9;i++){

  colors2 =data2.items.results[i].results[0].color
 
 arr2.push(colors2);
}
 if(arr2.includes('white') ===true)
{  global.firstch2 = 2;}
else{
global.firstch2=0;
}
   
   console.log(global.firstch +' '+global.firstch2)
  
if(global.firstch === 0 && global.firstch2 === 0)
{
   ctx.reply("Кубка не было 40 раз");    
}

}
    catch(err){
      console.log('ждём');
   }


}

 function cup_bot(){
   ctx.reply('Бот отслежки 5 минусов запущен!')
  global.time_cup= setInterval(cup,6000) 
  }

cup_bot()})
bot.launch()

