import Sidebar from './components/sidebar'
import Dashboard from './components/dashboard'
import Navbar from './components/navbar'

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar/>
        <div className="main">
          <Navbar/>
          <Dashboard/>
        </div>
      </div>
    </>
  )
}

export default App
