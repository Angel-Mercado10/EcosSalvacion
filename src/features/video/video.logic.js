/**
 * Auto-carga el último video del canal de YouTube usando RSS → JSON.
 * No renderiza nada; opera sobre el iframe ya existente en el DOM (creado por programas).
 */

export function initVideo() {
  cargarUltimoVideo();
}

async function cargarUltimoVideo() {
  const channelId = "UC5lwWG8WVXuIdoEwWy5IeIg";
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  try {
    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
    );
    const data = await res.json();

    if (data.items && data.items.length > 0) {
      const guid = data.items[0].guid;
      const videoId = guid.split(":")[2];

      const iframe = document.getElementById("video-frame");
      const loader = document.getElementById("video-loader");

      if (iframe && videoId) {
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        console.log("Video actualizado automáticamente a:", data.items[0].title);
        if (loader) loader.classList.add("video-player__loader--hidden");
      }
    } else {
      hideLoader();
    }
  } catch (e) {
    console.error("No se pudo cargar el último video automáticamente (usando fallback):", e);
    hideLoader();
  }
}

function hideLoader() {
  const loader = document.getElementById("video-loader");
  if (loader) loader.classList.add("video-player__loader--hidden");
}
