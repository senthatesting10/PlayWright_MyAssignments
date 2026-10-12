//Your task is to launch two separate browser instances using Playwright:  
//1. Load Red Bus in an Edge browser instance and verify the page title and URL.  
//2. Load Flipkart in a Webkit browser instance and verify the page title and URL. 


import {chromium, webkit, test } from "@playwright/test"
test('Launch Browser',async()=>{

    let browser = await chromium.launch()
    let context = await browser.newContext()
    let page = await context.newPage()
    channel: 'msedge'

    await page.goto('https://www.redbus.in/')

    let URL = await page.url()
    console.log('This page URL is  :' ,URL);

    let Title = await page.title()
    console.log('This page Title:', Title);

    console.log("-----------------RED BUS--------------------------");
    
})
    //
    test('Launch Browser flipkart',async(page1)=>{
    let browser1 = await webkit.launch()
    let context1 = await browser1.newContext()
    let page = await context1.newPage()

    await page.goto('https://www.flipkart.com/')

    let URL1 = await page.url()
    console.log('This page URL is  :' ,URL1);

    let Title1 = await page.title()
    console.log('This page Title:', Title1);

}

)