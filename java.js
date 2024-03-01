document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.enlarge-image');
  
    images.forEach(function(image) {
      image.addEventListener('click', function() {
        image.classList.toggle('enlarged');
      });
    });
  });

