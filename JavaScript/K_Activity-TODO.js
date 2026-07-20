let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click', function(){
    let item = document.createElement('li');
    item.innerText = inp.value;

    let delbtn = document.createElement('button');
    delbtn.innerText = "delete";
    delbtn.classList.add('delete');


    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
});

//2)ye vala logic kaam kr rha kyunki ye humne parent(ul) pr use kiya aur event bubbling ki vajh se bhi
ul.addEventListener('click', function(e){
    if(e.target.nodeName == 'BUTTON'){
        let listItem = e.target.parentElement;
        listItem.remove();
        console.log('delete');      //now new item can be added and deleted both easily
    }
});
