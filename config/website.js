const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Sandra Czerkas - Gatsby Starter Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Sandra Czerkas', // Alternative Site title for SEO
  siteUrl: 'https://portfolio-sandraczerkas.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/sandraczerkas.jpg', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful One-Page website with Parallax effect',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
