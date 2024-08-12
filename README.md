React Native Authentication & Navigation App
This project is a React Native application designed to demonstrate user authentication and navigation using Firebase. The app allows users to sign up, log in, and navigate between different screens. It includes a basic structure for an authentication flow and a home screen after successful login.

Features
User Authentication: Users can sign up and log in using their email and password. The authentication process is handled using Firebase Authentication.
Navigation: The app uses @react-navigation/native-stack to manage navigation between screens.
Conditional Rendering: Depending on the authentication state, users are either presented with the login/signup screen or the home screen.
Logout Functionality: Users can log out from the home screen, which will redirect them back to the authentication screens.
Installation
Clone the repository:

bash
Kodu kopyala
git clone https://github.com/yourusername/your-repo-name.git
Navigate to the project directory:

bash
Kodu kopyala
cd your-repo-name
Install dependencies:

bash
Kodu kopyala
npm install
Set up Firebase:

Create a new project in Firebase Console.
Enable Email/Password authentication in Firebase Authentication.
Replace the API_KEY in the project with your Firebase API key.
Run the app:

bash
Kodu kopyala
npx react-native run-android
npx react-native run-ios
Project Structure
/Screens

LoginScreen.tsx: Screen for user login.
SignupScreen.tsx: Screen for user registration.
HomeScreen.tsx: The main screen that users see after logging in.
/Components

OutButton.tsx: A custom button component used for logging out.
/store

AuthContext.ts: Context for managing authentication state.
/navigators

AuthStack.ts: Handles navigation for authentication screens.
HomeStack.ts: Handles navigation for the home screen.
RootNavigator.ts: The main navigator that switches between AuthStack and HomeStack based on authentication state.
Usage
Sign Up: Create a new account by entering an email and password on the signup screen.
Log In: Log into your account using the credentials you created.
Navigate: After logging in, you will be taken to the home screen.
Log Out: Use the logout button on the home screen to sign out.
License
This project is licensed under the MIT License - see the LICENSE file for details.
