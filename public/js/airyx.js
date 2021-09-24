function bodycontent(page) {
    fetch(page)
    .then(x => x.text())
    .then(y => document.getElementById("bodydiv").innerHTML = y);
}
