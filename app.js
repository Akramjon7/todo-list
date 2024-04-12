const form = document.querySelector('.form')
const inputEl = document.querySelector('.input')
const list = document.querySelector('.list')
const notif = document.querySelector('.notif')
const bgModal = document.querySelector('.bg-modal')
const closeModalEl = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')
const form2 = document.querySelector('.form2')
const input2 = document.querySelector('.input2')
let storage = JSON.parse(localStorage.getItem('spiska')) ? JSON.parse(localStorage.getItem('spiska')) : []
list.innerHTML = storage
inputEl.focus()

function makeLi(par) {
      return `
      <p class="description">${par}</p>
      <button class="change">
            <i class="fa-solid fa-pen"></i>
      </button>
      <button class="done">
            <i class="fa-solid fa-check"></i>
      </button>
      <button class="delete">
            <i class="fa-solid fa-trash"></i>
      </button>
      `
}

form.addEventListener('submit', (e) => {
      e.preventDefault()
      let input = form.input.value.trim()
      if (input) {
            let li = document.createElement('li')
            li.classList.add('list__item')
            li.innerHTML = makeLi(input)
            list.append(li)
            localStorage.setItem('spiska', JSON.stringify(list.innerHTML))
      } else {
            alert('please enter a task')
      }
      form.reset()
})

document.addEventListener('click', (e) => {
      if (e.target.classList[0] == 'delete') {
            let parentLi = e.target.parentElement
            parentLi.classList.add('animate__animated', 'animate__bounceOutDown')
            setTimeout(() => {
                  parentLi.remove()
                  localStorage.setItem('spiska', JSON.stringify(list.innerHTML))
            }, 750);
      }
})
document.addEventListener('click', (e) => {
      if (e.target.classList[0] == 'done') {
            e.target.parentElement.classList.toggle('succes')
            localStorage.setItem('spiska', JSON.stringify(list.innerHTML))
      }
})
let defaultParent = null
document.addEventListener('click', (e) => {
      if (e.target.classList[0] == 'change') {
            bgModal.classList.add('active')
            modal.classList.add('active')
            let parentLi = e.target.parentElement
            defaultParent = parentLi
            input2.focus()
      }
})


closeModalEl.addEventListener('click', closeModal)
bgModal.addEventListener('click', closeModal)
function closeModal() {
      bgModal.classList.remove('active')
      modal.classList.remove('active')
}
form2.addEventListener('submit', (e) => {
      e.preventDefault()
      let input2Value = input2.value.trim()
      if (input2Value) {
            defaultParent.innerHTML = makeLi(input2Value)
            closeModal()
            localStorage.setItem('spiska', JSON.stringify(list.innerHTML))
      }else {
            alert('please enter a task')
      }
      form2.reset()
})
















