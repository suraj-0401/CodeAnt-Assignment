import AuthPage from './components/auth';
import RepositoryView from './components/repositories/RepositoryView';
function App() {
  return (
    <div className="App">
      <RepositoryView/>
      <AuthPage/>
    </div>
  );
}

export default App;
