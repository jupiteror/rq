import { Route, Routes } from "react-router";
import { Suspense } from "react";
import { ROUTES } from "@/app/rounting/routes.tsx";

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
