 alert("Hello World!");

document.querySelectorAll("button").forEach(b=>{ 
  b.addEventListener("click", ()=>{
console.log(b.innerHTML);
var buttonInnerHTML = b.innerHTML;
let audio;

switch (buttonInnerHTML) {
  case "w":
    audio = new Audio('sounds/tom-1.mp3');
    break;
  case "a":
    audio = new Audio('sounds/tom-2.mp3');
    break;
  case "s":
    audio = new Audio('sounds/tom-3.mp3');
    break;
  case "d":
    audio = new Audio('sounds/tom-4.mp3');
    break;
  case "j":
    audio = new Audio('sounds/crash.mp3');
    break;
  case "k":
    audio = new Audio('sounds/kick-bass.mp3');
    break;
  case "l":
    audio = new Audio('sounds/snare.mp3');
    break;
  default:
    console.log("Unrecognized button");
    return; // หยุดการทำงานถ้าปุ่มไม่ตรงกับตัวเลือกใด ๆ
}

if (audio) audio.play();
});
});
