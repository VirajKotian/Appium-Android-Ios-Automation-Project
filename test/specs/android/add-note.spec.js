import AddNoteScreen from "../screenobjects/android/add-note.screen.js";
import EditNoteScreen from "../screenobjects/android/edit-note.screen.js";

describe('Add Note Feature', () => {
    before(async () => {          //hook to run before all test cases
        await driver.pause(2000);
        await EditNoteScreen.skipTutorial();
    });

    afer(async () => {           //hook to run after all test cases
        await driver.pause(2000);
    });

    it('Add Note', async () => {
        await AddNoteScreen.addNoteTxt.click();
        await EditNoteScreen.addAndSaveNote('My First Note', 'One\n Two\n Three \n Four');
        await expect(EditNoteScreen.viewNote).toHaveText('One\n Two\n Three \n Four');
    });
});