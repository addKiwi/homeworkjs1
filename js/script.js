let username = "";
while (username===""){
   username=prompt("What is your name ?", username);
}
let age = prompt("How old are you ?", '');
while(isNaN(age)){
    age=prompt("Write your age correct!", age);
}

if (age<18){
    alert("You are not allowed to visit this website");
}else
    if (18<age && age<22) {
    if(confirm("Are you sure you want to continue?")){
        alert("Welcome, "+username);
    }
    else{
    alert("You are not allowed to visit this website");
    }
    } else
    {
    alert("Welcome, "+username);

}
