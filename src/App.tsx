
import './App.css';
import {Product,About,Header,Home,Footer,Contact} from './components';
import {Redirect,Route,Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
     <Header/>
     <Switch>
       <Route    exact path="/"         component = {Home} />
       <Route    exact path="/products" component = {Product} />
       <Route    exact path="/products/:id" component = {ProductDetail} />
       <Route    exact path="/checkout" component = {Checkout} />
       <Route    exact path="/cart"     component={Cart} />
       <Route    exact path="/about"    component = {About} />
       <Route    exact path="/contact"  component = {Contact}  />
       <Redirect to="/" />
     </Switch>
     <Footer />
    </>
  );
}

export default App;
