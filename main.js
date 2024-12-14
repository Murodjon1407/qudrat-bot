const userName = prompt("Ismigizni kriting")
const userAge = +prompt("Yoshingizni kriting")
const userMarride = prompt("Uylanganmisiz")

const oquvchilar = {
    ism:userName,
    yosh:userAge,
    uylanganmi:userMarride
}
if(oquvchilar.yosh>=18){
    console.log(`Siz royhatga olindingiz`,oquvchilar);
}else if (userName == "" && userAge == 0){
    alert("Iltimos ismingizni va yoshingizni kriting")
}else{
    alert("siz royhatdan otdingiz")
}
