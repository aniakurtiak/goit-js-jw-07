import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const list = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
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

function createOriginalModal() {
    const lightbox = new SimpleLightbox('.gallery a', { captionsData: `alt`, captionDelay: 250 });
    return lightbox;
}
