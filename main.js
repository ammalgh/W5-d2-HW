
//   --

document.addEventListener('DOMContentLoaded', function() {
    // الحصول على عناصر الصور المحددة
    var logo = document.getElementById('logo');
    var heroContainer = document.getElementById('hero');
    var catNewImage = document.getElementById('catNew');

  
    var newHeroBackground = "url('https://cdn.pixabay.com/photo/2022/01/18/07/38/cat-6946505_640.jpg')";
    var newCatNewImageSrc = "https://i.ibb.co/QfqjHxq/mobile-hero-2.jpg";

    
    logo.addEventListener('click', function() {
      console.log('Logo clicked');
     
      heroContainer.style.backgroundImage = newHeroBackground;
      console.log('Background changed');

  
      catNewImage.setAttribute('src', newCatNewImageSrc);
      console.log('Image source changed');


  var elements = document.querySelectorAll('*');
  elements.forEach(function(element) {
      if (element.children.length === 0 && element.textContent.includes('Dog')) {
          element.textContent = element.textContent.replace(/Dog/g, 'Cat');
          console.log('Text changed:', element.textContent);
      }
  });
});
});



  // -------------------

