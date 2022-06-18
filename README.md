# Puppeteer

### API

```
// Open browser
const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",  // Chrome.exe path
    headless: false,  // Seeing ui or background
    slowMo: 100    // Slow down millisecond
    devtools: true,  // Open devtools
});

// Open new Tab
await browser.newPage()

// Goto url
await page.goto(url);

// Delay(millisecond)
await page.waitForTimeout(millisecond)

// Selector
page.$(selector)

// SelectorAll
page.$$(selector)

// Wait selector show
await page.waitForSelector(selector)

// Click element
await page.click(selector)

// Take a screenshot
await page.screenshot({ path: "example.png" });

// Close browser
await browser.close();
```

https://github.com/puppeteer/puppeteer
