// import GlobalStyles from "./styles/GlobalStyles";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import {
  QueryClient,
  QueryClientProvider,
  // useQuery,
} from "@tanstack/react-query";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Pricing = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

const router = createBrowserRouter([
  //Parent routes
  //no need for path because its only purpose is providing a layout for the application

  {
    element: <AppLayout />,
    //errors that happen in the nested routes will bubble up to the parent routes
    errorElement: <Error />,

    children: [
      //Home route
      {
        path: "/",
        element: <Home />,
      },
      //About route
      {
        path: "/about",
        element: <About />,
      },
      //Join route
      {
        path: "/join",
        element: <Contact />,
      },
      //Contact route
      {
        path: "/contact",
        element: <Contact />,
      },
      //Privacy route
      {
        path: "/privacy",
        element: <Privacy />,
      },
      //Terms route
      {
        path: "/terms",
        element: <Terms />,
      },
      //Pricing route
      {
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      // staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
