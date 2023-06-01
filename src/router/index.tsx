import AppLayout from "@/layout";
import { createBrowserRouter } from "react-router-dom";
import { AUTH, COURSES, PROFILE, ADD_COURSE } from "./routes";
import {
  AddCoursePage,
  AuthPage,
  CoursePage,
  CoursesPage,
  ProfilePage,
} from "@/pages";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <CoursesPage />,
        path: COURSES,
      },
      {
        element: <AddCoursePage />,
        path: ADD_COURSE,
      },
      {
        element: <CoursePage />,
        path: COURSES + "course",
      },
      {
        element: <ProfilePage />,
        path: PROFILE,
      },
    ],
  },
  {
    element: <AuthPage />,
    path: AUTH,
  },
]);

export default router;
