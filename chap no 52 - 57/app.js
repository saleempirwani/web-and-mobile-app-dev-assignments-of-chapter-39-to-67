/*************** MODAL ******************/

var img_arr = []
for (let i = 1; i <= 15; i++) {
    img_arr.push(`images/${i}.jpg`)
}

var modal = document.getElementById('modal')

img_arr.map(function (img, index) {
    var imgNode = document.createElement('img')

    var imgSrcAtt = document.createAttribute('src')
    imgSrcAtt.value = img
    imgNode.setAttributeNode(imgSrcAtt)

    var imgOnclickAtt = document.createAttribute('onclick')
    imgOnclickAtt.value = `onOpenImagModal(${index})`
    imgNode.setAttributeNode(imgOnclickAtt)

    var imgIdAtt = document.createAttribute('id')
    imgIdAtt.value = `modal${index}`
    imgNode.setAttributeNode(imgIdAtt)

    modal.appendChild(imgNode)
})


function onOpenImagModal(index) {

    var modal = document.getElementById('modal' + index)

    modal.classList.add('modal-open')
    modal.classList.remove('modal-close')
    modal.style.display = "block"

    onClosedImagModal(index)
}

function onClosedImagModal(index) {

    var modal = document.getElementById('modal' + index)

    modal.classList.add('modal-close')
    modal.classList.remove('modal-open')

    setTimeout(() => { modal.style.display = "none"; }, 550)
}