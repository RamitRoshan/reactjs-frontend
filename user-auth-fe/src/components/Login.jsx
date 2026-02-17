import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector} from 'react-redux'; 
import { loginUser } from '../slices/authSlice'; 
import Joi from 'joi';

function Login() {

  const error = useSelector((state) => {
      return state.auth.error;
    });
  
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  // Define Joi schema
  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be a valid email address'
    }),
    password: Joi.string().required().messages({
      'string.empty': 'Password is required'
    })
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const redirect = () => {
      navigate('/dashboard'); 
    }

    // Validate form data
    const { error } = schema.validate(formData, { abortEarly: false });
    
    if (error) {
      // Map errors to field names
      const validationErrors = {};
      error.details.forEach((detail) => {
        validationErrors[detail.path[0]] = detail.message;
      });
      setErrors(validationErrors);
    } else {
      // Validation passed
      console.log('Login Data:', formData);
      dispatch(loginUser({ formData, redirect})); 
      setErrors({});
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Login Page</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ 
              width: '100%', 
              padding: '8px', 
              fontSize: '14px',
              borderRadius: '4px',
              border: errors.email ? '1px solid red' : '1px solid #ccc'
            }}
          />
          {errors.email && (
            <span style={{ color: 'red', fontSize: '12px', display: 'block', marginTop: '5px', textAlign: 'left' }}>
              {errors.email}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ 
              width: '100%', 
              padding: '8px', 
              fontSize: '14px',
              borderRadius: '4px',
              border: errors.password ? '1px solid red' : '1px solid #ccc'
            }}
          />
          {errors.password && (
            <span style={{ color: 'red', fontSize: '12px', display: 'block', marginTop: '5px', textAlign: 'left' }}>
              {errors.password}
            </span>
          )}
        </div>

        <button 
          type="submit" 
          style={{ 
            padding: '10px', 
            fontSize: '16px', 
            backgroundColor: '#646cff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
 

 
 