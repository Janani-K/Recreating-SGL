import HomePage from "./Component/Layout/HomePage"
import LGAnalysis from "./Component/Pages/LGAnalysis";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Dashboard from "./Component/Pages/Dashboard";
import NotFound from "./Component/Pages/NotFound";
import AccountSettings from "./Component/Pages/AccountSettings";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
      <Route index element={<Dashboard />} />
      <Route path='/LightGrowthAnalysis' element={<LGAnalysis />} />
      {/* <Route path="1" element={ }/> */}
      {/* </Route> */}
      <Route path='/Account/Settings' element={<AccountSettings />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

const App = () => {

  return (
    <RouterProvider router={router} />
  );

}

export default App;
