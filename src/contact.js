export function contact(){
    const contentDiv = document.querySelector("#content");
    content.replaceChildren();


    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contactDiv');
    contactDiv.innerHTML = "<h2>Phone Number: 22222222222</h2> <h2>Gmail: mail@gmail.com<h/2> <h2>Location: Eiffel Tower</h2>";


    contentDiv.appendChild(contactDiv)

    
}