import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "./Login";

import { useAuthState } from "react-firebase-hooks/auth";

const AppRouter = ({ auth, login, firestore }) => {
    const [user] = useAuthState(auth);
    return user ? (
        <Routes>
            <Route
                path="/chat"
                element={<App auth={auth} firestore={firestore} user={user} />}
            />
            <Route path="*" element={<Navigate to="/chat" replace />} />
        </Routes>
    ) : (
        <Routes>
            <Route path="/" element={<Login auth={auth} login={login} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRouter;
