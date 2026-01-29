import { lazy,Suspense } from "react";
const Home=lazy(()=>import('./page/Home'))

function App() {
  return (
    <div>
    <Suspense fallback={<h2>Loading...</h2>}>
    <Home/>
      </Suspense>      
    </div>
  )
}

export default App
