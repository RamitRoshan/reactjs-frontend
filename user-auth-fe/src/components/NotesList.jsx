import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../slices/notesSlice';
import DeleteIcon from '@mui/icons-material/Delete';

export default function NotesList() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      dispatch(deleteNote(id));
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 1000, margin: '0 auto' }}>
      <h1>My Notes</h1>

      {notes.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666', fontSize: '16px' }}>
          No notes yet. Create one to get started!
        </p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {notes.map((note) => (
            <div
              key={note.id}
              style={{
                backgroundColor: '#f5f5f5',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 10px 0', color: '#1976d2' }}>{note.title}</h3>
                  <p style={{ margin: '0 0 10px 0', color: '#333', lineHeight: '1.6' }}>
                    {note.description}
                  </p>
                  <small style={{ color: '#999' }}>
                    Created: {note.createdAt}
                  </small>
                </div>
                <button
                  onClick={() => handleDelete(note.id)}
                  style={{
                    backgroundColor: '#f44336',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '6px 10px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    marginLeft: '10px',
                  }}
                >
                  <DeleteIcon style={{ fontSize: '18px' }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
