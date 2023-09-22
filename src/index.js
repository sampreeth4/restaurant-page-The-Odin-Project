import { pageLoad } from "./page-load"
import {menu} from "./menu.js"
import {contact} from "./contact.js"
// console.log("Check")


pageLoad();
let tabSwich = (function(){
    const homeTab = document.querySelector(".home");
    homeTab.addEventListener('click',pageLoad);

    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener('click',menu);

    const contactTab = document.querySelector(".contact");
    contactTab.addEventListener('click',contact);
})();

