window.onload = function(){
    const myButton=document.querySelector('#button')
    myButton.addEventListener('click',()=>{
        let username=document.getElementById("id-username").value
        let password=document.getElementById("id-password").value
        //let password2=document.getElementById("id-password2").value //razgleduvav nesto
        let email=document.getElementById("id-email").value

        console.log(`Username: ${username}`)
        console.log(`Password: ${password}`)
        console.log(`Email: ${email}`)
    })
    var passwordComf= function(){
        if(document.getElementById("id-password").value == 
        document.getElementById("id-password2").value){
            document.getElementById("message").style.color="Green"
            document.getElementById("message").innerHTML="Passwords match!"
        }else{
            document.getElementById("message").style.color="Red"
            document.getElementById("message").innerHTML="Passwords do notmatch!"
        }
    }
}