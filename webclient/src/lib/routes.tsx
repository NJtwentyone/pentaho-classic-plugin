import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

/* INJECT_IMPORTS */
const ListView = lazy(() => import("pages/ListView"));
const Form = lazy(() => import("pages/Form"));
const DetailsView = lazy(() => import("pages/DetailsView"));
const AssetInventory = lazy(() => import("pages/AssetInventory")); 

const NotFound = lazy(() => import("pages/NotFound"));

const AppRoutes = () => (
  <Routes>
    {/* INJECT_ROUTES */}
    <Route path="/list-view" element={<ListView />} />
    <Route path="/form" element={<Form />} />
    <Route path="/details-view" element={<DetailsView />} />
    <Route path="/asset-inventory" element={<AssetInventory />} />
    
    <Route path="/*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
