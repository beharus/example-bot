
const TelegramBotApi = require('node-telegram-bot-api');

const fs = require('fs');

const host = `0.0.0.0`

const port = process.env.PORT || 8080;

const token = '5721139822:AAE7cvsWVdw4lhSr_oxXtabrZczZ5UMusP8';


const bot = new TelegramBotApi(token, {polling: true});





const chat = {}

var options = {
  };


const start = () =>{
    
bot.setMyCommands([
    {command: `/start`, description: `Boshlang`},
    {command: `/about`, description: `Botni yatargan inson`},
    {command: `/portfolio`, description: `portfolio`},
]),


bot.on('message', async msg =>{
    const text = msg.text;
    const chatId = msg.chat.id;
    if(text === '/start'){
        await bot.sendSticker(chatId, 'https://chpic.su/_data/stickers/v/ViktKobST/ViktKobST_001.webp')
        return bot.sendMessage(chatId, `Salom ${msg.from.first_name}. \nMen sizga meni yaratgan insonning portfoliosi va o'zi haqida malumot beraman.\nKo'proq malumot uchun "Menu" tugmasini\n \n  -Muallifim haxida bilmoqchi busangiz /about ni bosing.\n  -Portfolio haqida bilmoqchi bulsangiz /portfolio ni bosing`)
    }



    if(text === '/about'){
        return bot.sendMessage(chatId, `Ismi Behruz Eshquvatov. Front-end dasturchisi xisoblanadi. 2007 yil 19-chi aprelda tug'ilgan.\nU bilgan dasturlash tillari:\n      -Html5\n      -Css3\n      -Sass\n      -Bootstrap(4,5)\n      -Javascript\n      -Git\nPasdagi malumotlar ham kerak bo'lishi mumkin⬇️`,{
            reply_markup: JSON.stringify({
              inline_keyboard: [
                [{ text: 'Portfolioga o`tish', callback_data: `a`},{ text: 'Yashash joyi', callback_data: 'Uzbekiston, Surxondaryo viloyati, Jarqo`rg`on tumani' }],
                [{ text: 'Bog`lanish', callback_data: '3' }]
              ]
            })
            
        })
    }
    if(text === '/portfolio'){
        await bot.sendSticker(msg.chat.id, 'https://i.gifer.com/HMLa.gif');
        await bot.sendMessage(chatId, `Qilgan ishlari:`);
        return bot.sendMessage(chatId, `Portfolio-page`,{
            reply_markup: JSON.stringify({
              inline_keyboard: [
                [{ text: 'Saytga o`tish', url: `https://portfolio2007.netlify.app/`},{ text: 'ZIP qilib yuklash', callback_data: 'Uzbekiston' }],
              ]
            })
            
        })
    }





    return bot.sendMessage(chatId, `I do not understand you`)
})


}

bot.on(`callback_query`, async msg =>{
    const data = msg.data;
    const chatId = msg.message.chat.id;

    await bot.sendMessage(chatId, `siz ${data}`)
    console.log(msg)
})



start()