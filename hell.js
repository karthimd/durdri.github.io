const yes=document.getElementById('yes')
const no=document.getElementById('no')
const img1=document.getElementById('imge')
const img2=document.getElementById('kiruba')
const lie=()=>{
    img1.src="https://media.giphy.com/media/20lpkBb0O569LnXDxI/giphy.gif";
    img1.style.height=150;
    img1.style.width=150;
    setTimeout(()=>{img1.src="https://i.gifer.com/1kLR.gif";},1000);

}
const ikn=()=>{
    img1.src="https://media.giphy.com/media/YyByccGJk5cr2sEb8U/giphy.gif";
    setTimeout(()=>{img1.src="https://i.gifer.com/1kLR.gif";},1000);
    img1.style.height=150;
    img1.style.width=150;

}
const player=()=>{
    document.getElementById('suprise').play()
    img2.src="https://media.giphy.com/media/nig59ZwSKALrP8VSEo/giphy.gif";

}
const pau=()=>{
    document.getElementById('suprise').pause()
    img2.src="https://media.giphy.com/media/0kRnfT1ozWsssc8Kkg/giphy.gif";

}
