import AppSidebar from "./components/AppSidebar";
import ArticlePage from "./components/articles/ArticlePage";
import Navbar from "./components/Navbar";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <Navbar />
          <ArticlePage />
        </main>
    </SidebarProvider>
  );
}

export default App;
