
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarList = document.querySelector('#navbar-list');

    menuToggle.addEventListener('click', function() {
        navbarList.classList.toggle('menu-open');
    });
});

document.getElementById('images').addEventListener('change', function() {
    const previewContainer = document.getElementById('preview-container');
    const files = this.files;
  
    previewContainer.innerHTML = ''; // Clear previous previews
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
  
      reader.onload = function() {
        const image = new Image();
        image.src = reader.result;
        image.classList.add('file-preview-image');
        previewContainer.appendChild(image);
      }
  
      reader.readAsDataURL(file);
    }
  });
  

// Function to adjust layout based on screen size
function adjustLayout() {
    var form = document.getElementById('filterForm');
    if (window.innerWidth <= 767) {
        form.classList.add('two-columns');
    } else {
        form.classList.remove('two-columns');
    }
}

// Run the function when the page loads and on window resize
window.onload = adjustLayout;
window.onresize = adjustLayout;
