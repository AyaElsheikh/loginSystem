let userNameInput= document.getElementById('userNameInput');
let emailInput= document.getElementById('emailInput');
let passwordInput= document.getElementById('passwordInput');
let signUpBtn=document.getElementById('signUpBtn');

let alertMassage=document.getElementById('alertMassage');

let userContainer=[];

if (localStorage.getItem('users') !=null){
    userContainer=JSON.parse( localStorage.getItem('users'));
}


function signUp(){

    let userData={
        userName:userNameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }
if (checkInputs() ==true){
    getAlertMessage('ALL inputs are Required','red')
}
else{

    if(checkEmail()==true){
        getAlertMessage('This emial is already exist','red') 
    }
else{
    userContainer.push(userData);
    localStorage.setItem('users',JSON.stringify(userContainer));
    clear();
    getAlertMessage('Success','green');
    // console.log(userContainer);
}

}

}

function getAlertMessage(text,color){
    alertMassage.classList.replace('d-none','d-block');
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;

}

function clear(){
    userNameInput.value='';  
    emailInput.value='';
    passwordInput.value=''; 
}
function checkInputs(){
    if( userNameInput.value =='' || emailInput.value =='' || passwordInput.value =='' ){
        return true;

    }
    else{
        return false;
    }
}
function checkEmail(){
    for(let i=0; i<userContainer.length ;i++) {
        if(userContainer[i].email == emailInput.value){
            return true;
        }
    }
    
}

signUpBtn.addEventListener('click',signUp)