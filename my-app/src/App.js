import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import NavBarForms from './components/NavBarForms';

function App() {
  return(
    <div className={css.App}>
      <Sidebar />
      {/* <NavBarSimple /> */}
      <NavBarForms />
    </div>
  );
}

export default App;