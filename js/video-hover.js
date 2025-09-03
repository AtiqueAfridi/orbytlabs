document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('.service-video');

  videos.forEach(video => {
    // Ensure video is muted to allow autoplay on hover where browsers permit
    video.muted = true;

    // Pointer events (works for mouse and touch in many browsers)
    video.addEventListener('pointerenter', () => {
      // attempt to play; ignore promise rejection
      const p = video.play();
      if (p && p.catch) p.catch(() => {});
    });

    video.addEventListener('pointerleave', () => {
      video.pause();
      video.currentTime = 0; // optional: reset to start
    });

    // Fallback for touch devices: play on touchstart, pause on touchend
    video.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const p = video.play();
      if (p && p.catch) p.catch(() => {});
    }, {passive: false});

    video.addEventListener('touchend', () => {
      video.pause();
      video.currentTime = 0;
    });
  });
});
