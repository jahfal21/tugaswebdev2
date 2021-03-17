import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Daftar from './pages/Daftar'
import Login from './pages/Login'
import Beli from './pages/Beli'
import Elektronik from './pages/Elektronik'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/daftar' component={Daftar} />
        <Route path='/login' component={Login} />
        <Route path='/beli' component={Beli} />
        <Route path='/elektronik' component={Elektronik} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
