// src/layouts/MainL
import Navbar from '../components/Navbar/Navbar';

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        {children}
      </main>
    </>
  );
}


export default MainLayout;
