const configuracao = require('dotenv').config();

const dialogFlow = require('dialogflow');

const projectIdDialogFLow = process.env.PROJECT_ID_DIALOGFLOW || "YOUR PROJECT ID OF DIALOG FLOW";
const privateKeyDialogFlow = process.env.PRIVATE_KEY_DIALOGFLOW || "YOUR PRIVATE KEY OF DIALOG FLOW";
const emailDialogFlow = process.env.EMAIL_DIALOGFLOW || "YOUR EMAIL OF DIALOGFLOW";

const sessionClient = new dialogFlow.SessionsClient({
    projectId: projectIdDialogFLow,
    credentials: {
        private_key: privateKeyDialogFlow,
        client_email: emailDialogFlow
    }
});

async function sendMessage(chatId, message){
    const sessionPath = sessionClient.sessionPath(projectIdDialogFLow, chatId);
    const request = {
        session: sessionPath,
        queryInput: {
            text:{
                text: message,
                languageCode: 'pt-BR'
            }
        }
    }

    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;

    return {
        text: result.fulfillmentText,
        intent: result.intent.displayName,
        fields: result.parameters.fields
    };
}

module.exports.sendMessage = sendMessage;