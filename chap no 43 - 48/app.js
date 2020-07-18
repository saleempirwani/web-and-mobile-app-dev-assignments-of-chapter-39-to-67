/*************** Event ******************/

// Task: 3

function delRecord(index) {
    table = document.getElementById("table").firstChild
    for (let i = 0; i < table.childNodes.length; i++) {
        if (table.childNodes[i].firstChild.innerHTML === index + "") {
            table.removeChild(table.childNodes[i])
            break
        }
    }
}

// Task: 4

function changePic(event) {
    img = document.getElementById('img')
    if (event === 'over')
        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLjPt25CyeYD9cGIEHTMm5jHdxtqhk7SacPg&usqp=CAU'
    else
        img.src = 'https://i.pinimg.com/736x/5f/f0/7e/5ff07eaebaf9ac89b3f49de4bf66739f.jpg'
}

// Task: 5
var count = 0
var counter = document.getElementById('counter')
function inc(){
    count += 1
    counter.innerHTML = count
}
function dec(){
    count -= 1
    counter.innerHTML = count
}