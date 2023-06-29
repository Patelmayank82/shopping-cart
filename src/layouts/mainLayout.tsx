import { Outlet } from 'react-router-dom'


type Props = {}

const MainLayout = (props: Props) => {
  return (
  <>
   <header>header</header>
    <main>
        <Outlet />
    </main>
   <footer>footer</footer>
   </>
  )
}

export default MainLayout