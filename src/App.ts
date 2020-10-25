import './scss/general.scss';

// Import SVGs
const svgs = require.context('./assets/icons/', true, /\.svg$/);
svgs.keys().forEach(svgs);

// Remove nojs class if JS is active
document.querySelector('.nojs')!.classList.remove('nojs');
