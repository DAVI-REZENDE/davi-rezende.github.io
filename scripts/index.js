const cards = document.querySelectorAll('.card-item')
const body = document.querySelector('body')

cards.forEach(item => {
  item.onclick = showModal
})

function showModal(item) {

  //coletar id 

  let elementId = null;

  if(item.target.alt || item.target.localName === 'span'){
    elementId = item.path[1].id
  }else {
    elementId = item.target.id
  }

  //encontar modal

  const modal = document.querySelector(`.container-modal#${elementId}`)
  modal.classList.toggle('show')

  afterShow(modal)

}

function afterShow(modal) {
  const modalCurrent = modal
  const close = modalCurrent.querySelector('.close-modal')

  close.onclick = () => {closeModal(modalCurrent)}
  body.style.overflow = 'hidden';
}

function closeModal(modal) {

  modal.classList.remove('show')
  body.style.overflow = 'auto';

}