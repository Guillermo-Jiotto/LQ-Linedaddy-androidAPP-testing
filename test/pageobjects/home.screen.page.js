class HomeScreenPage {

    // Constants
    sifRanTextExpected = 'RAN';
    sifRanSearchedField = 'SIF-RAN';
    alaMalTextExpected = 'MAL';
    alaMalSearchedField = 'ALA-MAL';
    barArsTextExpected = 'ARS';
    barArsSearchedField = 'BAR-ARS';
    wigIpsTextExpected = 'IPS';
    wigIpsSearchedField = 'WIG-IPS';
    rotBurTextExpected = 'BUR';
    rotBurSearchedField = 'ROT-BUR';
    mkdOxfTextExpected = 'OXF';
    mkdOxfSearchedField = 'MKD-OXF';
    creSweTextExpected = 'SWE';
    creSweSearchedField = 'CRE-SWE';
    chaCamTextExpected = 'CAM';
    chaCamSearchedField =  'CHA-CAM';

    // Locators
    get notLoggedInBtnOK() { return $('//android.widget.Button[@text="OK"]'); }

    get soccerField() { return $('(//android.widget.TextView[@text="Soccer"])[1]'); }

    get homePageBtn() { return $('(//android.widget.Button/android.view.ViewGroup/android.widget.ImageView)[1]'); }

    get fieldSifRan() { return $('//android.widget.TextView[@text="RAN"]/following-sibling::android.widget.TextView[@text="SIF"]'); }

    // LAST swipe field
    get lastSwipeField() { return $('//android.widget.TextView[@text="PAR"]/following-sibling::android.widget.TextView[@text="KOR"]'); }

    // FIRST swipe field
    get firstSwipeField() { return $('//android.widget.TextView[@text="AFG"]/following-sibling::android.widget.TextView[@text="VIE"]'); }

    // TEST field for TEST
    get testFieldNzlOma() { return $('//android.widget.TextView[@text="NZL"]/following-sibling::android.widget.TextView[@text="OMA"]'); }

    get fieldAlaMal() { return $('//android.widget.TextView[@text="ALA"]/following-sibling::android.widget.TextView[@text="MAL"]'); }

    get fieldBarArs() { return $('//android.widget.TextView[@text="BAR"]/following-sibling::android.widget.TextView[@text="ARS"]'); }

    get fieldWigIps() { return $('//android.widget.TextView[@text="WIG"]/following-sibling::android.widget.TextView[@text="IPS"]'); }

    get fieldRotBur() { return $('//android.widget.TextView[@text="ROT"]/following-sibling::android.widget.TextView[@text="BUR"]'); }

    get fieldMkdOxf() { return $('//android.widget.TextView[@text="MKD"]/following-sibling::android.widget.TextView[@text="OXF"]'); }

    get fieldCreSwe() { return $('//android.widget.TextView[@text="CRE"]/following-sibling::android.widget.TextView[@text="SWE"]'); }

    get fieldChaCam() { return $('//android.widget.TextView[@text="CHA"]/following-sibling::android.widget.TextView[@text="CAM"]'); }

    get activateClubBtn() { return $('//android.widget.TextView[@text="Activate LineDaddy Club"]'); }

    // Actions
    async notLoggedInBtnOKClick() { await this.notLoggedInBtnOK.click(); }

    async soccerFieldClick() { await this.soccerField.click(); }

    async homePageBtnClick() { await this.homePageBtn.click(); }

    async expectActivateBtnToHaveText() { await expect(this.activateClubBtn).toHaveText('Activate LineDaddy Club'); }

    // Functions
    async swipingLeft(fieldForVerify) {        
        while (await fieldForVerify.isExisting() != true && await this.lastSwipeField.isExisting() != true) {
            driver.touchPerform([
                { action: 'press', options: { x: 668, y: 800 }},
                { action: 'wait', options: { ms: 500 }},
                { action: 'moveTo', options: { x: 100, y: 800 }},
                { action: 'release' }
              ]);
        }
    }

    async swipingRight(fieldForVerify) {
        while (await fieldForVerify.isExisting() != true && await this.firstSwipeField.isExisting() != true) {
            driver.touchPerform([
                { action: 'press', options: { x: 100, y: 800 }},
                { action: 'wait', options: { ms: 500 }},
                { action: 'moveTo', options: { x: 668, y: 800 }},
                { action: 'release' }
              ]);
        }
    }

    async inCaseOfExistence(searchedFieldLocator, expectedFieldText, searchedField) {
        if (await searchedFieldLocator.isExisting() == true) {
            await expect(searchedFieldLocator).toHaveText(expectedFieldText);
            console.log(searchedField + ' field was found.'); 
        } else console.log(searchedField + ' field was NOT found!')
        await browser.saveScreenshot("./screenshot/" + searchedField + "-field-expectation.png");
    }
    
    async sifRanFieldSerching() {
        await this.swipingLeft(this.fieldSifRan);
        await this.inCaseOfExistence(this.fieldSifRan, this.sifRanTextExpected, this.sifRanSearchedField);
    }

    async alaMalFieldSerching() {
        await this.swipingRight(this.fieldAlaMal);
        await this.inCaseOfExistence(this.fieldAlaMal, this.alaMalTextExpected, this.alaMalSearchedField);
    }

    async barArsFieldSerching() {
        await this.swipingLeft(this.fieldBarArs);
        await this.inCaseOfExistence(this.fieldBarArs, this.barArsTextExpected, this.barArsSearchedField);
    }

    async wigIpsFieldSerching() {
        await this.swipingRight(this.fieldWigIps);
        await this.inCaseOfExistence(this.fieldWigIps, this.wigIpsTextExpected, this.wigIpsSearchedField);
    }

    async rotBurFieldSerching() {
        await this.swipingLeft(this.fieldRotBur);
        await this.inCaseOfExistence(this.fieldRotBur, this.rotBurTextExpected, this.rotBurSearchedField);
    }

    async mkdOxfFieldSerching() {
        await this.swipingRight(this.fieldMkdOxf);
        await this.inCaseOfExistence(this.fieldMkdOxf, this.mkdOxfTextExpected, this.mkdOxfSearchedField);
    }

    async creSweFieldSerching() {
        await this.swipingLeft(this.fieldCreSwe);
        await this.inCaseOfExistence(this.fieldCreSwe, this.creSweTextExpected, this.creSweSearchedField);
    }

    async chaCamFieldSerching() {
        await this.swipingRight(this.fieldChaCam);
        await this.inCaseOfExistence(this.fieldChaCam, this.chaCamTextExpected, this.chaCamSearchedField);
    }

}
module.exports = new HomeScreenPage()