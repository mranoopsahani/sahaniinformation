// this will trim the text
const excerpt = document.getElementById("excerpt");
const excerptText = excerpt.innerText;
const readMoreBtn = document.getElementById("readMoreBtn");
let trimmedText;

// customize the text limit here
if(excerptText.length > 90) {
    trimText(90);
}

function trimText(limit) {
    excerpt.innerHTML = "";
    trimmedText = '${excerptText.substr(0, limit)}<span>....</span>';
    excerpt.innerHTML = trimmedText;
    readMoreBtn.style.display = "block";
}

function readMore(){
    fullText = '${excerptText}<a href="#" onclick="trimText(90)" id="showLess">Minimize 👆</a>';
    excerpt.innerHTML = fullText;
    readMoreBtn.style.display = "none";
}