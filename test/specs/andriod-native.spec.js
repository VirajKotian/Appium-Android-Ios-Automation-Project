describe('Android Native App feature Test', () => {
    it('Accesss an Activity directly', async () => {
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples');
        await driver.pause(3000);
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Working with Alert Dialogs Boxes', async () => {
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples');
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();
        //await driver.acceptAlert();  //to accept the alert

        //await driver.dismissAlert();   //to dismiss the alert

        console.log('ALERT TEXT ->', await driver.getAlertText());
        await $('//*[@resource-id="android:id/button1"]').click();  // click on the OK button 

        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Vertical Scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)');  //scrolling to the element(not recommended)
        // await $('~Secure Surfaces').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();  //scrolling to the element by text(Stable)
        await expect($('~Secure Dialog')).toBeExisting();
    });

    it('Horizontal Scrolling', async () => {
        await driver.startActivity(
            'io.appium.android.apis',
            'io.appium.android.apis.view.Gallery1');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');  //scrolling horizontally
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
        await driver.pause(3000);
    });

    it('Working with a date picker', async () => {// access the date picker
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.DateWidgets1");
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();
        await $('~change the date').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('//*[@text="10"]').click()
        await $('//*[@resource-id="android:id/button1"]').click();
        await expect(date).not.toHaveText(currentDate);
        await expect(await date.getText()).not.toEqual(currentDate);

    });


});