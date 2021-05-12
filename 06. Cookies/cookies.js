const hoy = new Date();
const caducidadMs = hoy.getTime() + (1000 * 60 * 60 * 24) ;
const fechaExpircion = new Date(caducidadMs);

document.cookie="email=xavi@email.com;expires=" + fechaExpircion;
document.cookie="nom=Xavi;expires=" + fechaExpircion;
document.cookie="cognom=Martinez;expires=" + fechaExpircion;


setCookie('email', 'xavi@email.com', 1);
const email = getCookie('email');