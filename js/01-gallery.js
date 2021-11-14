import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createPictureCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

function createPictureCardsMarkup(imgs) {

   return imgs.map(({ preview, original, description}) => {
       return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>
        `;
        }).join('');
};

galleryContainer.addEventListener('click', onGalleryContainerClick);
function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }
  
  galleryItems.map((item) => {
    if (item.original === evt.target.dataset.source) {
      const instance = basicLightbox.create(`
      <img src=${item.original} width="800" height="600">`
      );
      instance.show();
         document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          instance.close();
        }
      });
    }  
  });  
}
