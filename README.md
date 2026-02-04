# Material UI Quiz Dashboard

This project is a responsive quiz-based dashboard developed using React and Material UI. The objective of this project is to demonstrate how a modern frontend application can be built using component-based architecture, theme customization, and responsive layouts.

The application consists of the following main sections:

- **Top Navigation Bar (AppBar)**  
  Displays the project title and includes a toggle button to switch between light and dark themes using Material UI’s ThemeProvider.

- **Sidebar Navigation (Drawer)**  
  Provides navigation options to switch between Quiz 1 and Quiz 2. The sidebar is collapsible and improves usability on smaller screens.

- **Main Content Area**  
  Dynamically displays quiz content based on the selected option from the sidebar.

Instead of showing static or random UI elements, the dashboard contains two functional quizzes. Quiz 1 is displayed on the home screen, while Quiz 2 can be accessed through the sidebar navigation. Each quiz consists of multiple-choice questions, and the final score is displayed after the quiz is completed.

The quiz functionality is implemented using a reusable Quiz component. This component manages the current question, handles user responses, updates the score, and determines quiz completion. Navigation between different views is handled using React state without using external routing libraries to keep the project simple and focused.

Material UI Grid is used to make the application fully responsive. The layout automatically adapts for mobile, tablet, and desktop devices using breakpoint-based grid layouts. Styling and visual enhancements are applied using Material UI theming along with a separate CSS file for better structure and readability.

This project was developed as part of an academic experiment to demonstrate responsive UI design, effective use of Material UI components, state management in React, and the integration of UI with basic application logic.

~To run the project locally, install the dependencies using `npm install` and start the application using `npm start`. The application runs on `http://localhost:3000`.
