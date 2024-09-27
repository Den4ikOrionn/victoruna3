console.clear();

const q = [
 "З якого матеріалу була створена перша «мишка»?",
 "Назва якої всесвітньо відомої корпорації виникла внаслідок орфографічної помилки?", 
 "Який оператор використовується для визначення умов у мовах програмування?",
 "Яка структура даних зазвичай використовується для зберігання пар ключ-значення?",
 "Який тип циклу виконує інструкції, поки умова є істинною?",
 "Яка функція в Python використовується для виведення тексту на екран?",
 "Який ключовий словник в JavaScript використовується для оголошення змінних?",
 "Який тип даних зазвичай використовується для зберігання дійсних чисел?"
];

const a = [
  "wood",
  "google",
  "if",
  "dictionary",
  "while",
  "Print",
  "let",
  "float"
];

const qq = document.querySelector(".q")
const aa = document.querySelector(".a")

console.log(qq)
console.log(aa)
let randomWordLength = 0
let zm = 0

function round(){
  const random = Math.trunc(Math.random()*8);
 randomWordLength= a[random].length;
  
  
  
qq.textContent = q[random]

for(let i = 0; i < a[random].length; i++){
  const el = document.createElement("p")
  aa.appendChild(el)
}
  
let kvadra = document.querySelectorAll("p")

if (kvadra.length > randomWordLength){
 
 for(let i = 0; i < kvadra.length - randomWordLength; i++){
  kvadra[i].style.display="none"
}

  
}
const letters = document.querySelectorAll(".letter")
for (let letter = 0; letter < letters.length; letter++){
    letters[letter].addEventListener("click" , function(){
    for(let k=0;k<a[random].length;k++){
  
      if (a[random][k] == this.textContent){
    kvadra[k+zm].textContent = this.textContent
    if(Array.from(kvadra).every(item => item.textContent != ""))
{
     zm+=randomWordLength
     round()
  
}
    
}
}
}) 
}
}
round()
