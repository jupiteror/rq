import { Route, Routes } from "react-router";
import { ROUTES } from "./config/routes";
import { Suspense } from "react";

const AppRouter = () => {
  return (
    <Routes>
      {ROUTES.map(({ path, element, layout: Layout }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Suspense fallback={"load..."}>{element}</Suspense>
            </Layout>
          }
        />
      ))}
    </Routes>
  );
};
export default AppRouter;
