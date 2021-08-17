let notes = [];

$(document).ready(function () {
    if (localStorage.getItem("notes")) notes = JSON.parse(localStorage.getItem("notes"));
    setNotes();
});

$("#note-submit").click(function (e) { 
    let noteTitle = $("#note-title").val();
    let noteDesc = $("#note-body").val();
    let note = {
        title: noteTitle,
        desc: noteDesc
    }
    notes.push(note);
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
    setNotes();
});

function setNotes() {
    notes.forEach((note) => {
        $("main").prepend(`
            <div class="note">
                <h4>${note.title}</h4>
                <span>${note.desc}</span>
            </div>
        `);
    });
}