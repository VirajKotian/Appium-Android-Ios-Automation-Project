import EditNoteScreen from "../screenobjects/android/edit-note.screen.js";

describe('Edit Note', () => {
    it('Skip Tutorial and Edit Note', async () => {
        await driver.pause(2000);
        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addNoteTxt.click();
        await EditNoteScreen.addAndSaveNote('Updated Note', 'Updated\n Description');
        await expect(EditNoteScreen.viewNote).toHaveText('Updated\n Description');
    });
});
