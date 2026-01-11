# Problem Statement: User Authentication System

Develop a React application to implement a user authentication system. The application should include the following fucntionalities:

   1. **Login Page:**
   
        - A form with fields for entering a username and password.
        - A "Login" button to submit the form and authenticate the user.
  

  
   2. **Authentication:**
          
        - Validate user credentials against a predefined list of three sample users.
        - Sample user credentials:
  
             - User 1: Username: user1, Password: password1
             - User 2: Username: user2, Password: password2
             - User 3: Username: user3, Password: password3
  
  3. **Dashboard:**
         
        - Upon successful login, redirect to a dashboard page that displays the logged-in user's details. 

  4. **Profile Page:**

        - A profile page that displays the logged-in user's ID, username, and a masked version of their password.
        - Provide a link to the profile page from the dashboard.

   5. **Logout:**

        - Provide a "Logout" button on the dashboard and profile pages to log the user out and redirect them back to the login page. 

   6. **Navigation Links:**

        - Ensure navigation links for "Login", "Dashboard", and "Profile" are available and correctly manage access based on the user's authentication status.
        - Prevent access to the dashboard and profile pages if the user is not logged in.