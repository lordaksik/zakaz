 require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');
const bot = new Telegraf('5651735774:AAHkjBk517oMdQc6DN8rrZHVcxFfev18mgQ'||8080)
bot.start((ctx) => {ctx.reply(`Привет ${ctx.message.from.first_name}`)
console.log(ctx.message)})
bot.help((ctx) => ctx.reply('Напиши /bot'))
bot.hears('/bot', async (ctx) => {
    async function request2(){
      const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
      const data = await response.json()
      mast1=0;
      mast2=0;
      mast3=0;
      mast4=0;
      one_mast1=0;
      one_mast2=0;
      one_mast3=0;
      one_mast4=0;
      mastvertPl1=0;
      mastvertPl2=0;
      mastvertPl3=0;
      mastvertPl4=0;
      mastvertDil1=0;
      mastvertDil2=0;
      mastvertDil3=0;
      mastvertDil4=0;
      for (let i = 0; i < 10; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit
        
        if(score_dealer!='diamonds' && score_player!='diamonds')
        mast1=mast1+1;
   
    }
    
    if(mast1==10)
    {ctx.reply('Буби не было 10 раздач')}
    //diamonds- буби
    //clubs - крести
    //spades - пики
    //hearts - чирва
    //
    for (let i = 0; i < 10; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
       if(score_dealer!='clubs' && score_player!='clubs')
       mast2=mast2+1;
   
   }
   if(mast2==10)
   {ctx.reply('Крести не было 10 раздач')}
   for (let i = 0; i < 10; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
       if(score_dealer!='spades' && score_player!='spades')
       mast3=mast3+1;
   
   }
   
   if(mast3==10)
   {ctx.reply('Пики не было 10 раздач')}
   for (let i = 0; i < 10; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
   
       if(score_dealer!='hearts' && score_player!='hearts')
       mast4=mast4+1;
   
   }
   
   if(mast4==10)
   {ctx.reply('Чирвы не было 10 раздач')}
   for (let i = 0; i < 2; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
   
       if(score_dealer=='diamonds' && score_player=='diamonds')
       one_mast1=one_mast1+1;
   
   }
   
   if(one_mast1==2)
   {ctx.reply('4 буби подряд')}
   
   for (let i = 0; i < 2; i++) {
      score_dealer = data.items.results[i].results.card_dealer.suit
      score_player = data.items.results[i].results.card_player.suit
      if(score_dealer=='clubs' && score_player=='clubs')
      one_mast2=one_mast2+1;
   
   }
   
   if(one_mast2==2)
   {ctx.reply('4 крести подряд')}
   for (let i = 0; i < 2; i++) {
      score_dealer = data.items.results[i].results.card_dealer.suit
      score_player = data.items.results[i].results.card_player.suit
   
      if(score_dealer=='spades' && score_player=='spades')
      one_mast3=one_mast3+1;
   
   }
   
   if(one_mast3==2)
   {ctx.reply('4 пики подряд')}
   for (let i = 0; i < 2; i++) {
      score_dealer = data.items.results[i].results.card_dealer.suit
      score_player = data.items.results[i].results.card_player.suit
      if(score_dealer=='hearts' && score_player=='hearts')
      one_mast4=one_mast4+1;
   
   }
   
   if(one_mast4==2)
   {ctx.reply('4 чирвы подряд')}
   
   
   for (let i = 0; i < 10; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
       
       if(score_dealer!='diamonds')
       mastvertDil1=mastvertDil1+1;
   
   }
   
   if(mastvertDil1==10)
   {ctx.reply('Нет 10 буби у дилера (вертикаль)')}
   for (let i = 0; i < 10; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
       
       if(score_dealer!='clubs')
       mastvertDil2=mastvertDil2+1;
   
   }
   if(mastvertDil2==10)
   {ctx.reply('Нет 10 крести у дилера (вертикаль)')}
   for (let i = 0; i < 10; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
       
       if(score_dealer!='spades')
       mastvertDil3=mastvertDil3+1;
   
   }
   
   if(mastvertDil3==10)
   {ctx.reply('Нет 10 пик у дилера (вертикаль)')}
   for (let i = 0; i < 10; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
       
       if(score_dealer!='hearts')
       mastvertDil4=mastvertDil4+1;
   
   }
   if(mastvertDil4==10)
   {ctx.reply('Нет 10 чирв у дилера (вертикаль)')}
   for (let i = 0; i < 10; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
       
       if(score_player!='diamonds')
       mastvertPl1=mastvertPl1+1;
   
   }
   if(mastvertPl1==10)
   {ctx.reply('Нет 10 буби у игрока (вертикаль)')}
   for (let i = 0; i < 10; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
       
       if(score_player!='clubs')
       mastvertPl2=mastvertPl2+1;
   
   }
   
   if(mastvertPl2==10)
   {ctx.reply('Нет 10 крестей у игрока (вертикаль)')}
   for (let i = 0; i < 10; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
       
       if(score_player!='spades')
       mastvertPl3=mastvertPl3+1;
   
   }
   
   if(mastvertPl3==10)
   {ctx.reply('Нет 10 пик у игрока (вертикаль)')}
   for (let i = 0; i < 10; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
       
       if(score_player!='hearts')
       mastvertPl4=mastvertPl4+1;
   
   }
   if(mastvertPl4==10)
   {ctx.reply('Нет 10 чирв у игрока (вертикаль)')}
     
     
      //diamonds- буби
 //clubs - крести
 //spades - пики
 //hearts - чирва
 //
   var black = 0;
    var red = 0;
    for (let i = 0; i < 8; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
       
       if(score_player!='hearts' && score_dealer!='hearts' &&  score_dealer!='diamonds' &&  score_player!='diamonds'){
       red=red+1;}
      if(score_player!='spades' &&  score_dealer!='clubs' && score_dealer!='spades' &&  score_player!='clubs'){
       black=black+1;}
   
   } 
     console.log(red)
       if(red==8)
   {ctx.reply('Нет 8 раздач красных карт')}
     console.log(black + "ку")
        if(black==8)
   {ctx.reply('Нет 8 раздач чёрных карт')}
     
     var blackpl = 0;
     var blackdil = 0;
    var redpl = 0;
     var reddil = 0;
    for (let i = 0; i < 16; i++) {
       score_dealer = data.items.results[i].results.card_dealer.suit
       score_player = data.items.results[i].results.card_player.suit
       
       if(score_player!='hearts' &&  score_player!='diamonds'){
       redpl=redpl+1;}
     
      if(score_dealer!='hearts' &&  score_dealer!='diamonds'){
       reddil=reddil+1;}
     
      if(score_player!='spades' && score_player!='clubs'){
       blackpl=blackpl+1;}
     
     if(score_dealer!='clubs' && score_dealer!='spades'){
       blackdil=blackdil+1;}
   
   } 
       if(redpl==16)
   {ctx.reply('Нет 16 красных карт у игрока по вертикали')}
       if(reddil==0)
   {ctx.reply('Нет 16 красных карт у игрока по вертикали')}
     
       if(blackpl==16)
   {ctx.reply('Нет 16 чёрных карт у игрока по вертикали')}
       if(blackdil==16)
   {ctx.reply('Нет 16 чёрных карт у игрока по вертикали')}
      
    }
    function good(){
      ctx.reply( "Вы запустили Бота на стратегию «Масти» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
      ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
       global.time= setInterval(request2,30000) 
       }



good()}
)
bot.hears('/end', async (ctx) => {
   try {
      clearInterval(global.time);
  
      ctx.reply("Пока");  
    } catch(err) {
      ctx.reply("Этот бот и так выключен");    
    } 
})
bot.launch()

async function request24(){
   const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
   const data = await response.json()
   mast1=0;
   mast2=0;
   mast3=0;
   mast4=0;
   one_mast1=0;
   one_mast2=0;
   one_mast3=0;
   one_mast4=0;
   mastvertPl1=0;
   mastvertPl2=0;
   mastvertPl3=0;
   mastvertPl4=0;
   mastvertDil1=0;
   mastvertDil2=0;
   mastvertDil3=0;
   mastvertDil4=0;
   for (let i = 0; i < 3; i++) {
     score_dealer = data.items.results[i].results.card_dealer.suit
     score_player = data.items.results[i].results.card_player.suit
     
     if(score_dealer!='diamonds' && score_player!='diamonds')
     mast1=mast1+1;

 }
 
 if(mast1==3)
 {ctx.reply('Буби не было 6 карты')}
 //diamonds- буби
 //clubs - крести
 //spades - пики
 //hearts - чирва
 //
 for (let i = 0; i < 3; i++) {
    score_dealer = data.items.results[i].results.card_dealer.suit
    score_player = data.items.results[i].results.card_player.suit
    if(score_dealer!='clubs' && score_player!='clubs')
    mast2=mast2+1;

}
if(mast2==3)
{ctx.reply('Крести не было 6 карты')}
for (let i = 0; i < 3; i++) {
    score_dealer = data.items.results[i].results.card_dealer.suit
    score_player = data.items.results[i].results.card_player.suit
    if(score_dealer!='spades' && score_player!='spades')
    mast3=mast3+1;

}

if(mast3==3)
{ctx.reply('Пики не было 6 карты')}
for (let i = 0; i < 3; i++) {
    score_dealer = data.items.results[i].results.card_dealer.suit
    score_player = data.items.results[i].results.card_player.suit

    if(score_dealer!='hearts' && score_player!='hearts')
    mast4=mast4+1;

}

if(mast4==3)
{ctx.reply('Чирвы не было 6 карты')}
for (let i = 0; i < 2; i++) {
    score_dealer = data.items.results[i].results.card_dealer.suit
    score_player = data.items.results[i].results.card_player.suit

    if(score_dealer=='diamonds' && score_player=='diamonds')
    one_mast1=one_mast1+1;

}

if(one_mast1==2)
{ctx.reply('4 буби подряд')}

for (let i = 0; i < 2; i++) {
   score_dealer = data.items.results[i].results.card_dealer.suit
   score_player = data.items.results[i].results.card_player.suit
   if(score_dealer=='clubs' && score_player=='clubs')
   one_mast2=one_mast2+1;

}

if(one_mast2==2)
{ctx.reply('4 крести подряд')}
for (let i = 0; i < 2; i++) {
   score_dealer = data.items.results[i].results.card_dealer.suit
   score_player = data.items.results[i].results.card_player.suit

   if(score_dealer=='spades' && score_player=='spades')
   one_mast3=one_mast3+1;

}

if(one_mast3==2)
{ctx.reply('4 пики подряд')}
for (let i = 0; i < 2; i++) {
   score_dealer = data.items.results[i].results.card_dealer.suit
   score_player = data.items.results[i].results.card_player.suit
   if(score_dealer=='hearts' && score_player=='hearts')
   one_mast4=one_mast4+1;

}

if(one_mast4==2)
{ctx.reply('4 чирвы подряд')}


for (let i = 0; i < 8; i++) {
    score_dealer = data.items.results[i].results.card_dealer.suit
    score_player = data.items.results[i].results.card_player.suit
    
    if(score_dealer!='diamonds')
    mastvertDil1=mastvertDil1+1;

}

if(mastvertDil1==8)
{ctx.reply('нет 8 буби у дилера')}
for (let i = 0; i < 8; i++) {
    score_dealer = data.items.results[i].results.card_dealer.suit
    score_player = data.items.results[i].results.card_player.suit
    
    if(score_dealer!='clubs')
    mastvertDil2=mastvertDil2+1;

}
if(mastvertDil2==8)
{ctx.reply('нет 8 крести у дилера')}
for (let i = 0; i < 8; i++) {
    score_dealer = data.items.results[i].results.card_dealer.suit
    score_player = data.items.results[i].results.card_player.suit
    
    if(score_dealer!='spades')
    mastvertDil3=mastvertDil3+1;

}

if(mastvertDil3==8)
{ctx.reply('нет 8 пик у дилера')}
for (let i = 0; i < 8; i++) {
    score_dealer = data.items.results[i].results.card_dealer.suit
    score_player = data.items.results[i].results.card_player.suit
    
    if(score_dealer!='hearts')
    mastvertDil4=mastvertDil4+1;

}
if(mastvertDil4==8)
{ctx.reply('нет 8 чирв у дилера')}
for (let i = 0; i < 8; i++) {
    score_dealer = data.items.results[i].results.card_dealer.suit
    score_player = data.items.results[i].results.card_player.suit
    
    if(score_player!='diamonds')
    mastvertPl1=mastvertPl1+1;

}
if(mastvertPl1==8)
{ctx.reply('нет 8 буби у игрока')}
for (let i = 0; i < 8; i++) {
    score_dealer = data.items.results[i].results.card_dealer.suit
    score_player = data.items.results[i].results.card_player.suit
    
    if(score_player!='clubs')
    mastvertPl2=mastvertPl2+1;

}

if(mastvertPl2==8)
{ctx.reply('нет 8 крестей у игрока')}
for (let i = 0; i < 8; i++) {
    score_dealer = data.items.results[i].results.card_dealer.suit
    score_player = data.items.results[i].results.card_player.suit
    
    if(score_player!='spades')
    mastvertPl3=mastvertPl3+1;

}

if(mastvertPl3==8)
{ctx.reply('нет 8 пик у игрока')}
for (let i = 0; i < 8; i++) {
    score_dealer = data.items.results[i].results.card_dealer.suit
    score_player = data.items.results[i].results.card_player.suit
    
    if(score_player!='hearts')
    mastvertPl4=mastvertPl4+1;

}
console.log(mastvertPl4);
if(mastvertPl4==8)
{ctx.reply('нет 8 чирв у игрока')}
}

 //diamonds- буби
 //clubs - крести
 //spades - пики
 //hearts - чирва
 //

