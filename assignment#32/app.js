let current_users = ['yasir', 'ali', 'admin', 'haris', 'hassan'];

let new_users = ['haris', 'ali', 'Dua', 'Kiran', 'Fatima'];

for(let i=0; i<new_users.length; i++){
    if(new_users.includes(current_users[i])){
        console.log('person will need to enter a new username');
    }else{
        console.log('username is available');
    }
}