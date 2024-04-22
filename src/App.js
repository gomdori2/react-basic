import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Animals from "./pages/Animals";
import Animal from "./pages/Animal";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* index == path="/" */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:animals" element={<Profile />} />
      </Route>
      {/* path="/Articles" > 감싼 요소에 path가 /파라매터로 path가 잡힘. */}
      <Route path="/Articles" element={<Articles />}>
        <Route index element={<Navigate replace to="1" />} />
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/Animals" element={<Animals />} />
      {/* outlet으로도 해볼 것  */}
      {/* <Route path="/Animals" element={<Animals />}>
        <Route path="/Animal/:animal" element={<Animal />} />  
      </Route> */}

      <Route path="/Animal/:animal" element={<Animal />} />
    </Routes>
  );
}

export default App;
