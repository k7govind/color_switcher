const button = document.getElementById('mybutton');

button.addEventListener('click',()=>{
    const bgcolorDiv = document.getElementById('bgcolor');
    //let colorArr = ['blue','red','pink','lime','hotpink','green','yellow','violet'];
    //let chosenColor = colorArr[Math.floor(Math.random()  * colorArr.length)];
    let chosenColor = 'RGB('+Math.floor(Math.random() * 255)+','+Math.floor(Math.random() * 255)+','+Math.floor(Math.random() * 255)+')';
    bgcolorDiv.innerText = 'Background Color: '+ chosenColor.toUpperCase();
    bgcolorDiv.style.backgroundColor = 'white';
    bgcolorDiv.style.border = 'black';
    bgcolorDiv.style.borderStyle = 'solid';
    document.body.style.backgroundColor = chosenColor;
});