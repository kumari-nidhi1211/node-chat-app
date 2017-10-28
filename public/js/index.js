var socket = io();
socket.on('connect', () => {
  console.log('connected to server');

  socket.emit('createMessage', {
  	to: 'farhan',
  	text: 'Hey this is nidhi'
  });
});
var socket = io();
socket.on('disconnect', () => {
  console.log('disconnected from server');
});
socket.on('newMessage', function(message){
	console.log('new Message', message);
});