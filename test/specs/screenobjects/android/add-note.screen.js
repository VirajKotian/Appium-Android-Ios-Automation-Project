class AddNoteScreen {
get skipbtn(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
}
get addNoteTxt(){
    return $('//*[@text="Add note"]');
}
}

export default new AddNoteScreen();
