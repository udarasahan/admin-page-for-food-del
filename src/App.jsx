import Navbar from "./Conponants/Navbar/Navbar"
import Sidebar from "./Conponants/Sidebar/Sidebar"


const App = () => {
  return (
    <div>
        <Navbar />
        <hr />
        <div className="app-content">
          <Sidebar />
        </div>
    </div>
  )
}

export default App