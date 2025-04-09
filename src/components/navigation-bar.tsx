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
      <div className="container flex items-center h-16">
        <div className="hidden mr-4 md:flex">
          <a className="flex items-center mr-6 space-x-2" href="/">
            <Heart className="w-6 h-6 fill-primary text-primary" />
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
              className="px-0 mr-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="w-6 h-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>FoodShare</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col mt-4 space-y-4">
              <a
                className="flex items-center gap-2 text-lg font-medium"
                href="/"
              >
                <Home className="w-5 h-5" />
                Home
              </a>
              <a
                className="flex items-center gap-2 text-lg font-medium"
                href="/donate"
              >
                <PlusCircle className="w-5 h-5" />
                Donate Food
              </a>
              <a
                className="flex items-center gap-2 text-lg font-medium"
                href="/find"
              >
                <Heart className="w-5 h-5" />
                Find Food
              </a>
              <a
                className="flex items-center gap-2 text-lg font-medium"
                href="/about"
              >
                <UserPlus className="w-5 h-5" />
                About Us
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center justify-between flex-1 space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            <a href="/auth/login">
              <Button variant="ghost" size="sm" className="hidden mr-2 md:flex">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </a>

            <a href="/auth/register">
              <Button size="sm" className="hidden md:flex">
                Register
              </Button>
            </a>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}