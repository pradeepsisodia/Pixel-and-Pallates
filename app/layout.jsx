import "@styles/globals.css";
import Provider from "@components/Provider";

export const metadata = {
  title: "Pixel and Pallates: A Virtual Canvas",
  description: "Discover and Share Art",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
};

export default layout;
