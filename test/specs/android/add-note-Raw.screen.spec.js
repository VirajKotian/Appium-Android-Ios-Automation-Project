describe('My Color notes App', () => {
    it('Handle app Permisions', async () => {
        await driver.pause(2000);
    });

    it('Skip Tutorial', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('Add Note', async () => {
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();
        //add note title and description
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue('My First Note');
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue('One\n Two\n Three \n Four');
        //save the note changes
        await driver.back();
        await driver.back();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText('One\n Two\n Three \n Four');
    });

    it('Delete a note & check the note in trash can', async() => {
        await driver.back();
        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click(); //click on the note
        await $(`~More`).click(); //click on more options
        await $(`//*[@text="Delete"]`).click(); //click on delete option
        await driver.acceptAlert(); //accept the alert to confirm deletion
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click(); //click on navigation icon
        await $('//*[@text="Trash Can"]').click(); //click on trash can
        const deletedNote = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText(); //get the text of the deleted(trash) note
        await expect(deletedNote).toEqual(note); //assert that the deleted note is in the trash can
        //or
        const deletedNoteOne = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')  //get the text of the deleted(trash) note
        await expect(deletedNoteOne).toHaveText(note); //assert that the deleted note is in the trash can
    });
});