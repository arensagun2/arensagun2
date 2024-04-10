import { NavBar } from './components/NavBar';
import ThemeSwitch from './components/ThemeSwitch';

export default function Home({ children }: { children : React.ReactNode }) {
  return (
    <main className='h-screen'>
      <NavBar />
      <ThemeSwitch />
    </main>
  );
}
