//let button1= document.querySelector(".button1");
let button2 = document.querySelector(".button2");

let Tuk = document.querySelector(".Tuk");
let Mushu = document.querySelector(".Mushu");
let Pascal = document.querySelector(".Pascal");
let Sebastian = document.querySelector(".Sebastian");
let results = document.querySelector(".result");

// button1.onclick = function() {
// 
// console.log(question1);
// question1.innerHTML = (button1); };

button2.onclick = function() {
    let question1 = document.querySelector(".question1").value;
    let question2 = document.querySelector(".question2").value;
    console.log(question2);
    // question2.innerHTML = (button2); 

    if (question1 === "Many Friends" && question2 === "Captain America") {
        results.style.display = "block";
        Tuk.style.display="block";
        results.innerHTML = "Tuk";
        results.innerHTML = "Your Disney Sidekick is"  + " " + "Tuk Tuk"  ;
    } else if (question1 === "Many Friends" && question2 === "Iron Man") {
    
         results.style.display = "block";
        Sebastian.style.display="block";
        results.innerHTML = "Sebastian";
        results.innerHTML = "Your Disney Sidekick is"  + " " + "Sebastian" ;
    } else if (question1 === "Few Close Friends" && question2 === "Captain America") {
       
         results.style.display = "block";
        Mushu.style.display="block";
        results.innerHTML = "Mushu";
        results.innerHTML = "Your Disney Sidekick is"  + " " + "Mushu"  ;
    } else if (question1 === "Few Close Friends" && question2 === "Iron Man") {
       
         results.style.display = "block";
        Pascal.style.display="block";
        results.innerHTML = "Pascal";
        results.innerHTML = "Your Disney Sidekick is"  + " " + "Pascal"  ;
    }
};