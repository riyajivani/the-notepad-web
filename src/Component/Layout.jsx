import React from 'react'
import Header from './Header'
import Footer from './Footer';

const Layout = ({ children, showHeader = true, showFooter = false }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {showHeader && (
        <Header />
      )}
      <main className="hide-scrollbar">{children}</main>

        {showFooter &&
          (
            <Footer />
          )}
    </div>
  );
};

export default Layout