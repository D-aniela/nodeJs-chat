const app = require('express')()
const http = require('http').createServer(app)
const socketio = require('socket.io')
const io = socketio(http)
const PORT = process.env.PORT || 5050

io.on('connection', (socket) => {
  console.log(socket.id)
  socket.on('create-room', (name) => {
    console.log('The room name received is: ' + name)
  })
})

http.listen(5050, () => {
  console.log(`listening on port ${PORT}`)
})
