import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./contexts/GlobalContext";
import '@fortawesome/fontawesome-free/css/all.min.css';
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/Homepage";
import BookDetails from "./pages/BookDetails";
import Form from "./components/Form";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import LogInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/books" Component={HomePage} />
            <Route path="/books/:id" Component={BookDetails} />
            <Route path="/form" Component={Form} />
            <Route path="/contact" Component={ContactUs} />
            <Route path="/about" Component={About} />
            <Route path="/login" Component={LogInPage} />
            <Route path="/register" Component={RegisterPage} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
