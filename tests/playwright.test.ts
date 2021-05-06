import { expect, should } from 'chai';
import { chromium } from 'playwright';

describe('Playwright testing', () => {
    it('Titulo de pagina debera ser Universidad de la Cuenca del Plata -', async () => {

        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.ucp.edu.ar/');

        expect(await page.title()).to.equal("Universidad de la Cuenca del Plata -");
        await browser.close();
    });
});