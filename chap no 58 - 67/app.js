/*************** DOM ******************/

var mainContent = document.getElementById("main-content")
for (let i = 0; i < mainContent.childNodes.length; i++) {
    console.log(mainContent.childNodes[i])

}

var renderClass = document.getElementsByClassName("render")
for (let i = 0; i < renderClass.length; i++) {
    document.write(renderClass[i].innerHTML + '<br>')
}

document.getElementById('first-name').value = "Saleem"
document.getElementById('email').value = "salimraza3465@gmail.com"
document.getElementById('last-name').value = "Pirwani"

var formContent = document.getElementById('form-content')
document.write(`<br>Node Type(form-content): ${formContent.nodeType}`)

var lastName = document.getElementById('lastName')
document.write(`<br>Node Type(lastName): ${lastName.nodeType}`)
document.write(`<br>Node Type(lastName>child): ${lastName.firstChild.nodeType}`)

lastName.innerHTML = "Last Name: Abc"

console.log(`first Child(main-content):`)
console.log(mainContent.firstChild)
console.log(`first Child(main-content):`)
console.log(mainContent.lastChild)

console.log(`Previous Sibling(lastName):`)
console.log(lastName.previousSibling)
console.log(`Last Sibling(lastName):`)
console.log(lastName.nextSibling)

var email = document.getElementById('email')
console.log('Parent node(email)')
console.log(email.parentNode)
console.log('Node type(email): ' + email.nodeType)

