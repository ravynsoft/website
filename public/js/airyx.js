if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        let meta = document.createElement('meta');
        meta.name = 'twitter:widgets:theme';
        meta.content = "dark";
        document.head.appendChild(meta);
}
