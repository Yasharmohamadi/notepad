const $ = document;
const inputElem = $.querySelector('#input');
const addBtnElem = $.querySelector('#add_btn');
const delBtnElem = $.querySelector('#del_btn');
const noteTextElem = $.querySelector('.box_text');
const sectionNotesElem = $.querySelector('.section_boxes');
const colorsElem = $.querySelectorAll('#colors');


function addNoteByBtn() {
    if (inputElem.value) {
       
        let newNoteBox = $.createElement('div');
        newNoteBox.className = 'box'
        sectionNotesElem.append(newNoteBox);
        
        let newNoteName = $.createElement('p');
        newNoteName.className = 'box_text'
        newNoteBox.append(newNoteName);
        newNoteName.innerHTML = inputElem.value;
        
        newNoteBox.style.background = inputElem.style.background;
    
        inputElem.value = '';

    };
};

function addNoteByKey(event) {
    if(event.key == 'Enter') {
        addNoteByBtn();
    };
};

function delInputBoxByBtn() {
    inputElem.value = '';
};

function delInputBoxByKey(event) {
    if(event.key == 'Delete') {
        inputElem.value = '';
    };
};

function setBackground(event) {
    let bgColor = event.target.style.background;
    inputElem.style.background = bgColor;

    inputElem.style.border = '2px solid #fff';
};

function deleteNote(event) {
    if (event.target.className == 'box') {
        event.target.remove();
    };
};

addBtnElem.addEventListener('click', addNoteByBtn);
delBtnElem.addEventListener('click', delInputBoxByBtn);
inputElem.addEventListener('keyup', addNoteByKey);
inputElem.addEventListener('keyup', delInputBoxByKey);
sectionNotesElem.addEventListener('click', deleteNote)

colorsElem.forEach(function(color) {
    color.addEventListener('click', setBackground)
});