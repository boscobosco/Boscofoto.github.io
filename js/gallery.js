jQuery("#animated-thumbnails-gallery")
  .justifiedGallery({
    captions: false,
    lastRow: "hide",
    rowHeight: 180,
    margins: 5
  })
  .on("jg.complete", function () {
    window.lightGallery(
      document.getElementById("animated-thumbnails-gallery"),
      {
        animateThumb: true,
        autoplayFirstVideo: false,
        pager: false,
        download: false,
        zoom: false,
        animateThumb: false,
        zoomFromOrigin: false,
        allowMediaOverlap: true,
        toggleThumb: true,
        galleryId: "nature",
        plugins: [lgZoom, lgThumbnail],
        mobileSettings: {
          controls: false,
          showCloseIcon: false,
          download: false,
          rotate: false
        }
      }
    );
  });
