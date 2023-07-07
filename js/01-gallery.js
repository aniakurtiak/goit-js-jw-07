import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');
// const hideModal = document.querySelector('.');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`)
        .join('');
}
list.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

list.addEventListener('click', handllerClickGallery);

function handllerClickGallery(evt) {
    evt.preventDefault();
    console.log(evt.target);
    // const imageItem = evt.target.closest('.gallery__item');

    const obj = findImageItem(evt.target);
    createOriginalMarkup(obj);


// НЕ ЗНАЮ ЧИ ТРЕБА ПЕРЕВІРКИ НИЖЧЕ
    // if (imageItem) {
    //     const id = imageItem.getAttribute(alt);
    //     console.log(id);
    // }

}
function findImageItem(item) {
 const id = item.getAttribute('alt');
    console.log(id);
    const currentImage = galleryItems.find(({ description }) => description === id);
    return currentImage;
}

function createOriginalMarkup({original, description }= {}) {
const instance = basicLightbox.create(`
    <div class="modal">
       <img src="${original}" alt="${description}"> 
    </div>
`)
    return instance.show()
}

