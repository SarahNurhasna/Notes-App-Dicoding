import NoteAPI from '../data/remote/notesAPI.js';
import Utils from '../utils.js';
import anime from 'animejs/lib/anime.es.js';

const home = () => {
  const unArchivedNoteContainer = document.querySelector('#unArchivedNoteContainer');
  const unArchivedNoteList = unArchivedNoteContainer.querySelector('note-list');
  const unArchivedLoadingIndicator = document.querySelector(
    '#unArchivedNoteContainer loading-indicator',
  );

  const archivedNoteContainer = document.querySelector('#archiveNoteContainer');
  const archivedNoteList = archivedNoteContainer.querySelector('note-list');
  const archivedLoadingIndicator = document.querySelector(
    '#archiveNoteContainer loading-indicator',
  );
  const noteForm = document.querySelector('note-form');

  const displayUnArchivedResult = (notes) => {
    const unArchivedNoteElements = notes.map((note) => {
      const unArchivedNoteElement = document.createElement('note-item');
      unArchivedNoteElement.note = note;
      unArchivedNoteElement.classList.add('animate-on-add');
      unArchivedNoteElement.setAttribute('note-id', note.id);

      return unArchivedNoteElement;
    });

    Utils.emptyElement(unArchivedNoteList);
    unArchivedNoteList.append(...unArchivedNoteElements);

    anime({
      targets: '.animate-on-add',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutQuad',
      duration: 1000,
      complete: function (anim) {
        unArchivedNoteElements.forEach((el) => el.classList.remove('animate-on-add'));
      },
    });
  };

  const displayArchivedResult = (notes) => {
    const archivedNoteElements = notes.map((note) => {
      const archivedElement = document.createElement('note-item');
      archivedElement.note = note;
      archivedElement.classList.add('animate-on-add');
      archivedElement.setAttribute('note-id', note.id);

      return archivedElement;
    });

    Utils.emptyElement(archivedNoteList);
    archivedNoteList.append(...archivedNoteElements);

    anime({
      targets: '.animate-on-add',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutQuad',
      duration: 1000,
      complete: function (anim) {
        archivedNoteElements.forEach((el) => el.classList.remove('animate-on-add'));
      },
    });
  };

  const showUnArchivedNotes = async () => {
    unArchivedLoadingIndicator.style.display = 'block';

    Utils.emptyElement(unArchivedNoteList);

    try {
      const data = await NoteAPI.getUnArchivedNotes();
      if (data.length > 0) {
        displayUnArchivedResult(data);
        unArchivedLoadingIndicator.style.display = 'none';
      } else {
        console.log('No unarchived notes found');
        unArchivedLoadingIndicator.style.display = 'block';
      }
    } catch (error) {
      console.error('Error showing unarchived notes:', error);
    }
  };

  const showArchivedNotes = async () => {
    archivedLoadingIndicator.style.display = 'block';
    Utils.emptyElement(archivedNoteList);

    try {
      const data = await NoteAPI.getArchivedNotes();
      if (data.length > 0) {
        displayArchivedResult(data);
        archivedLoadingIndicator.style.display = 'none';
      } else {
        console.log('No archived notes found');
        archivedLoadingIndicator.style.display = 'block';
      }
    } catch (error) {
      console.error('Error showing archived notes:', error);
    }
  };

  noteForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { title, body } = event.detail;

    try {
      const newNote = {
        title: title,
        body: body,
      };
      await NoteAPI.addNote(newNote);
      await showUnArchivedNotes();
      await showArchivedNotes();
    } catch (error) {
      console.error('Error adding new note:', error);
    }
  });

  unArchivedNoteList.addEventListener('deleteNote', async (event) => {
    const noteId = event.detail.noteId;
    try {
      await NoteAPI.deleteNote(noteId);
      const noteItem = unArchivedNoteList.querySelector(`note-item[note-id="${noteId}"]`);
      if (noteItem) noteItem.remove();
      await showUnArchivedNotes();
      await showArchivedNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  });

  archivedNoteList.addEventListener('deleteNote', async (event) => {
    const noteId = event.detail.noteId;
    try {
      await NoteAPI.deleteNote(noteId);
      const noteItem = archivedNoteList.querySelector(`note-item[note-id="${noteId}"]`);
      if (noteItem) noteItem.remove();
      await showUnArchivedNotes();
      await showArchivedNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  });

  unArchivedNoteList.addEventListener('moveNote', async (event) => {
    const note = event.detail;
    try {
      const noteItem = unArchivedNoteList.querySelector(`note-item[note-id="${note.id}"]`);
      if (noteItem) {
        noteItem.note.archived = true;
        await NoteAPI.moveToArchivedNote(note);
        await showUnArchivedNotes();
        await showArchivedNotes();
      }
    } catch (error) {
      console.error('Error moving note:', error);
    }
  });

  archivedNoteContainer.addEventListener('moveNote', async (event) => {
    const note = event.detail;
    try {
      const noteItem = archivedNoteContainer.querySelector(`note-item[note-id="${note.id}"]`);
      if (noteItem) {
        noteItem.note.archived = false;
        await NoteAPI.moveToUnArchivedNote(note);
        await showUnArchivedNotes();
        await showArchivedNotes();
      }
    } catch (error) {
      console.error('Error moving note:', error);
    }
  });

  showUnArchivedNotes();
  showArchivedNotes();
};

export default home;
