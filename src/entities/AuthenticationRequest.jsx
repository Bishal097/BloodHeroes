import React, { Component } from 'react';

class AuthenticationRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: '',
    };
  }

  // Handle input change
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Handle form submission
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        this.setState({ message: 'Login successful!' });
        console.log('Token:', data.token);
      } else {
        this.setState({ message: data.message || 'Login failed!' });
      }
    } catch (error) {
      console.error('Error:', error);
      this.setState({ message: 'An error occurred. Please try again.' });
    }
  };

  render() {
    const { email, password, message } = this.state;

    return (
      <div style={{ maxWidth: '400px', margin: 'auto' }}>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
              style={{ width: '100%', padding: '8px', margin: '8px 0' }}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
              style={{ width: '100%', padding: '8px', margin: '8px 0' }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
  }
}

export default AuthenticationRequest;
