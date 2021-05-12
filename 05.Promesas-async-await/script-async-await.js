function temporizador(tiempo){
    var promesa=new Promise((resolver, rechazar)=>{
        var temp=setTimeout(()=>{
            //clearTimeout(temp2);
            //resolver("Tiempo concluido");
        },tiempo);
        var temp2=setTimeout(()=>{
            rechazar("El tiempo no va bien");
        },tiempo*2);
    });
    return promesa;
}


async function ejecutarPromesa() {
    try {
        const texto = await temporizador(5000);
        console.log(texto);
        console.log("Xavi");
    } catch (ex) {
        console.log(ex)
    }
}

ejecutarPromesa();