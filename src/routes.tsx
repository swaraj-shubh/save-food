import { Home } from '@/pages/home';
import { Donate } from '@/pages/donate';
import { Find } from '@/pages/find';
import { About } from '@/pages/about';
//import { LogIn } from 'lucide-react';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';


export function Routes() {
  // TODO: Replace with proper router
  const path = window.location.pathname;

  switch (path) {
    case '/auth/login':
      return <Login />;
    case '/auth/register':
      return <Register />;
    case '/donate':
      return <Donate />;
    case '/find':
      return <Find />;
    case '/about':
      return <About />;
    default:
      return <Home />;
  }
}