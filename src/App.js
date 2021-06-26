import AppRouter from "./App.Router";
import AuthProvider from "./AuthProvider";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
