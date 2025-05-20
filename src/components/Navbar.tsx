import { SidebarTrigger } from "./ui/sidebar"

const Navbar = () => {
  return (
    <nav className="px-2 sticky top-0 bg-background z-10">
        <SidebarTrigger />
    </nav>
  )
}

export default Navbar