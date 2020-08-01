const configuracao = require('dotenv').config();
const Youtube = require('youtube-node');

const token_youtube = process.env.TOKEN_YOUTUBE || "YOUR YOUTUBE TOKEN";

const youtube = new Youtube();
youtube.setKey(token_youtube);

function searchVideo(message, queryText){
    return new Promise((resolve, reject) => {
        youtube.search(`Exercicio em casa para ${queryText}`, 2, (error, result) => {
            if(!error){
                const videoIds = result.items.map((item) => item.id.videoId).filter(item => item);
                const youtubeLinks = videoIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`);
                resolve(`${message} ${youtubeLinks.join(", ")}`);
            }
            else{
                reject("Deu erro.");
            }
        });
    });
}

module.exports.searchVideo = searchVideo;