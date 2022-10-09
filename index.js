
const TelegramBotApi = require('node-telegram-bot-api');


const token = '5721139822:AAE7cvsWVdw4lhSr_oxXtabrZczZ5UMusP8';


const bot = new TelegramBotApi(token, {polling: true});





const chat = {}

const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard:[
            [{text: `first`, callback_data: `sad`}],
            [{text: `first`, callback_data: `sad`}],
            [{text: `first`, callback_data: `sad`}],
            [{text: `first`, callback_data: `sad`}]
        ]
    })
}


const start = () =>{
    
bot.setMyCommands([
    {command: `/start`, description: `lorem`},
    {command: `/about`, description: `asdasdasdsdsada`},
    {command: `/buttons`, description: `asasdg`},
]),


bot.on('message', async msg =>{
    const text = msg.text;
    const chatId = msg.chat.id;
    if(text === '/start'){
        await bot.sendSticker(chatId, 'https://tgram.ru/wiki/stickers/img/mrblob_anim/gif/8.gif')
        return bot.sendMessage(chatId, `you write me ${text}`)
    }
    if(text === '/about'){
        return bot.sendMessage(chatId, `your names is ${msg.from.first_name}, username is ${msg.from.username}`)
    }
    if(text === '/buttons'){
        return bot.sendMessage(chatId, `asdsafasdf` ,gameOptions)
    }

    return bot.sendMessage(chatId, `I do not understand you`)
})


bot.on(`callback_query`, msg = () =>{
    const data = msg.data;
    const chatId = msg.message.chat.id;
    console.log(msg)
})


}





start()