// import LatestRelease from './LatestRelease';
import MyNav from './MyNav';
import Welcome from './Welcome';
import Footer from './Footer';
import LatestRelease from './LatestRelease';



function App() {
  return (
    <div className="App">
      <header className="">
        <MyNav />
      </header>
      <main>
        <Welcome />
        <LatestRelease />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;