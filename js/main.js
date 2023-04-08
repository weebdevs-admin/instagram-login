let inputUsername = document.querySelector('.username')
let inputPassword = document.querySelector('.password')
let btn = document.querySelector('.btn')
fetch('https://64319561d4518cfb0e64cab1.mockapi.io/data',)
.then((res)=>res.json())
.then(data=>{
    console.log(data);
})

btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('ok',inputUsername.value);
    fetch('https://64319561d4518cfb0e64cab1.mockapi.io/data',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: inputUsername.value,
            password: inputPassword.value
        })
      
    
        
    })
    inputUsername.value=""
    inputPassword.value=""

    
})


