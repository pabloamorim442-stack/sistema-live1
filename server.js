const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir os arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Rota para disparar o vídeo na live
app.post('/disparar-video', (req, res) => {
    // Envia o aviso via WebSocket para o OBS tocar o vídeo "meu_video.mp4"
    io.emit('tocar-video', '/meu_video.mp4');
    res.send({ status: 'sucesso', message: 'Vídeo enviado para a Live!' });
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});