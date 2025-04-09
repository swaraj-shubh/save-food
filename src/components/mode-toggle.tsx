import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/theme-provider';

export function ModeToggle() {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="ghost" size="sm" className="w-8 h-8 px-0">
    //       <Sun className="w-4 h-4 text-white transition-all scale-100 rotate-0 hover:text-black dark:-rotate-90 dark:scale-0" />
    //       <Moon className="absolute w-4 h-4 transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme('light')}>
    //       <Sun className="w-4 h-4 mr-2" />
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme('dark')}>
    //       <Moon className="w-4 h-4 mr-2" />
    //       Dark
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>

    <div className="flex items-center gap-2">
      {/* <Button
        variant="ghost"
        size="sm"
        className="w-8 h-8 p-0"
        onClick={() => {
          setTheme("light")}

        }
      >
        <Sun className="w-4 h-4 text-yellow-400 hover:text-yellow-500" />
        <span className="sr-only">Set Light Theme</span>
      </Button>

      <Button
        variant="ghost"
        size="sm"
        className="w-8 h-8 p-0"
        onClick={() => setTheme("dark")}
      >
        <Moon className="w-4 h-4 text-blue-400 hover:text-blue-500" />
        <span className="sr-only">Set Dark Theme</span>
      </Button> */}


    <Button
      onClick={toggleTheme}
      className="relative w-8 h-8 p-1 mr-2 transition-colors rounded-md hover:bg-muted"
    >
      <Sun className="w-4 h-4 text-yellow-400 transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute w-4 h-4 text-blue-400 transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
    </div>

  );
}