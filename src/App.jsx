import "./style/main.scss"
import { About, Header } from "./sections"


function App() {

  return (
    <main className="page-main">

      <header className="page-header">
        <Header />
      </header>

      <div className="page-sections__container">
        <About />
      </div>
    </main>
  )
}

export default App
