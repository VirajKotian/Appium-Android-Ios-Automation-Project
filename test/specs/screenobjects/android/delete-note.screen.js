class DeleteNoteScreen {
get noteTitle(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
}
get moreBtn(){
    return $('~More');
}
get deleteOption(){
    return $('//*[@text="Delete"]');
}
get navIcon(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
}
get trashCanOption(){
    return $('//*[@text="Trash Can"]');
}

async deleteNoteAndVerifyInTrash(noteName){
    await driver.back();
    const note = await this.noteTitle.getText();
    await this.noteTitle.click();
    await this.moreBtn.click();
    await this.deleteOption.click();
    await driver.acceptAlert();
    await this.navIcon.click();
    await this.trashCanOption.click();
    const deletedNote = await this.noteTitle.getText();
    await expect(deletedNote).toEqual(note);
}
}

export default new DeleteNoteScreen();
