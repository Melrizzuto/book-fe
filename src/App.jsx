import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/Homepage";
import BookDetails from "./pages/BookDetails";
import Form from "./components/Form";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/books">
            <Route index Component={HomePage} />
            <Route path=":id" Component={BookDetails} />
          </Route>
          <Route path="/form" Component={Form} />
          <Route path="/contact" Component={ContactUs} />
          <Route path="/about" Component={About} />
        </Route>
        <Route path="/NotFound" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
