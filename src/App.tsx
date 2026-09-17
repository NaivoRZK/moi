import NavBar from './components/disposition/NavBar';
import Home from './pages/Home';
import Projets from './pages/Projets';
import Experiences from './pages/Experiences';
import Services from './pages/Services';
import Contacts from './pages/Contacts';

export default function App() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        <section id="accueil"><Home /></section>
        <section id="projets"><Projets /></section>
        <section id="experiences"><Experiences /></section>
        <section id="services"><Services /></section>
        <section id="contacts"><Contacts /></section>
      </main>
    </>
  );
}
