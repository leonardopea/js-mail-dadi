//punto 1//

let email = ['leonardo@gmail.com','fabrizio@gmail.com', 'dobbyèunelfo@libero.it','leonardo@hotmail.it','aieie@libero.it','nelpaesedellemeraviglie@alice.it','frodo@contea.com','samwise@contea.com']

//punto 2//

let domanda = prompt('qual è la tua email?')

let email_utente = domanda.toLowerCase()

console.log(email_utente)


//punto 3//

let flag= false

for ( let i=0 ; i < email.length ; i++ ) {

    if ( email_utente === email[i] ) {
        flag= true;
    }

}

if ( flag === true) {
    document.getElementById('email').innerHTML=`la email ${email_utente} è valida`;
}

else{
    document.getElementById('email').innerHTML=`la email ${email_utente} non è valida`;
}

