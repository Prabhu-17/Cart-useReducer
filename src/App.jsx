// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './Context';

function App() {
  const {Loading}=useGlobalContext()
  if(Loading){
    return <main>
      <div className="loading" style={{marginTop:'9rem'}}></div>
    </main>
  }
  return (
    <main>

      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
