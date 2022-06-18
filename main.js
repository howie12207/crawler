import puppeteer from "puppeteer";

import { homeTest } from "./scripts/home.js";

const CHROME_PATH =
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
const SLOW_MOTION = 0;
const START_URL = "https://wt.franklin.com.tw:8081/openAccount/";

(async () => {
    const browser = await puppeteer.launch({
        executablePath: CHROME_PATH,
        headless: false,
        slowMo: SLOW_MOTION,
        devtools: true,
    });
    const page = await browser.newPage();
    await page.goto(START_URL);

    homeTest(page);
})();
