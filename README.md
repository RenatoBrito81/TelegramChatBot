<h1 align="center">TelegramChatBot</h1>

<div align="center">Exemplo de integração da API do Telegram, DialogFlow, Youtube e dotenv.</div>

### Dependências
- API do Telegram = node-telegram-bot-api
- API do DialogFlow = dialogflow
- API do Youtube = youtube-node
- API do dotenv = dotenv

### Utilização
Para o código funcionar será necessário fornecer o token de acesso a API do Telegram, Youtube e DialogFlow.
Para isso será necessário fazer efetuar as configurações em cada API.

- API do Telegram = enviei uma mensagem para BotFather com o comando /newbot e siga as instruções. Ao final será informar o token para utilização da API.

- API do DialogFlow = acesse o site dialogflow.cloud.google.com e faça o login ou cadastro para criar o token.

- API do Youtube = acesse o site https://developers.google.com/youtube/v3/quickstart/nodejs para criar as credenciais necessárias para utilização da API clicando em this Wizard no Passo 1.



**Observações:** As informações de tokens e credenciais foram armazenadas em arquivo .env da API dotenv e na falta das mesmas o código não irá funcionar.
