# Frontend Developer Assignment: Multi-Step Form with React
# Objective
This project is part of an internship assignment aimed at creating a responsive multi-step form using React.js. The form is designed to handle data validation, error handling, navigation controls, and persistent data storage.

# Deployed Version
You can access the deployed version of this project at http://Pankajs53.github.io/frontend-developer-assignment-multi-step-form.

# Requirements
 # Form Structure:

# Implement a multi-step form with three steps:
Step 1: Personal Information (Name, Email, Phone)
Step 2: Address Information (Address Line 1, Address Line 2, City, State, Zip Code)
Step 3: Confirmation (Review all entered data)

# Navigation and Buttons:
Use tabbed navigation to switch between steps.
Disable the back button on the first step.
Disable the next button on the last step and replace it with a submit button.

# Validation:
Implement client-side validation to ensure all fields are filled before allowing navigation to the next step.
Display appropriate error messages if fields are empty or invalid (e.g., email format).
Highlight fields with errors.

# State Management:
Manage form data using React state.
Utilize hooks like useState and useEffect for managing state updates based on user inputs and form navigation.

# Local Storage:
Persist entered data to local storage when the user navigates between steps.
Retrieve and pre-fill form fields if the user revisits the form.

# Responsive Design:
Ensured the form is responsive and works well on desktop, tablet, and mobile screens.
Use appropriate CSS (possibly with a CSS framework like Bootstrap or Material UI) for layout and responsiveness.

# Setup Instructions

# Clone the Repository:
1. git clone https://github.com/your-username/frontend-developer-assignment-multi-step-form.git
2. cd frontend-developer-assignment-multi-step-form

# Install Dependencies:
1. npm install

# Run the Application:
npm start
This command will start the development server. Open http://localhost:3000 to view the application in your browser.




