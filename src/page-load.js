export function pageLoad(){
    const content = document.querySelector('#content');
  

    const About = document.createElement('div');
    About.classList.add('about');
    
    About.innerHTML = "<div class='active'><h1>About</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, officia neque impedit suscipitdolor, mollitia quidem aliquid repellendus ducimus tempora quisquam voluptas laborum non errorarchitecto, temporibus nisi odio excepturi. Lorem ipsum dolor sit amet consectetur, adipisicingelit. Reiciendis repudiandae ut quos, nobis, laboriosam unde neque quod pariatur obcaecati corruptinihil laudantium dolor totam similique repellat id commodi molestiae possimus! Lorem ipsum dolor sitamet consectetur adipisicing elit. Quae sunt, consequuntur, eos dolor blanditiis, iusto cumqueassumenda possimus explicabo alias error accusamus quos quia obcaecati ipsam praesentium magni odioasperiores placeat voluptatibus dolorum? Eveniet ipsam vel autem atque esse minus.</p></div>"
    content.appendChild(About)





}