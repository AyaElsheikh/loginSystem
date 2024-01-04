let emailLoginInput=document.getElementById('emailLoginInput');
let passwordLoginInput=document.getElementById('passwordLoginInput');
let loginBtn=document.getElementById('loginBtn');
let alertMassage =document.getElementById('alertMassage')
let userContainer=[];

if (localStorage.getItem('users') !=null)
{
    userContainer=JSON.parse(localStorage.getItem('users'));
}
function logIn(){

    if (checkInputs() ==true){
        getAlertMessage('ALL inputs are Required','red')
    }
    else{
    
  if (checkEmailPassword() == true)
  {
window.location.href='home.html'
  }
  else{
    getAlertMessage('Email or Password notcorrect','red')
  }
}
}
loginBtn.addEventListener('click',logIn);

function checkEmailPassword(){
    for(let index=0; index<userContainer.length ;index++) {
        if(userContainer[index].email == emailLoginInput.value && userContainer[index].password== passwordLoginInput.value ){
            localStorage.setItem('username',userContainer[index].userName)
            return true;
        }
    }
    
}


function getAlertMessage(text,color){
    alertMassage.classList.replace('d-none','d-block');
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;

}
function checkInputs(){
    if( emailLoginInput.value =='' || passwordLoginInput.value =='' ){
        return true;

    }
    else{
        return false;
    }
}