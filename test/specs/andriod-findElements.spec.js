describe('Andriod Elements Test', () => {
    it('should find multiple elements by Accessibility ID', async () => {
        //find elements by Accessibility ID
        const appOption = await $('~App');
        await appOption.click();
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting(); //actionBar
        // const elements = await $$('android.widget.TextView');
        // console.log(`Found ${elements.length} elements`);
    });

    it('Should find elements by class name', async () => {
        //find elements by class name
        const className = await $('android.widget.TextView');
        //console.log(`Found ${className.length} elements`);
        console.log(await className.getText());
        await expect(className).toHaveText('API Demos');
    });

    it('should find elements by XPath', async () => {
        // const appOption = await $('~App');
        // await appOption.click();       //if you skip previous test cases
        //find elements by XPath
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();  //by content-desc as classname
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click(); //by button as classname
        await $('//android.widget.TextView[@text="Command two"]').click();  //by text as classname
        await expect($('//android.widget.TextView[@text="You selected: 1 , Command two"]')).toBeExisting();

        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText('You selected: 1 , Command two');
    });

    it('should find elements by Android UIAutomator', async () => {
        //find elements by Android UIAutomator
        await $('android=new UiSelector().textContains("Alert")').click();    

         });

    it('Working with multiple elements', async () => {    //run only
        //find multiple elements and interact with them
        const ExpecpectedList = ['API Demos', "Access'ibility", 'Accessibility', 
            'Animation', 'App', 'Content', 'Graphics', 'Media', 
             'NFC', 'OS', 'Preference', 'Text', 'Views'];
        const actualList = [];
        const textlist = await $$('android.widget.TextView');
        console.log(`Found ${textlist.length} elements`);
        for (const text of textlist) {
            actualList.push(await text.getText());
        }
        await expect(actualList).toEqual(ExpecpectedList);
        // for (let i = 0; i < textlist.length; i++) {
        //     console.log(await textlist[i].getText());
        // }
    });

    it('Working with text fields', async () => {
        //find text fields and interact with them
        await $('~Views').click();
        await $('//*[@text="Auto Complete"]').click();
        //await $('~Auto Complete').click();   //or Accessibility ID
        await $('//*[@content-desc="1. Screen Top"]').click();
        const inputField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await inputField.addValue('Appium');
        //await inputField.setValue('Appium');  //or setValue
        await expect(inputField).toHaveText('Appium');
    });

});
