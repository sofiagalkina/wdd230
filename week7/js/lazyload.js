let imageToLoad = document.querySelectorAll("img[data-src]");


const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    }
};

imageToLoad.forEach((img) => {
    loadImages(img);
});


//intersection observer!

// you have a little more control over what happens 
// but! tale "loading:"lazy" out before you do  this!

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer ) =>{
        itemsms.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });

    imageToLoad.forEach((img) => {
        observer.observe(img);
    });
}

else {
    imageToLoad.forEach((img) => {
        loadImages(img);
    });
}



//if()