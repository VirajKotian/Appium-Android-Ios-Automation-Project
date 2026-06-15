import AddNoteScreen from "../screenobjects/android/add-note.screen.js";
import EditNoteScreen from "../screenobjects/android/edit-note.screen.js";
import DeleteNoteScreen from "../screenobjects/android/delete-note.screen.js";

describe('Delete Note', () => {
  it('Add Note then Delete and Verify in Trash', async() => {
        await driver.pause(2000);
        await EditNoteScreen.skipTutorial();
        await AddNoteScreen.addNoteTxt.click();
        await EditNoteScreen.addAndSaveNote('Note to Delete', 'This note will be deleted');
        await expect(EditNoteScreen.viewNote).toHaveText('This note will be deleted');
        await DeleteNoteScreen.deleteNoteAndVerifyInTrash('Note to Delete');
    });
});
