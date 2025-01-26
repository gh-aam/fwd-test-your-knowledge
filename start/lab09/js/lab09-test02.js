const photos = JSON.parse(content);
const parent = document.querySelector("#parent");

for (let ph of photos) {
    let figure = document.createElement("figure");
    
    figure.appendChild(createImage(ph));
    figure.appendChild(createFigCaption(ph));
    parent.appendChild(figure);
}

function createImage(photo) {
    let img = document.createElement("img");
    
    img.setAttribute("src", `images/${photo.filename}`);
    img.setAttribute("alt", `${photo.title}`);
    
    return img;
}

function createFigCaption(photo) {
    let figcaption = document.createElement("figcaption");
    
    figcaption.appendChild(createHeader(photo));
    figcaption.appendChild(createParagraph(photo));
    createColorScheme(figcaption, photo);
    
    return figcaption;
}

function createHeader(photo) {
    let h2 = document.createElement("h2");
    let h2Text = document.createTextNode(photo.title);
    
    h2.appendChild(h2Text);
    
    return h2;
}

function createParagraph(photo) {
    let p = document.createElement("p");
    let pText = document.createTextNode(photo.description);
    
    p.appendChild(pText);
    
    return p;
}

function createColorScheme(figcaption, photo) {
    for (let c of photo.colors) {
        let span = document.createElement("span");
        
        span.style.backgroundColor = c.hex;
        figcaption.appendChild(span);
    }
}