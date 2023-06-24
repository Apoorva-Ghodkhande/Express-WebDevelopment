//without Arrow function
// console.log('Before');
// getUser(1,function(user){
// console.log('User',user);
// });
// console.log('After');


// function getUser(id,callback){
//     setTimeout(()=>{
//         console.log('Reading a user from a database');
//         callback({id:id, username:'apoorva'});
//     }
//     ,2000);
// }

//with Arrow function
console.log('');
console.log('Before');
getUser(1,(user)=>{
console.log('User',user);
getRepositories(user.username,function(repoArray){
console.log(repoArray);
});
});
console.log('After');


function getUser(id,callback){
    setTimeout(()=>{
        console.log('Reading a user from a database');
        callback({id:id, username:'apoorva'});
    }
    ,2000);
}


function getRepositories(username,callback){
    setTimeout(()=>{
        console.log('Reading a user from a database');
        callback(['repo1','repo2','repo3']);
    }
    ,2000);
}
