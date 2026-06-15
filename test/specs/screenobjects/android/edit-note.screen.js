class EditNoteScreen {
get skipbtn(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
}
get addNoteTxt(){
    return $('//*[@text="Add note"]');
}
get textOption(){
    return $('//*[@text="Text"]');
}
get editingTxt(){
    return $('//*[@text="Editing"]');
}
get editTitleField(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
}
get editNoteField(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
}
get editBtn(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
}
get viewNote(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
}

async skipTutorial(){
    await this.skipbtn.click();
    await expect(this.addNoteTxt).toBeDisplayed();
}

async addAndSaveNote(title, description){
    await this.textOption.click();
    await expect(this.editingTxt).toBeDisplayed();
    await this.editTitleField.setValue(title);
    await this.editNoteField.setValue(description);
    await driver.back();
    await driver.back();
    await expect(this.editBtn).toBeDisplayed();
}
}

export default new EditNoteScreen();
