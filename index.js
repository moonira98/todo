let inputBox = document.getElementById('input-box')
let listContainer = document.getElementById('list-container')
 
function addButton () {
    if (inputBox === ' ') {
        alert('where is your todo')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value 
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = 'delete'
        li.appendChild(span)
    }
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    } else if (e.target.tagName === 'SPAN') {
                e.target.parentElement.remove()
    }
})