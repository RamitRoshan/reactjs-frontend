import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote, updateNote } from '../slices/notesSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function NotesList() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      dispatch(deleteNote(id));
      setSelectedNote(null);
    }
  };

  const handleEditClick = () => {
    setEditTitle(selectedNote.title);
    setEditDescription(selectedNote.description);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (!editTitle.trim()) {
      alert('Title is required');
      return;
    }
    if (!editDescription.trim()) {
      alert('Description is required');
      return;
    }
    
    dispatch(updateNote({
      id: selectedNote.id,
      title: editTitle,
      description: editDescription,
    }));
    
    // Update the selected note with the new data
    setSelectedNote({
      ...selectedNote,
      title: editTitle,
      description: editDescription,
      updatedAt: new Date().toLocaleString(),
    });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  // Detail View
  if (selectedNote) {
    return (
      <div style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
        <button
          onClick={() => setSelectedNote(null)}
          style={{
            backgroundColor: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '10px 15px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            marginBottom: '20px',
            fontSize: '14px',
          }}
        >
          <ArrowBackIcon style={{ fontSize: '18px' }} />
          Back to Notes
        </button>

        {isEditing ? (
          <div style={{
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}>
            <h2>Edit Note</h2>
            <div style={{ marginBottom: 15 }}>
              <label style={{ display: 'block', marginBottom: 5, fontWeight: 'bold' }}>
                Title
              </label>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ marginBottom: 15 }}>
              <label style={{ display: 'block', marginBottom: 5, fontWeight: 'bold' }}>
                Description
              </label>
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                rows="6"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={handleSaveEdit}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#4caf50',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                Save Changes
              </button>
              <button
                onClick={handleCancelEdit}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#757575',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div style={{
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
              <h2 style={{ margin: 0, color: '#1976d2' }}>{selectedNote.title}</h2>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={handleEditClick}
                  style={{
                    backgroundColor: '#ff9800',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <EditIcon style={{ fontSize: '18px' }} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(selectedNote.id)}
                  style={{
                    backgroundColor: '#f44336',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <DeleteIcon style={{ fontSize: '18px' }} />
                  Delete
                </button>
              </div>
            </div>

            <div style={{ lineHeight: '1.8', marginBottom: '20px', color: '#333' }}>
              {selectedNote.description}
            </div>

            <div style={{
              backgroundColor: '#f5f5f5',
              padding: '15px',
              borderRadius: '4px',
              borderLeft: '4px solid #1976d2',
            }}>
              <p style={{ margin: '5px 0', color: '#666' }}>
                <strong>Created:</strong> {selectedNote.createdAt}
              </p>
              <p style={{ margin: '5px 0', color: '#666' }}>
                <strong>Last Updated:</strong> {selectedNote.updatedAt}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // List View
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
              onClick={() => setSelectedNote(note)}
              style={{
                backgroundColor: '#f5f5f5',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 10px 0', color: '#1976d2' }}>{note.title}</h3>
                  <p style={{ 
                    margin: '0 0 10px 0', 
                    color: '#333', 
                    lineHeight: '1.6',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}>
                    {note.description}
                  </p>
                  <small style={{ color: '#999' }}>
                    Created: {note.createdAt}
                  </small>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(note.id);
                  }}
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
