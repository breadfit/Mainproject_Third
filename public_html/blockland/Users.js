class Users {
    constructor(UserNiCK){
        const userList = document.getElementById('users');
        const socket = io.connect();
        var users;
        const usernick = UserNiCK;
        $('#name').val(usernick);

        $('.chat').on('click', function(e){ //2
            socket.emit('send message', $('#name').val(), $('#message_send').val());
            $('#message_send').val('');
            $('#message_send').focus();
            e.preventDefault();
          });

        socket.on('receive message', function(msg){
            $('#chatLog').append(msg+'\n');
            $('#chatLog').scrollTop($('#chatLog')[0].scrollHeight);
        });

        socket.on('setId', function (data) {
            console.log('들고와진다' + data.id);

            socket.emit('nickdata', {nick: usernick, id: data.id});
		});

        socket.on('nicksave', (data)=>{
             userList.innerHTML = `
             ${data.map(data => `<br>${data.nick}`).join('')}`
              users = data;
        })
        socket.on('deleteData', (data) => {
            userList.innerHTML = `
            ${data.map(data => `<br>${data.nick}`).join('')}`  
        })
    }
}
