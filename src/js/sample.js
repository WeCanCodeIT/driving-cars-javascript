const title = document.querySelector('#title');


const changeTextToFooBar = function (element) {
    element.addEventListener('click', (thisEvent) => {
        console.log(thisEvent.target)
        thisEvent.target.innerText = "FooBar"
    })
}

changeTextToFooBar(title)
document.querySelectorAll("a").forEach(element => {
    changeTextToFooBar(element);
})