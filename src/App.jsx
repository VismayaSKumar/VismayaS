import Header from './Components/Header'
import Home from './Components/Home'

function App() {

  return (
    <>
    <div className='w-full min-h-screen py-[16px] md:py-[24px] px-[16px] md:px-[130px] bg-accent font-primary'>
      <Header />
      <Home/>
    </div>     
    </>
  )
}

export default App
