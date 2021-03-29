import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import "./css/App.css";
import { NavBar, Footer } from "./components";
import { Home } from "./pages/HomePage/Home";
import { Manga } from "./pages/MangaPage/Manga";
import { Read } from "./pages/MangaPage/Read";
import { SearchResult } from "./pages/SearchResult/SearchResult";
import { PageNotFound } from "./pages/SearchResult/PageNotFound";
import { UploadManga } from "./pages/Upload/UploadManga";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/Login/SignUp";
import { ForgotPassword } from "./pages/Login/ForgotPassword";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState("");

  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Router>
      <UserContext.Provider value={providerUser}>
        <GlobalStyle />
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path={"/Manga/:manganame"} exact component={Manga} />
          <Route path={"/Manga/:manganame/:chapter"} exact component={Read} />
          <Route path={"/Manga"} exact component={Home} />
          <Route path={"/upload"} exact component={UploadManga} />
          <Route path={"/login"} exact component={Login} />
          <Route path={"/sign-up"} exact component={SignUp} />
          <Route path={"/forgot-password"} exact component={ForgotPassword} />
          <Route path={"/Search"} exact component={Home} />
          <Route path={"/Search/:yearMade"} exact component={SearchResult} />
          <Route component={PageNotFound} />
        </Switch>
      </UserContext.Provider>
      <Footer />
    </Router>
  );
}

export default App;
