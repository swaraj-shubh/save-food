import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Heart, Home, LogIn, Menu, PlusCircle, UserPlus } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <Heart className="h-6 w-6 fill-primary text-primary" />
            <span className="hidden font-bold sm:inline-block">
              FoodShare
            </span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/"
            >
              Home
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/donate"
            >
              Donate Food
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/find"
            >
              Find Food
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/about"
            >
              About Us
            </a>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>FoodShare</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-4">
              <a
                className="flex items-center gap-2 text-lg font-medium"
                href="/"
              >
                <Home className="h-5 w-5" />
                Home
              </a>
              <a
                className="flex items-center gap-2 text-lg font-medium"
                href="/donate"
              >
                <PlusCircle className="h-5 w-5" />
                Donate Food
              </a>
              <a
                className="flex items-center gap-2 text-lg font-medium"
                href="/find"
              >
                <Heart className="h-5 w-5" />
                Find Food
              </a>
              <a
                className="flex items-center gap-2 text-lg font-medium"
                href="/about"
              >
                <UserPlus className="h-5 w-5" />
                About Us
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="mr-2 hidden md:flex">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
            <Button size="sm" className="hidden md:flex">
              Register
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}