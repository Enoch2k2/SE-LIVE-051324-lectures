import App from "./App";
import BlogForm from "./components/blogs/BlogForm";
import BlogList from "./components/blogs/BlogList";
import EditBlogForm from "./components/blogs/EditBlogForm";


export default [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/blogs",
        element: <BlogList />
      },
      {
        path: "/blogs/new",
        element: <BlogForm />
      },
      {
        path: "/blogs/edit/:id",
        element: <EditBlogForm />
      }
    ]
  }
]