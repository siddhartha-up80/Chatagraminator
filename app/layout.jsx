import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";

export const metadata = {
  title: "Chatagram",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="" />
        </div>

        <main className="app">
          <Nav />
          {children}
          <Footer/>
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
