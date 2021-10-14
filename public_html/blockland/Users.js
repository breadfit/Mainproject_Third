class Users{
    constructor(UserNiCK){
       
        const userList = document.getElementById('users');
        const socket = io.connect();
        var users;

        // const users = [];
        // var userid;
        const usernick = UserNiCK;

        socket.on('setId', function (data) {
            //userid = data.id;
            console.log('들고와진다' + data.id);

           socket.emit('nickdata', {nick: usernick, id: data.id});
		});

        socket.on('nicksave', (data)=>{
             userList.innerHTML = `
             ${data.map(data => `<br>${data.nick}`).join(',')}`
              users = data;
            // users.push(user)
            
            console.log("배열확인", users);
        })

        socket.on('deleteData', (delid) => {
            for (let i = 0; i < users.length; i++) {
                if (users[i].id == delid.id) {
                    console.log("탈퇴유저:", users[i].id);
                    users.splice(i, 1)
                }
            }
        })
    }

    

// userJoin(id, usernick){

//     const user = {id, usernick};

//     users.push(user);
    

//     return user;
// }

// getCurrentUser(id){
//     return users.find(user => user.id === id);
// }

// userLeave(id){
//     const index = users.findIndex(user => user.id === id);

//     if(index !== -1){
//         return users.splice(index , 1)[0];
        
//     }
// }



}


// module.exports = {
//     userJoin,
//     getCurrentUser,
//     userLeave
// }