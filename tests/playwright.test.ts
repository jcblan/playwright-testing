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
    it('Texto debera ser "El campo es obligatorio."', async () => {
        var texto;
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.ucp.edu.ar/contactanos/');

        await page.click('#wpcf7-f79-p43-o1 > form > div.col-md-6.col-md-offset-3 > div:nth-child(6) > div > div > input', {button: "left"});
        
        texto = await page.innerText('#wpcf7-f79-p43-o1 > form > div.col-md-6.col-md-offset-3 > div:nth-child(1) > div > span');
        await browser.close();
        
        expect(texto).to.equal("El campo es obligatorio.");
        
    });
});