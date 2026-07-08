// let smallImgs = document.getElementsByClassName("oldImg");
// for(let i=0; i<smallImgs.length; i++){
//     console.dir(smallImgs[i]);
//     console.dir(smallImgs[i].src);
// }

// let smallImgs = document.getElementsByClassName("oldImg");
// for(let i=0; i<smallImgs.length; i++){
//     smallImgs[i].src = "spiderman_img.png";
//     console.log(`value of image no. ${i} is changed`);
// }

console.dir(document.querySelector('h1'));

console.dir(document.querySelector('#description'));

console.dir(document.querySelector('.oldImg'));

console.dir(document.querySelector('div a'));
console.dir(document.querySelectorAll('div a'));


//obj.style
let links = document.querySelectorAll('.box a');
for(link of links){
    link.style.color = 'green';
}

// let links = document.querySelectorAll('.box a');
// for(let i=0; i<links.length; i++)
// {
//     links[i].style.color = 'green';
// }
