    require('dotenv').config();
    const { Telegraf } = require('telegraf')
    const fetch = require('node-fetch');
    
    const bot = new Telegraf('5742102209:AAGyIQb4D3G9I_h7QTukUNtKJ_Hsj0BnrxI' || 8080)
    bot.start((ctx) => {
        ctx.reply(`Привет ${ctx.message.from.first_name}`)
        console.log(ctx.message)
    })
    bot.help((ctx) => ctx.reply('Напиши /bot '))
    bot.hears('/bot', async (ctx) => {
        async function fart1win() {
            try{
                var now = new Date();
                var date= (now.getMonth()+1) +"-"+now.getDate();
                console.log( date)

                const response = await fetch("https://game3.betgamestv.eu/s/web/v1/game/results/1win?game_id=16&page=1&date=2022-"+date+"&timezone=0")
                const data = await response.json()
                var col=0,col2=0,col3=0;
                    for (let i = 0; i <= 19; i++) {
                        colors =data.runs[i].results[0].color;
                        console.log(colors)
                        if (colors === 'grey') { col++ }
                        if (colors === 'black') { col2++ }
                        if (colors === 'red') { col3++ }
                    }
                    console.log(col3 + " Серый")
                    if (col === 0) {
                        console.log(col)
                        ctx.reply("(Классик) Серого цвета не было 20 раз");
                    }
                    if (col2 === 0) {
                        console.log(col2)
                        ctx.reply("(Классик) Чёрного цвета не было 20 раз");
                    }
                    if (col3 === 0) {
                        console.log(col3)
                        ctx.reply("(Классик) Красного цвета не было 20 раз");
                    }
                    var green5=0,black5=0,red5=0;
                    for (let i = 0; i <= 4; i++) {
                        colors = data.runs[i].results[0].color;
                        if (colors === 'grey') { green5++ }
                        if (colors === 'black') { black5++ }
                        if (colors === 'red') { red5++ }
                    }
                    if (green5 === 5) {
                        ctx.reply("(Классик) Серый цвет был 5 раз подряд");
                    }
                    if (black5 === 5) {
                        ctx.reply("(Классик) Чёрный цвет был 5 раз подряд");
                    }
                    if (red5 === 5) {
                        ctx.reply("(Классик) Красный цвет был 5 раз подряд");
                    }
                    var num16=0,num712 = 0, num1318;
                    for (let i = 0; i <= 4; i++) {
                        number = data.runs[i].results[0].number;
                        console.log(number)
                        if (number === '1'||number === '2'||number === '3'||number === '4' || number === '5' || number === '6') { num16++ }
                        if (number === '7'||number === '8'||number === '9'||number === '10' || number === '11' || number === '12') { num712++ }
                        if (number === '13'||number === '14'||number === '15'||number === '16' || number === '17' || number === '18') { num1318++ }
                    }
                    if (num16 === 5) {
                        ctx.reply("(Классик) Числа 1-6 выпали 5 раз подряд");
                    }
                    if (num712 === 5) {
                        ctx.reply("(Классик) Числа 7-12 выпали 5 раз подряд");
                    }
                    if (num1318 === 5) {
                        ctx.reply("(Классик) Числа 13-18 выпали 5 раз подряд");
                    }
                    var not1=0,not2=0,not3=0;
                for (let i = 0; i <= 14; i++) {
                    number = data.runs[i].results[0].number;
                    if (number === '1'||number === '2'||number === '3'||number === '4' || number === '5' || number === '6') { not1++ }
                    if (number === '7'||number === '8'||number === '9'||number === '10' || number === '11' || number === '12') { not2++ }
                    if (number === '13'||number === '14'||number === '15'||number === '16' || number === '17' || number === '18') { not3++ }
                }
                if (not1 === 0) {
                    ctx.reply("(Фартуна) Числа 1-6 не выпадали 15 раз подряд");
                }
                if (num712 === 0) {
                    ctx.reply("(Фартуна) Числа 7-12 не выпадали 15 раз подряд");
                }
                if (num1318 === 0) {
                    ctx.reply("(Фартуна) Числа 13-18 не выпадали 15 раз подряд");
                }

                }
                catch (err) {
                    console.log(err)
                }
            }
            async function fartunalong1win(){
                try {
                    var kyb = 0;
                    var now = new Date();
                var date= (now.getMonth()+1) +"-"+now.getDate();
                console.log( date)
        var house = now.getHours();
      console.log(house)
        if (house > 8) {
                const response = await fetch("https://game3.betgamestv.eu/s/web/v1/game/results/1win?game_id=16&page=1&date=2022-"+date+"&timezone=0")
                const data = await response.json()
                const response2 = await fetch("https://game3.betgamestv.eu/s/web/v1/game/results/1win?game_id=16&page=2&date=2022-"+date+"&timezone=0")
                const data2 = await response2.json()
                const response3 = await fetch("https://game3.betgamestv.eu/s/web/v1/game/results/1win?game_id=16&page=3&date=2022-"+date+"&timezone=0")
                const data3 = await response3.json()
                const response4 = await fetch("https://game3.betgamestv.eu/s/web/v1/game/results/1win?game_id=16&page=4&date=2022-"+date+"&timezone=0")
                const data4 = await response4.json()
                const response5 = await fetch("https://game3.betgamestv.eu/s/web/v1/game/results/1win?game_id=16&page=5&date=2022-"+date+"&timezone=0")
                const data5 = await response5.json()
                const response6 = await fetch("https://game3.betgamestv.eu/s/web/v1/game/results/1win?game_id=16&page=6&date=2022-"+date+"&timezone=0")
                const data6 = await response6.json()
                for (let i = 0; i <= 29; i++) {
                    colors =data.runs[i].results[0].color;
                    if (colors === 'white') { kyb++ }
                }
                for (let i = 0; i <= 29; i++) {
                    colors2 =data2.runs[i].results[0].color;
                    if (colors2 === 'white') { kyb++ }
                }
                for (let i = 0; i <= 29; i++) {
                    colors3 = data3.runs[i].results[0].color;
                    if (colors3 === 'white') { kyb++ }
                }
                for (let i = 0; i <= 29; i++) {
                    colors4 =data4.runs[i].results[0].color;
                    if (colors4 === 'white') { kyb++ }
                }
                for (let i = 0; i <= 29; i++) {
                    colors5 =data5.runs[i].results[0].color;
                    if (colors5 === 'white') { kyb++ }
                }
                for (let i = 0; i <= 29; i++) {
                    colors6 =data6.runs[i].results[0].color;
                    if (colors6 === 'white') { kyb++ }
                }
                if (kyb === 0 ) {
                    ctx.reply("(Фартуна) Кубка не было 180 раз");
                }
    var v1=0,v2=0,v3=0,v4=0,v5=0,v6=0,v7=0,v8=0,v9=0,v10=0,v11=0,v12=0,v13=0,v14=0,v15=0,v16=0,v17=0,v18=0;
    for (let i = 0; i <= 29; i++) {
        number = data.runs[i].results[0].number;
        if (number === '1') { v1++ }
        if (number === '2') { v2++ }
        if (number === '3') { v3++ }
        if (number === '4') { v4++ }
        if (number === '5') { v5++ }
        if (number === '6') { v6++ }
        if (number === '7') { v7++ }
        if (number === '8') { v8++ }
        if (number === '9') { v9++ }
        if (number === '10') { v10++ }
        if (number === '11') { v11++ }
        if (number === '12') { v12++ }
        if (number === '13') { v13++ }
        if (number === '14') { v14++ }
        if (number === '15') { v15++ }
        if (number === '16') { v16++ }
        if (number === '17') { v17++ }
        if (number === '18') { v18++ }
    }
    for (let i = 0; i <= 29; i++) {
        number = data2.runs[i].results[0].number;
        if (number === '1') { v1++ }
        if (number === '2') { v2++ }
        if (number === '3') { v3++ }
        if (number === '4') { v4++ }
        if (number === '5') { v5++ }
        if (number === '6') { v6++ }
        if (number === '7') { v7++ }
        if (number === '8') { v8++ }
        if (number === '9') { v9++ }
        if (number === '10') { v10++ }
        if (number === '11') { v11++ }
        if (number === '12') { v12++ }
        if (number === '13') { v13++ }
        if (number === '14') { v14++ }
        if (number === '15') { v15++ }
        if (number === '16') { v16++ }
        if (number === '17') { v17++ }
        if (number === '18') { v18++ }
    }
    for (let i = 0; i <= 29; i++) {
        number = data3.runs[i].results[0].number;
        if (number === '1') { v1++ }
        if (number === '2') { v2++ }
        if (number === '3') { v3++ }
        if (number === '4') { v4++ }
        if (number === '5') { v5++ }
        if (number === '6') { v6++ }
        if (number === '7') { v7++ }
        if (number === '8') { v8++ }
        if (number === '9') { v9++ }
        if (number === '10') { v10++ }
        if (number === '11') { v11++ }
        if (number === '12') { v12++ }
        if (number === '13') { v13++ }
        if (number === '14') { v14++ }
        if (number === '15') { v15++ }
        if (number === '16') { v16++ }
        if (number === '17') { v17++ }
        if (number === '18') { v18++ }
    }
    for (let i = 0; i <= 29; i++) {
        number = data4.runs[i].results[0].number;
        if (number === '1') { v1++ }
        if (number === '2') { v2++ }
        if (number === '3') { v3++ }
        if (number === '4') { v4++ }
        if (number === '5') { v5++ }
        if (number === '6') { v6++ }
        if (number === '7') { v7++ }
        if (number === '8') { v8++ }
        if (number === '9') { v9++ }
        if (number === '10') { v10++ }
        if (number === '11') { v11++ }
        if (number === '12') { v12++ }
        if (number === '13') { v13++ }
        if (number === '14') { v14++ }
        if (number === '15') { v15++ }
        if (number === '16') { v16++ }
        if (number === '17') { v17++ }
        if (number === '18') { v18++ }
    }
    for (let i = 0; i <= 29; i++) {
        number = data5.runs[i].results[0].number;
        if (number === '1') { v1++ }
        if (number === '2') { v2++ }
        if (number === '3') { v3++ }
        if (number === '4') { v4++ }
        if (number === '5') { v5++ }
        if (number === '6') { v6++ }
        if (number === '7') { v7++ }
        if (number === '8') { v8++ }
        if (number === '9') { v9++ }
        if (number === '10') { v10++ }
        if (number === '11') { v11++ }
        if (number === '12') { v12++ }
        if (number === '13') { v13++ }
        if (number === '14') { v14++ }
        if (number === '15') { v15++ }
        if (number === '16') { v16++ }
        if (number === '17') { v17++ }
        if (number === '18') { v18++ }
    }
    for (let i = 0; i <= 29; i++) {
        number = data6.runs[i].results[0].number;
        if (number === '1') { v1++ }
        if (number === '2') { v2++ }
        if (number === '3') { v3++ }
        if (number === '4') { v4++ }
        if (number === '5') { v5++ }
        if (number === '6') { v6++ }
        if (number === '7') { v7++ }
        if (number === '8') { v8++ }
        if (number === '9') { v9++ }
        if (number === '10') { v10++ }
        if (number === '11') { v11++ }
        if (number === '12') { v12++ }
        if (number === '13') { v13++ }
        if (number === '14') { v14++ }
        if (number === '15') { v15++ }
        if (number === '16') { v16++ }
        if (number === '17') { v17++ }
        if (number === '18') { v18++ }
    }
    if(v1===0){  ctx.reply("(Фартуна) Число 1 не выпадало 180 раз подряд");}
    if(v2===0){  ctx.reply("(Фартуна) Число 2 не выпадало 180 раз подряд");}
    if(v3===0){  ctx.reply("(Фартуна) Число 3 не выпадало 180 раз подряд");}
    if(v4===0){  ctx.reply("(Фартуна) Число 4 не выпадало 180 раз подряд");}
    if(v5===0){  ctx.reply("(Фартуна) Число 5 не выпадало 180 раз подряд");}
    if(v6===0){  ctx.reply("(Фартуна) Число 6 не выпадало 180 раз подряд");}
    if(v7===0){  ctx.reply("(Фартуна) Число 7 не выпадало 180 раз подряд");}
    if(v8===0){  ctx.reply("(Фартуна) Число 8 не выпадало 180 раз подряд");}
    if(v9===0){  ctx.reply("(Фартуна) Число 9 не выпадало 180 раз подряд");}
    if(v10===0){  ctx.reply("(Фартуна) Число 10 не выпадало 180 раз подряд");}
    if(v11===0){  ctx.reply("(Фартуна) Число 11 не выпадало 180 раз подряд");}
    if(v12===0){  ctx.reply("(Фартуна) Число 12 не выпадало 180 раз подряд");}
    if(v13===0){  ctx.reply("(Фартуна) Число 13 не выпадало 180 раз подряд");}
    if(v14===0){  ctx.reply("(Фартуна) Число 14 не выпадало 180 раз подряд");}
    if(v15===0){  ctx.reply("(Фартуна) Число 15 не выпадало 180 раз подряд");}
    if(v16===0){  ctx.reply("(Фартуна) Число 16 не выпадало 180 раз подряд");}
    if(v17===0){  ctx.reply("(Фартуна) Число 17 не выпадало 180 раз подряд");}
    if(v18===0){  ctx.reply("(Фартуна) Число 18 не выпадало 180 раз подряд");}
}
            }
            catch (err) {
                console.log(err)
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
                for (let i = 0; i <= 19; i++) {
                    colors = data.items.results[i].results[0].color
                    if (colors === 'grey') { col++ }
                    if (colors === 'black') { col2++ }
                    if (colors === 'red') { col3++ }
                }
                if (col === 0) {
                    ctx.reply("(Фартуна) Серого цвета не было 20 раз");
                }
                if (col2 === 0) {
                    ctx.reply("(Фартуна) Чёрного цвета не было 20 раз");
                }
                if (col3 === 0) {
                    ctx.reply("(Фартуна) Красного цвета не было 20 раз");
                }
          
                var green5=0,black5=0,red5=0;
                for (let i = 0; i <= 4; i++) {
                    colors = data.items.results[i].results[0].color
                    if (colors === 'grey') { green5++ }
                    if (colors === 'black') { black5++ }
                    if (colors === 'red') { red5++ }
                }
                if (green5 === 5) {
                    ctx.reply("(Фартуна) Серый цвет был 5 раз подряд");
                }
                if (black5 === 5) {
                    ctx.reply("(Фартуна) Чёрный цвет был 5 раз подряд");
                }
                if (red5 === 5) {
                    ctx.reply("(Фартуна) Красный цвет был 5 раз подряд");
                }
                var num16=0,num712 = 0, num1318;
                for (let i = 0; i <= 4; i++) {
                    number = data.items.results[i].results[0].number
                    if (number === '1'||number === '2'||number === '3'||number === '4' || number === '5' || number === '6') { num16++ }
                    if (number === '7'||number === '8'||number === '9'||number === '10' || number === '11' || number === '12') { num712++ }
                    if (number === '13'||number === '14'||number === '15'||number === '16' || number === '17' || number === '18') { num1318++ }
                }
                if (num16 === 5) {
                    ctx.reply("(Фартуна) Числа 1-6 выпали 5 раз подряд");
                }
                if (num712 === 5) {
                    ctx.reply("(Фартуна) Числа 7-12 выпали 5 раз подряд");
                }
                if (num1318 === 5) {
                    ctx.reply("(Фартуна) Числа 13-18 выпали 5 раз подряд");
                }
                var not1=0,not2=0,not3=0;
                for (let i = 0; i <= 14; i++) {
                    number = data.items.results[i].results[0].number
                    if (number === '1'||number === '2'||number === '3'||number === '4' || number === '5' || number === '6') { not1++ }
                    if (number === '7'||number === '8'||number === '9'||number === '10' || number === '11' || number === '12') { not2++ }
                    if (number === '13'||number === '14'||number === '15'||number === '16' || number === '17' || number === '18') { not3++ }
                }
                if (not1 === 0) {
                    ctx.reply("(Фартуна) Числа 1-6 не выпадали 15 раз подряд");
                }
                if (num712 === 0) {
                    ctx.reply("(Фартуна) Числа 7-12 не выпадали 15 раз подряд");
                }
                if (num1318 === 0) {
                    ctx.reply("(Фартуна) Числа 13-18 не выпадали 15 раз подряд");
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        async function fartunalong(){
            try {
                var now = new Date();
                var date= (now.getMonth()+1) +"-"+now.getDate();
                console.log( date)
        var house = now.getHours();
      console.log(house)
        if (house > 8) {
                var kyb = 0;
                const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/1/")
                const data = await response.json()
                const response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/2/")
                const data2 = await response2.json()
                const response3 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/3/")
                const data3 = await response3.json()
                const response4 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/4/")
                const data4 = await response4.json()
                const response5 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/5/")
                const data5 = await response5.json()
                const response6 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/6/")
                const data6 = await response6.json()
            for (let i = 0; i <= 29; i++) {
                colors = data.items.results[i].results[0].color
                if (colors === 'white') { kyb++ }
            }
            for (let i = 0; i <= 29; i++) {
                colors2 = data2.items.results[i].results[0].color
                if (colors2 === 'white') { kyb++ }
            }
            for (let i = 0; i <= 29; i++) {
                colors3 = data3.items.results[i].results[0].color
                if (colors3 === 'white') { kyb++ }
            }
            for (let i = 0; i <= 29; i++) {
                colors4 = data4.items.results[i].results[0].color
                if (colors4 === 'white') { kyb++ }
            }
            for (let i = 0; i <= 29; i++) {
                colors5 = data5.items.results[i].results[0].color
                if (colors5 === 'white') { kyb++ }
            }
            for (let i = 0; i <= 29; i++) {
                colors6 = data6.items.results[i].results[0].color
                if (colors6 === 'white') { kyb++ }
            }
            if (kyb === 0 ) {
                ctx.reply("(Фартуна) Кубка не было 180 раз");
            }
var v1=0,v2=0,v3=0,v4=0,v5=0,v6=0,v7=0,v8=0,v9=0,v10=0,v11=0,v12=0,v13=0,v14=0,v15=0,v16=0,v17=0,v18=0;
for (let i = 0; i <= 29; i++) {
    number = data.items.results[i].results[0].number
    if (number === '1') { v1++ }
    if (number === '2') { v2++ }
    if (number === '3') { v3++ }
    if (number === '4') { v4++ }
    if (number === '5') { v5++ }
    if (number === '6') { v6++ }
    if (number === '7') { v7++ }
    if (number === '8') { v8++ }
    if (number === '9') { v9++ }
    if (number === '10') { v10++ }
    if (number === '11') { v11++ }
    if (number === '12') { v12++ }
    if (number === '13') { v13++ }
    if (number === '14') { v14++ }
    if (number === '15') { v15++ }
    if (number === '16') { v16++ }
    if (number === '17') { v17++ }
    if (number === '18') { v18++ }
}
for (let i = 0; i <= 29; i++) {
    number = data2.items.results[i].results[0].number
    if (number === '1') { v1++ }
    if (number === '2') { v2++ }
    if (number === '3') { v3++ }
    if (number === '4') { v4++ }
    if (number === '5') { v5++ }
    if (number === '6') { v6++ }
    if (number === '7') { v7++ }
    if (number === '8') { v8++ }
    if (number === '9') { v9++ }
    if (number === '10') { v10++ }
    if (number === '11') { v11++ }
    if (number === '12') { v12++ }
    if (number === '13') { v13++ }
    if (number === '14') { v14++ }
    if (number === '15') { v15++ }
    if (number === '16') { v16++ }
    if (number === '17') { v17++ }
    if (number === '18') { v18++ }
}
for (let i = 0; i <= 29; i++) {
    number = data3.items.results[i].results[0].number
    if (number === '1') { v1++ }
    if (number === '2') { v2++ }
    if (number === '3') { v3++ }
    if (number === '4') { v4++ }
    if (number === '5') { v5++ }
    if (number === '6') { v6++ }
    if (number === '7') { v7++ }
    if (number === '8') { v8++ }
    if (number === '9') { v9++ }
    if (number === '10') { v10++ }
    if (number === '11') { v11++ }
    if (number === '12') { v12++ }
    if (number === '13') { v13++ }
    if (number === '14') { v14++ }
    if (number === '15') { v15++ }
    if (number === '16') { v16++ }
    if (number === '17') { v17++ }
    if (number === '18') { v18++ }
}
for (let i = 0; i <= 29; i++) {
    number = data4.items.results[i].results[0].number
    if (number === '1') { v1++ }
    if (number === '2') { v2++ }
    if (number === '3') { v3++ }
    if (number === '4') { v4++ }
    if (number === '5') { v5++ }
    if (number === '6') { v6++ }
    if (number === '7') { v7++ }
    if (number === '8') { v8++ }
    if (number === '9') { v9++ }
    if (number === '10') { v10++ }
    if (number === '11') { v11++ }
    if (number === '12') { v12++ }
    if (number === '13') { v13++ }
    if (number === '14') { v14++ }
    if (number === '15') { v15++ }
    if (number === '16') { v16++ }
    if (number === '17') { v17++ }
    if (number === '18') { v18++ }
}
for (let i = 0; i <= 29; i++) {
    number = data5.items.results[i].results[0].number
    if (number === '1') { v1++ }
    if (number === '2') { v2++ }
    if (number === '3') { v3++ }
    if (number === '4') { v4++ }
    if (number === '5') { v5++ }
    if (number === '6') { v6++ }
    if (number === '7') { v7++ }
    if (number === '8') { v8++ }
    if (number === '9') { v9++ }
    if (number === '10') { v10++ }
    if (number === '11') { v11++ }
    if (number === '12') { v12++ }
    if (number === '13') { v13++ }
    if (number === '14') { v14++ }
    if (number === '15') { v15++ }
    if (number === '16') { v16++ }
    if (number === '17') { v17++ }
    if (number === '18') { v18++ }
}
for (let i = 0; i <= 29; i++) {
    number = data6.items.results[i].results[0].number
    if (number === '1') { v1++ }
    if (number === '2') { v2++ }
    if (number === '3') { v3++ }
    if (number === '4') { v4++ }
    if (number === '5') { v5++ }
    if (number === '6') { v6++ }
    if (number === '7') { v7++ }
    if (number === '8') { v8++ }
    if (number === '9') { v9++ }
    if (number === '10') { v10++ }
    if (number === '11') { v11++ }
    if (number === '12') { v12++ }
    if (number === '13') { v13++ }
    if (number === '14') { v14++ }
    if (number === '15') { v15++ }
    if (number === '16') { v16++ }
    if (number === '17') { v17++ }
    if (number === '18') { v18++ }
}
if(v1===0){  ctx.reply("(Фартуна) Число 1 не выпадало 180 раз подряд");}
if(v2===0){  ctx.reply("(Фартуна) Число 2 не выпадало 180 раз подряд");}
if(v3===0){  ctx.reply("(Фартуна) Число 3 не выпадало 180 раз подряд");}
if(v4===0){  ctx.reply("(Фартуна) Число 4 не выпадало 180 раз подряд");}
if(v5===0){  ctx.reply("(Фартуна) Число 5 не выпадало 180 раз подряд");}
if(v6===0){  ctx.reply("(Фартуна) Число 6 не выпадало 180 раз подряд");}
if(v7===0){  ctx.reply("(Фартуна) Число 7 не выпадало 180 раз подряд");}
if(v8===0){  ctx.reply("(Фартуна) Число 8 не выпадало 180 раз подряд");}
if(v9===0){  ctx.reply("(Фартуна) Число 9 не выпадало 180 раз подряд");}
if(v10===0){  ctx.reply("(Фартуна) Число 10 не выпадало 180 раз подряд");}
if(v11===0){  ctx.reply("(Фартуна) Число 11 не выпадало 180 раз подряд");}
if(v12===0){  ctx.reply("(Фартуна) Число 12 не выпадало 180 раз подряд");}
if(v13===0){  ctx.reply("(Фартуна) Число 13 не выпадало 180 раз подряд");}
if(v14===0){  ctx.reply("(Фартуна) Число 14 не выпадало 180 раз подряд");}
if(v15===0){  ctx.reply("(Фартуна) Число 15 не выпадало 180 раз подряд");}
if(v16===0){  ctx.reply("(Фартуна) Число 16 не выпадало 180 раз подряд");}
if(v17===0){  ctx.reply("(Фартуна) Число 17 не выпадало 180 раз подряд");}
if(v18===0){  ctx.reply("(Фартуна) Число 18 не выпадало 180 раз подряд");}
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
                let fir = 0;
                for (let i = 0; i <= 12; i++) {
                    score_dealer = data.items.results[i].results.score_dealer
                    score_player = data.items.results[i].results.score_player
    
                    if ((parseInt(score_player, 10) === 11) || (parseInt(score_dealer, 10) === 11) || (parseInt(score_player, 10) === 12) || (parseInt(score_dealer, 10) === 12) ||
                        (parseInt(score_player, 10) === 13) || (parseInt(score_dealer, 10) === 13)) { fir = fir + 1; }
                }
                console.log(fir + ' фигурок')
                if (fir === 0) { ctx.reply('Фигурок не было 13 раздач'); }
                let mast1 = 0;
                let mast2 = 0;
                let mast3 = 0;
                let mast4 = 0;
                for (let i = 0; i < 13; i++) {
                    score_dealer = data.items.results[i].results.card_dealer.suit
                    score_player = data.items.results[i].results.card_player.suit
    
                    if (score_dealer != 'diamonds' && score_player != 'diamonds') { mast1 = mast1 + 1; }
                    if (score_dealer != 'clubs' && score_player != 'clubs') { mast2 = mast2 + 1; }
                    if (score_dealer != 'spades' && score_player != 'spades') { mast3 = mast3 + 1; }
                    if (score_dealer != 'hearts' && score_player != 'hearts') { mast4 = mast4 + 1; }
    
                }
                console.log(mast1 + ' буби не было раздач')
                if (mast1 === 15) { ctx.reply('Буби не было 13 раздач') }
                //diamonds- буби
                //clubs - крести
                //spades - пики
                //hearts - чирва
                //
                if (mast2 === 13) { ctx.reply('Крести не было 13 раздач') }
    
                if (mast3 === 13) { ctx.reply('Пики не было 13 раздач') }
    
                if (mast4 === 13) { ctx.reply('Чирвы не было 13 раздач') }
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
                    ctx.reply('(Битва) Больших кэфов давно не было 30 минут');
                }
    
                for (let i = 0; i <= 29; i++) {
                    score_dealer = data.items.results[i].results.score_dealer
                    score_player = data.items.results[i].results.score_player
                    if ((score_player === "8") || (score_dealer === "8")) {
                        result2 = result2 + 1;
                    }
                }
                var result2222 = 0;
                for (let i = 0; i <= 9; i++) {
                    score_dealer2 = data2.items.results[i].results.score_dealer
                    score_player2 = data2.items.results[i].results.score_player
                    if ((score_player2 === "8") || (score_dealer2 === "8")) {
                        result2222 = result2222 + 1;
                    }
    
                }
    
                if (result2 === 0 && result2222 === 0) {
                    ctx.reply('(Битва) Не было 8 уже 40 раздач');
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
                var result4444 = 0;
                for (let i = 0; i <= 14; i++) {
                    score_dealer4 = data4.items.results[i].results.score_dealer
                    score_player4 = data4.items.results[i].results.score_player
                    if (score_player4 === "8") {
                        result4444 = result4444 + 1;
                    }
    
                }
                if (result44 === 0 && result4 === 0 && result444 === 0 && result4444 === 0) {
                    ctx.reply('(Битва) Не было 8 у игрока уже 105 минут (вертикаль)');
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
                var result5555 = 0;
                for (let i = 0; i <= 14; i++) {
                    score_dealer4 = data4.items.results[i].results.score_dealer
                    score_player4 = data4.items.results[i].results.score_player
                    if (score_dealer4 === "8") {
                        result5555 = result5555 + 1;
                    }
                }
    
                if (result5 === 0 && result55 === 0 && result555 === 0 && result5555 === 0) {
                    ctx.reply('(Битва) Не было 8 у дилера уже 105 минут (вертикаль)');
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
            ctx.reply("Вы запустили Бота на заказ ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
            ctx.reply("Удачи! По всем вопросам пишите @BetgamesTV_Admin");
            ctx.reply('Бот отслежки запущен!')
            global.time = setInterval(request, 40000)
            global.time4 = setInterval(fartuna, 90000)
            global.timer = setInterval(fartunalong, 90000)
            global.time5 = setInterval(fart1win, 90000)
            global.time6 = setInterval(fartunalong1win, 90000)
    
        }
        good()
    }
    )
    bot.hears('/end', async (ctx) => {
        try {
            clearInterval(time);
            clearInterval(time4);
            clearInterval(timer);
            clearInterval(time5);
            clearInterval(time6);
            ctx.reply("Пока");
        } catch (err) {
            ctx.reply("Пока");
        }
    })
    
    bot.launch()
