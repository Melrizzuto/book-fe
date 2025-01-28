import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./contexts/GlobalContext";

import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/Homepage";
import BookDetails from "./pages/BookDetails";
import Form from "./components/Form";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";



function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="books">
              <Route path=":id" Component={BookDetails} />
            </Route>
            <Route path="/form" Component={Form} />
            <Route path="/contact" Component={ContactUs} />
            <Route path="/about" Component={About} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>


  );
}

export default App
