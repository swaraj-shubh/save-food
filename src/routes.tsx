import { Home } from '@/pages/home';
import { Donate } from '@/pages/donate';
import { Find } from '@/pages/find';
import { About } from '@/pages/about';

export function Routes() {
  // TODO: Replace with proper router
  const path = window.location.pathname;

  switch (path) {
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