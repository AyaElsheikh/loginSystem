let welcomeMassage =document.getElementById('welcomeMassage');
let logOutBtn =document.getElementById('logOutBtn')




if (localStorage.getItem('username') !=null){
    welcomeMassage.innerHTML=`welcome ${localStorage.getItem('username')}`
}

function logOut(){
    window.location.href='index.html'
    localStorage.removeItem('username')

}
logOutBtn.addEventListener('click',logOut)
