//import ReactLogo from '../logo.svg'
import '../styles/header.css'

/*export default function Header () {
  return (
    <header className='headerContainer'>
      <h1>Les composants React</h1>
      <img src={ReactLogo} alt='Logo React' />
    </header>
  )
}*/

// Composant parent qui affiche une liste de noms d’utilisateurs
export default function ListeUtilisateurs() {
  const utilisateurs = ['Alice', 'Bob', 'Charlie'];

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ListeNoms utilisateurs={utilisateurs} />
    </div>
  );
}

// Composant enfant qui affiche les noms d’utilisateurs
function ListeNoms(props) {
  const { utilisateurs } = props;

  return (
    <ul>
      {utilisateurs.map(utilisateur => (
        <li key={utilisateur}>{utilisateur}</li>
      ))}
    </ul>
  );
}
