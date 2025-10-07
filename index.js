import http from 'http';

const PORT = process.env.PORT || 3000;

const requestListener = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8',
  });
  res.end(JSON.stringify({ mensaje: 'Hola Mundo' }));
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Servidor de prueba escuchando en http://localhost:${PORT}`);
});
