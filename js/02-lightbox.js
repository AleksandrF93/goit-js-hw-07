import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createPictureCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

function createPictureCardsMarkup(imgs) {

   return imgs.map(({ preview, original, description}) => {
       return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
        }).join('');
};


new SimpleLightbox('.gallery__item', {
    captionsData: "alt",
    captionPosition: 'bottom',
    captionDelay: 250,
});
 



