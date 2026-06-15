import AddNoteScreen from "../screenobjects/android/add-note.screen.js";
import EditNoteScreen from "../screenobjects/android/edit-note.screen.js";
import DeleteNoteScreen from "../screenobjects/android/delete-note.screen.js";

describe('My Color notes App', () => {
    it('Handle app Permisions', async () => {
        await driver.pause(2000);
    });

    it('Skip Tutorial', async () => {
        await AddNoteScreen.skipbtn.click();
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    });

    it('Add Note', async () => {
        await AddNoteScreen.addNoteTxt.click();
        await EditNoteScreen.textOption.click();
        await expect(EditNoteScreen.editingTxt).toBeDisplayed();
        //add note title and description
        await EditNoteScreen.editTitleField.setValue('My First Note');
        await EditNoteScreen.editNoteField.setValue('One\n Two\n Three \n Four');
        //save the note changes
        await driver.back();
        await driver.back();
        await expect(EditNoteScreen.editBtn).toBeDisplayed();
        await expect(EditNoteScreen.viewNote).toHaveText('One\n Two\n Three \n Four');
    });

    it('Delete a note & check the note in trash can', async() => {
        await driver.back();
        const note = await DeleteNoteScreen.noteTitle.getText();
        await DeleteNoteScreen.noteTitle.click(); //click on the note
        await DeleteNoteScreen.moreBtn.click(); //click on more options
        await DeleteNoteScreen.deleteOption.click(); //click on delete option
        await driver.acceptAlert(); //accept the alert to confirm deletion
        await DeleteNoteScreen.navIcon.click(); //click on navigation icon
        await DeleteNoteScreen.trashCanOption.click(); //click on trash can
        const deletedNote = await DeleteNoteScreen.noteTitle.getText(); //get the text of the deleted(trash) note
        await expect(deletedNote).toEqual(note); //assert that the deleted note is in the trash can
        //or
        const deletedNoteOne = await DeleteNoteScreen.noteTitle;  //get the text of the deleted(trash) note
        await expect(deletedNoteOne).toHaveText(note); //assert that the deleted note is in the trash can
    });

});
