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

//with Promises
console.log('');
console.log('Before');
// getUser(1,(user)=>{
// console.log('User',user);
// getRepositories(user.username,function(repoArray){
// console.log(repoArray);
// });
// });


getUser(1)
         .then(user=> getRepositories(user.username))
         .then(repo=> console.log(repo));

         console.log('After');

function getUser(id){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Reading a user from a database');
        resolve({id:id, username:'apoorva'});
    }
    ,2000);
});
}


function getRepositories(username){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Reading a user from a database');
        resolve(['repo1','repo2','repo3']);
    }
    ,2000);
});
}