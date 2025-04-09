import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Routes } from '@/routes';
import { NavigationBar } from '@/components/navigation-bar';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="food-share-theme">
  <div className="flex flex-col w-full min-h-screen bg-background">
  <NavigationBar />
        {/* <main className="container px-4 py-8 mx-auto"> */}
        <main className="w-full px-4 py-8 ">
          <Routes />
        </main>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;