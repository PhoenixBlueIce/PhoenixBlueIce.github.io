function goMeme(event) {
    event.preventDefault();
    const result = confirm("那你自己去找吧！");
    if (result) {
        window.open("https://www.google.com", "_blank");
    }
}

function gofriendsite(event) {
    event.preventDefault();
    const result = confirm("那我送你過去吧！");
    if (result) {
        window.open("https://www.facebook.com/aastaneko0820", "_blank");
    }
}

/* 未來可以改成這樣
document.addEventListener("DOMContentLoaded", function () {
    const memeLink = document.querySelector(".meme-link");

    memeLink.addEventListener("click", function (event) {
        event.preventDefault();

    if (confirm("那你自己去找吧！")) {
        window.open("https://www.google.com", "_blank");
    }
    });
});

*/