import App from "./App";
import Home from "./Home";
import Profile from "./Profile";
import SpecificProfile from "./SpecificProfile";

export default [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/profiles",
        element: <Profile />,
        children: [
          {
            path: "/profiles/:id",
            element: <SpecificProfile />
          }
        ]
      }
    ]
  }
  
]