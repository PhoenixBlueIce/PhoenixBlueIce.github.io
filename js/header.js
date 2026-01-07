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