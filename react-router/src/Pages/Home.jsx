import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>go to <Link to="/contact">contact page</Link></h2>
    </div>
  )
}

export default Home
