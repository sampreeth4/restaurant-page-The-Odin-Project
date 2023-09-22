export function menu(){
    
    const content = document.querySelector('#content');
    
    content.replaceChildren();
  

    const menuHead = document.createElement('h1');
    menuHead.classList.add('menuHead');
    menuHead.innerHTML = "<i>Menu</i>"
    content.appendChild(menuHead);

    const menuImgOne = document.createElement('img');
    menuImgOne.classList.add('lobster-thermidor')
    menuImgOne.src = "../f-lobster-thermidor.jpg";
    menuImgOne.alt = "Lobster Thermidor";
    content.appendChild(menuImgOne);

    const ImgoneP = document.createElement('p');
    ImgoneP.classList.add('first');
    ImgoneP.innerHTML = "<p>Lobster Thermidor: The Frech special<p>";
    content.appendChild(ImgoneP);

    const menuImgTwo = document.createElement('img');
    menuImgTwo.classList.add('ratatouille')
    menuImgTwo.src = "../french-ratatouille.jpg";
    menuImgTwo.alt = "Lobster Thermidor";
    content.appendChild(menuImgTwo);

    const ImgtwoP = document.createElement('p');
    ImgtwoP.classList.add('second');
    ImgtwoP.textContent = "French Ratatouille: The Frech special";
    content.appendChild(ImgtwoP)


    const menuImgThree = document.createElement('img');
    menuImgThree.classList.add('french-one')
    menuImgThree.src = "../french1.webp";
    menuImgThree.alt = "random dish";
    content.appendChild(menuImgThree);

    const ImgthreeP = document.createElement('p');
    ImgthreeP.classList.add('third');
    ImgthreeP.textContent = "French Ratatouille: The Frech special";
    content.appendChild(ImgthreeP)
    


}