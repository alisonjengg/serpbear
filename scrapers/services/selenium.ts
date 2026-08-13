// ScraperSettings is a global ambient type from SerpBear's types.d.ts — no import needed
// (mirrors scrapers/services/scrapingrobot.ts).
const selenium: ScraperSettings = {
   id: 'selenium',
   name: 'Selenium Chrome (Self-Hosted)',
   website: 'github.com/towfiqi/serpbear',
   resultObjectKey: 'html',
   scrapeURL: (keyword, settings, countries) => {
      const country = keyword.country || 'US';
      const lang = (countries[country] && countries[country][2]) || 'en';
      const device = keyword.device === 'mobile' ? 'mobile' : 'desktop';
      const googleURL = `https://www.google.com/search?num=100&hl=${lang}&gl=${country}&q=${encodeURIComponent(keyword.keyword)}`;

      // settings.scaping_api holds the pasted base URL, already containing "?token=...",
      // so every extra param below is appended with "&".
      return `${settings.scaping_api}&url=${encodeURIComponent(googleURL)}&device=${device}`;
   },
};

export default selenium;
