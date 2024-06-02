import { Link } from 'react-router-dom'
import './index.css'
function Home() {
  return (
   <>
    <div className="flex">
    <button>
    <Link to="/login">Login</Link>
   </button>
   <br />
   <button>
   <Link to="/register">Register</Link>
   </button>
    </div>
   </>
  )
}

export default Home