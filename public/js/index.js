var socket = io();
socket.on('connect', () => {
  console.log('connected to server');
});
var socket = io();
socket.on('disconnect', () => {
  console.log('disconnected from server');
});
socket.on('newMessage', function(message){
	console.log('new Message', message);
	var li = jQuery('<li></li>')
	li.text(`${message.from}: ${message.text}`);
	jQuery('#message').append(li);
});

jQuery('#message-form').on('submit', function(e) {
	e.preventDefault();
	socket.emit('createMessage', {
		from: 'User',
		text:jQuery('[name=message]').val()
	}, function() {

	})
});