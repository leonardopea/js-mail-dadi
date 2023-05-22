
let dado_uno = Math.round(Math.random() * 5) +1 ;


document.getElementById('dado_uno').innerHTML=`il tuo numero è ${dado_uno}`;


let dado_due = Math.round(Math.random() * 5) +1 ;


document.getElementById('dado_due').innerHTML=`il numero del computer è ${dado_due}`;

if (dado_uno > dado_due){
    document.getElementById('risultato').innerHTML=`HAI VINTO`;
}
else if (dado_uno < dado_due){
    document.getElementById('risultato').innerHTML=`HAI PERSO`;
    }
    else{
        document.getElementById('risultato').innerHTML=`PATTA`;
    }


