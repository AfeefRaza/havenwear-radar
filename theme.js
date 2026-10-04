try {
  var t = localStorage.getItem('hcr-theme');
  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) document.documentElement.dataset.theme = 'dark';
} catch (e) {}
