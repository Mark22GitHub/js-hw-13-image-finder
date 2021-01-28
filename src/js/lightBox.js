import refs from "./refs.js";
import * as basicLightbox from "basiclightbox";
import "../../node_modules/basiclightbox/dist/basicLightbox.min.css"


refs.ulGallery.addEventListener("click", (event) => {
    if (event.target.nodeName === "IMG") {
       const dataLightBox = event.target.dataset.lightbox;
        
       const instance = basicLightbox.create(
            `<p>
            <img src="${dataLightBox}" width="1300" height="700">
            </p>`
        );
    instance.show();
  }
});
