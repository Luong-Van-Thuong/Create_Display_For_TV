function closeFullscreen() {
    document.getElementById("fullscreen").classList.remove("active");
    document.getElementById("fullscreen-content").innerHTML = "";
  }
  
  document.querySelectorAll(".grid-item").forEach(item => {
    item.addEventListener("click", () => {
      const type = item.getAttribute("data-type");
      const src = item.getAttribute("data-src");
  
      let content;
      switch (type) {
        case "image":
          content = `<img src="${src}" />`;
          break;
        case "video":
          content = `<video src="${src}" autoplay controls></video>`;
          break;
        // case "pdf":
        //   content = `<iframe src="https://mozilla.github.io/pdf.js/web/viewer.html?file=${src}" frameborder="0" style="width:100%;height:100%;"></iframe>`;
        //   break;
        case "pdf":
            content = `<embed src="${src}" type="application/pdf" width="100%" height="100%">`;
            break;

      }
  
      document.getElementById("fullscreen-content").innerHTML = content;
      document.getElementById("fullscreen").classList.add("active");
    });
  });
  