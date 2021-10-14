class Users {
    constructor(UserNiCK){
        const userList = document.getElementById('users');
        const socket = io.connect();
        var users;
        const usernick = UserNiCK;
        socket.on('setId', function (data) {
            console.log('들고와진다' + data.id);

            socket.emit('nickdata', {nick: usernick, id: data.id});
		});

        socket.on('nicksave', (data)=>{
             userList.innerHTML = `
             ${data.map(data => `<br>${data.nick}`).join(',')}`
              users = data;
        })
        socket.on('deleteData', (data) => {
            userList.innerHTML = `
            ${data.map(data => `<br>${data.nick}`).join(',')}`  
        })
    }
}
