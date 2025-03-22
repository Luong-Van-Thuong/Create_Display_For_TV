document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', () => {
      const contentPath = section.getAttribute('data-content');
      const contentType = section.getAttribute('data-type');
      showFullscreenContent(contentPath, contentType);
    });
  });
  
  document.getElementById('close-btn').addEventListener('click', hideFullscreenContent);
  
  function showFullscreenContent(path, type) {
    const viewer = document.getElementById('fullscreen-viewer');
    const contentView = document.getElementById('content-view');
    
    contentView.innerHTML = ''; // Clear previous content
  
    let element;
  
    if (type === 'image') {
      element = document.createElement('img');
      element.src = path;
    } else if (type === 'pdf') {
      element = document.createElement('iframe');
      element.src = path;
    } else if (type === 'video') {
      element = document.createElement('video');
      element.src = path;
      element.controls = true;
      element.autoplay = true;
    }
  
    contentView.appendChild(element);
    viewer.classList.remove('hidden');
  }
  
  function hideFullscreenContent() {
    const viewer = document.getElementById('fullscreen-viewer');
    const contentView = document.getElementById('content-view');
    
    contentView.innerHTML = '';
    viewer.classList.add('hidden');
  }
  