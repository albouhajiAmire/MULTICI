import "./assets/css/general.css";
import "./assets/css/style.css";
import "./assets/css/styleMessage.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/login";
import FormEmpl from "./webOffice/form/FormEmpl";
import Register from "./auth/Register";
import Home from "./webOffice/pages/pagehome/Home";
import Aboutpage from "./webOffice/pages/pageabout/Aboutpage";
import Sustainabilitypage from "./webOffice/pages/pagesustainability/Sustainabilitypage";
import Help from "./webOffice/components/help/Help";
import Confirm from "./webOffice/pages/confirmepage/Confirm";
import NotFound from "./webOffice/pages/404/NotFound";
import './assets/css/loader.css';
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import IndexPage from "./webOffice/components/indexPage";
import store, { persist } from "./webOffice/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { io } from "socket.io-client";
import Forgot from "./auth/Forgot";
import Profil from "./webOffice/pages/profil/Profil";
import ContactPage from "./webOffice/pages/contacts/ContactPage";
import { Host } from "./webOffice/axios/common/apiEndPoint";


const Chats = lazy(() => import("./webOffice/components/chat/chats"));

function App() {
  const socket = io(Host.BACKEND);
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home socket={socket}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/emploi" element={<FormEmpl />} />
            <Route path="/register" element={<Register />} />
            <Route path="/proposnous" element={<Aboutpage socket={socket}/>} />
            <Route path="/contact" element={<ContactPage socket={socket}/>} />
            <Route path="/durabilite" element={<Sustainabilitypage socket={socket}/>} />
            <Route path="/comment-nous-aidons" element={<Help socket={socket}/>} />
            <Route path="/confirmer/:id" element={<Confirm />} />
            <Route path="/404-not-found" element={<NotFound />} />
            <Route path="/profile" element={<Profil />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/forgotpassword" element={<Forgot />} />
            <Route
              path="/chat"
              element={
                <Suspense fallback={<IndexPage />}>
                  <Chats socket={socket} />
                </Suspense>
              }
            />
            <Route
              path="/chat/:id/:v"
              element={
                <Suspense fallback={<IndexPage />}>
                  <Chats socket={socket} />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
