const baseURL = 'https://notes-api.dicoding.dev/v2';

class NoteAPI {
  static async getUnArchivedNotes() {
    try {
      const response = await fetch(`${baseURL}/notes`);
      const responseJson = await response.json();

      if (responseJson.error) {
        throw new Error('Failed to fetch unArchived notes');
      } else {
        const unarchivedNotes = responseJson.data.filter((note) => note.archived === false);
        if (unarchivedNotes.length === 0) {
          throw new Error('Warning! No unArchived notes found');
        } else {
          console.log(unarchivedNotes);
          return unarchivedNotes;
        }
      }
    } catch (error) {
      throw error;
    }
  }

  static async getArchivedNotes() {
    try {
      const response = await fetch(`${baseURL}/notes/archived`);
      const responseJson = await response.json();

      if (responseJson.error) {
        throw new Error('Failed to fetch archived notes');
      } else {
        const archivedNotes = responseJson.data.filter((note) => note.archived === true);
        if (archivedNotes.length === 0) {
          throw new Error('Warning! No Archived notes found');
        } else {
          console.log(archivedNotes);
          return archivedNotes;
        }
      }
    } catch (error) {
      throw error;
    }
  }

  static async addNote(note) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      };
      const response = await fetch(`${baseURL}/notes`, options);
      const responseJson = await response.json();

      if (responseJson.error) {
        throw new Error('Failed to add new note: ' + responseJson.error.message);
      } else {
        alert('Note added successfully!');
        return responseJson;
      }
    } catch (error) {
      alert('Error adding note: ' + error.message);
      throw error;
    }
  }

  static async deleteNote(noteId) {
    try {
      const options = {
        method: 'DELETE',
      };

      const response = await fetch(`${baseURL}/notes/${noteId}`, options);
      const responseJson = await response.json();

      if (responseJson.error) {
        throw new Error('Failed to delete note: ' + responseJson.error.message);
      } else {
        alert('Note deleted successfully!');
      }
    } catch (error) {
      alert('Error deleting note: ' + error.message);
      throw error;
    }
  }

  static async moveToUnArchivedNote(note) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      };

      const response = await fetch(`${baseURL}/notes/${note.id}/unarchive`, options);
      const responseJson = await response.json();

      if (responseJson.error) {
        throw new Error('Failed to move unArchived note: ' + responseJson.error.message);
      } else {
        alert('Note moved to unArchived successfully!');
      }
    } catch (error) {
      alert('Error moving note to unArchived: ' + error.message);
      throw error;
    }
  }

  static async moveToArchivedNote(note) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      };

      const response = await fetch(`${baseURL}/notes/${note.id}/archive`, options);
      const responseJson = await response.json();

      if (responseJson.error) {
        throw new Error('Failed to move archived note: ' + responseJson.error.message);
      } else {
        alert('Note moved to archived successfully!');
        return responseJson;
      }
    } catch (error) {
      alert('Error moving note to archived: ' + error.message);
      throw error;
    }
  }
}

export default NoteAPI;
