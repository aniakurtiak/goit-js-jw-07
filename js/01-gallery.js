import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

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
    if (evt.target.closest('.gallery__item')) {
        const obj = findImageItem(evt.target);
        createOriginalModal(obj);
    }
}

function findImageItem(item) {
 const id = item.getAttribute('alt');
    const currentImage = galleryItems.find(({ description }) => description === id);
    return currentImage;
}

function createOriginalModal({original, description }= {}) {
const instance = basicLightbox.create(`
       <img src="${original}" alt="${description}"> 
`)
    return instance.show()
}
