import Ident from './Ident'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'


function App() {
  return (
    <div className="App">
      <Ident/>
      <div class = 'main'>
        <About/>
        <Interests/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
