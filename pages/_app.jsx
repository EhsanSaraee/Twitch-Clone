import Navbar from '@/components/Navbar';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

const MyApp = ({ Component, pageProps, session }) => {
   return (
      <SessionProvider session={session}>
         <Navbar />
         <Component {...pageProps} />
      </SessionProvider>
   );
};

export default MyApp;
