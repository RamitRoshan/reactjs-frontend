import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, setError, clearError } from '../slices/notesSlice';

export default function Notes() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.notes.error);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      dispatch(setError('Title is required'));
      return;
    }

    if (!description.trim()) {
      dispatch(setError('Description is required'));
      return;
    }

    dispatch(addNote({ title, description }));
    setTitle('');
    setDescription('');
    dispatch(clearError());
    alert('Note added successfully!');
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: '0 auto' }}>
      <h1>Create a Note</h1>
      
      {error && (
        <div style={{ 
          backgroundColor: '#ffebee', 
          color: '#c62828', 
          padding: '10px', 
          marginBottom: '15px',
          borderRadius: '4px'
        }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 15 }}>
          <label htmlFor="title" style={{ display: 'block', marginBottom: 5, fontWeight: 'bold' }}>
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter note title"
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
          <label htmlFor="description" style={{ display: 'block', marginBottom: 5, fontWeight: 'bold' }}>
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter note description"
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

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
