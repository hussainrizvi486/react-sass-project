import "./style/main.scss"
import { About, Header, Experience } from "./sections"



function App() {

  return (
    <main className="page-main">

      <header className="page-header">
        <Header />
      </header>

      <div className="page-sections__container">
        <About />
        <Experience />
      </div>
    </main>
  )
}

export default App
