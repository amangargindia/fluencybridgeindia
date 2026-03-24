// pwa-setup.js
(function() {
    // 1. Inject PWA meta tags and icons into the <head>
    const head = document.head;

    const manifest = document.createElement('link');
    manifest.rel = 'manifest';
    manifest.href = '/manifest.json';
    head.appendChild(manifest);

    const themeColor = document.createElement('meta');
    themeColor.name = 'theme-color';
    themeColor.content = '#0f172a';
    head.appendChild(themeColor);

    const icon = document.createElement('link');
    icon.rel = 'icon';
    icon.href = '/logo.svg';
    icon.type = 'image/svg+xml';
    head.appendChild(icon);

    const appleIcon = document.createElement('link');
    appleIcon.rel = 'apple-touch-icon';
    appleIcon.href = '/logo.svg';
    head.appendChild(appleIcon);

    // 2. Register Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => console.log('ServiceWorker registration successful'))
                .catch(err => console.log('ServiceWorker registration failed: ', err));
        });
    }
})();
