class HelperTest {

    async swipingDown() {
        driver.touchPerform([
            { action: 'press', options: { x: 350, y: 1000 }},
            { action: 'wait', options: { ms: 500 }},
            { action: 'moveTo', options: { x: 350, y: 600 }},
            { action: 'release' }
          ]);
    }

}

module.exports = new HelperTest()