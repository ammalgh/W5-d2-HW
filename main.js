
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

      // تغيير النصوص
      var headings = document.getElementsByTagName('section');
      headings.forEach(function(heading) {
        if (heading.textContent.includes('Dog')) {
          heading.textContent = heading.textContent.replace('Dog', 'Cat');
          console.log('Text changed:', heading.textContent);
        } else {
          console.log('No change needed for:', heading.textContent);
        }
      });
    });
  });