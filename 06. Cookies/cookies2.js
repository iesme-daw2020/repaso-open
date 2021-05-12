const contigutCookie = document.cookie
console.log(contigutCookie);

const arrayCookie = document.cookie.split(';');
console.log(arrayCookie);

let cookieCognom = '';
let email = '';
for (const cookie of arrayCookie) {
    const [variable,valor] = cookie.split('=');
    if (variable.trim() == 'cognom') {
        cookieCognom = valor.trim();
    }
    if (variable.trim() == 'email') {
        email = valor.trim();
    }
}


document.write(cookieCognom + ' amb email = ' + email);