const html = require('./html.json').html;
const phantom = require('phantom');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    var a= await page.setContent(html, 'teste.erick')
    await page.property('viewportSize', {width: 700, height: 700});
     
    await page.render('boleto-pdf.pdf');
    console.log(`File created at [./boleto-pdf.pdf]`);

    await instance.exit();
}());
