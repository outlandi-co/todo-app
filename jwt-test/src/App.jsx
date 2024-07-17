import Header from './components/Header';
import SignInSignUp from './components/SignInSignUp';
import TaskList from './components/TaskList';
import AuthProvider from './context/AuthProvider';
import Settings from './components/Settings';
import Auth from './components/Auth';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Header />
      <SignInSignUp />
      <Auth />
      <TaskList />
      <Settings />
    </AuthProvider>
  );
}

export default App;
