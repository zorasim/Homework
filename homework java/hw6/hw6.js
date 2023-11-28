window.onload = function(){
    const myButton=document.querySelector('#button')
    myButton.addEventListener('click',()=>{
        let username=document.getElementById("id-username").value
        let password=document.getElementById("id-password").value
        //let password2=document.getElementById("id-password2").value //razgleduvav nesto
        let email=document.getElementById("id-email").value

        console.log('Username: ${username}')
        console.log('Password: ${password}')
        console.log('Email: ${email}')
    })
}