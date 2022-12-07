const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.tickertape.in/");

  await page.screenshot({ path: "output.png", fullPage: true });
  await page.pdf({ path: "output.pdf", format: "A4" });

  const html = await page.content();
  //   console.log(html);

  const title = await page.evaluate(() => document.title);
  console.log(title);

  await browser.close();
}

run();
