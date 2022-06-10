const homeScreenPage = require('../pageobjects/home.screen.page.js');
const helperTest = require('../helper/helper.js');

describe('Final project testing APP LineDaddy', () => {

    it('should Verify SIF-RAN field', async () => {

        await homeScreenPage.notLoggedInBtnOK.waitUntil(
            async function() { return (await this.getText() === 'OK') },
            { timeout: 10000, timeoutMsg: "Button OK for 'Not Logged In'-msg does not appear" })

        homeScreenPage.notLoggedInBtnOKClick();
        await homeScreenPage.firstSwipeField.isDisplayed();
        await homeScreenPage.sifRanFieldSerching();
        
    });

    it('should Verify ALA-MAL field', async () => {

        await homeScreenPage.alaMalFieldSerching();
    });

    it('should Verify BAR-ARS field', async () => {

        await homeScreenPage.barArsFieldSerching();
    });

    it('should Verify WIG-IPS field', async () => {

        await homeScreenPage.wigIpsFieldSerching();
    });

    it('should Verify ROT-BUR field', async () => {

        await homeScreenPage.rotBurFieldSerching();
    });

    it('should Verify MKD-OXF field', async () => {

        await homeScreenPage.mkdOxfFieldSerching();
    });

    it('should Verify CRE-SWE field', async () => {

        await homeScreenPage.creSweFieldSerching();
    });

    it('should Verify CHA-CAM field', async () => {

        await homeScreenPage.chaCamFieldSerching();
    });

    it('should Verify League Soccer field', async () => {

        await helperTest.swipingDown();
        homeScreenPage.soccerFieldClick();

        await homeScreenPage.activateClubBtn.waitUntil(
            async function() { return (await this.getText() === 'Activate LineDaddy Club') },
            { timeout: 10000, timeoutMsg: "Button ACTIVATE does not appear" })

        homeScreenPage.expectActivateBtnToHaveText();
        await browser.saveScreenshot("./screenshot/activate-linedaddy-club.png");
    });
    
});