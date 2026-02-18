export function videoPlayerTemplate() {
  return `
    <div class="video-player">
      <iframe
        id="video-frame"
        class="video-player__iframe"
        src="https://www.youtube.com/embed/videoseries?list=UU5lwWG8WVXuIdoEwWy5IeIg"
        title="Ecos de Salvación"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

      <!-- Loader -->
      <div class="video-player__loader" id="video-loader">
        <svg class="video-player__spinner animate-spin" xmlns="http://www.w3.org/2000/svg" width="40" height="40"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
          <line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
        </svg>
        <p class="video-player__loader-text">Buscando último video...</p>
      </div>
    </div>
  `;
}
