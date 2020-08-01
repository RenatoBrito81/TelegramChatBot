const configuracao = require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const token_telegram = process.env.TOKEN_TELEGRAM || "YOUR TELEGRAM TOKEN";

const dialogFlow = require("./dialogFlow");
const youtube = require("./youtube");


const bot = new TelegramBot(token_telegram, { polling: true });

bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    console.log(msg.text);

    const dialogFlowResponse = await dialogFlow.sendMessage(chatId.toString(), msg.text);
    let  responseText = dialogFlowResponse.text;
    if(dialogFlowResponse.intent === "Treino Específico"){
        responseText = await youtube.searchVideo(responseText, dialogFlowResponse.fields.corpo.stringValue);
    }
    bot.sendMessage(chatId, responseText);
});