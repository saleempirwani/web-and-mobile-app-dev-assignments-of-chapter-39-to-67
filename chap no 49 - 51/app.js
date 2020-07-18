/*************** EVENT ******************/

// Task: 1

function OnSubmit() {
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var pwd = document.getElementById('pwd')

    showData = `Name: ${name.value} <br> Email: ${email.value} <br> Password: ${pwd.value}`
    document.getElementById('para').innerHTML = showData
}


// Task: 2
function onReadMore() {
    var text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam odio, enim impedit inventore optio harumillo alias libero quos expedita dolorem maxime perspiciatis veritatis voluptatum in labore magnam quod qui! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam odio, enim impedit inventore optio harum illo alias libero quos expedita dolorem maxime perspiciatis veritatis voluptatum in labore magnam quod qui!`
    document.getElementById('item').innerHTML = text
}


// Task: 3
var mainArr = []
var arr = []

function onSubmit() {
    var name = document.getElementById('name1')
    var email = document.getElementById('email1')
    var pwd = document.getElementById('pwd1')

    arr.push(name.value, email.value, pwd.value)
    mainArr.push(arr)
    arr = []

    console.log(mainArr)

    addRemoveAllElement()

    mainArr.map(function (list, index) {

        var table = document.getElementById('table')

        var tr = document.createElement('tr')

        var td = document.createElement('td')
        var tdText = document.createTextNode(index)
        td.appendChild(tdText)
        tr.appendChild(td)

        var td0 = document.createElement('td')
        var tdText0 = document.createTextNode(list[0])
        td0.appendChild(tdText0)
        tr.appendChild(td0)

        var td1 = document.createElement('td')
        var tdText1 = document.createTextNode(list[1])
        td1.appendChild(tdText1)
        tr.appendChild(td1)

        var td2 = document.createElement('td')
        var tdText2 = document.createTextNode(list[2])
        td2.appendChild(tdText2)
        tr.appendChild(td2)

        var delBtn = document.createElement('button')

        var delBtnAtt = document.createAttribute(`onclick`)
        delBtnAtt.value = `onDel(${index})`
        delBtn.setAttributeNode(delBtnAtt)

        var delBtnText = document.createTextNode('Delete')
        delBtn.appendChild(delBtnText)

        var td3 = document.createElement('td')
        td3.appendChild(delBtn)
        tr.appendChild(td3)

        table.appendChild(tr)
    })
}

function onDel(index) {

    var table = document.getElementById('table')

    for (let i = 0; i < table.childNodes.length; i++) {
        if (index + "" === table.childNodes[i].firstChild.innerHTML) {
            table.removeChild(table.childNodes[i])
        }
    }

    mainArr.splice(index, 1)
    // console.log(mainArr)
}

function addRemoveAllElement() {

    var table = document.getElementById('table')
    while (table.hasChildNodes()) {
        table.removeChild(table.lastChild)
    }

    var tr = document.createElement('tr')

    var td0 = document.createElement('td')
    var tdText0 = document.createTextNode('Index')
    td0.appendChild(tdText0)
    tr.appendChild(td0)

    var td1 = document.createElement('td')
    var tdText1 = document.createTextNode('Name')
    td1.appendChild(tdText1)
    tr.appendChild(td1)

    var td2 = document.createElement('td')
    var tdText2 = document.createTextNode('Email')
    td2.appendChild(tdText2)
    tr.appendChild(td2)

    var td3 = document.createElement('td')
    var tdText3 = document.createTextNode('Password')
    td3.appendChild(tdText3)
    tr.appendChild(td3)

    table.appendChild(tr)
}

