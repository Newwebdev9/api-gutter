import React from "react";
import "./AppRoot.scss";
import CoursesPage from "./CoursesPage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { User } from "./CourseSearchResultList";

interface AppRootProperties {}

interface AppRootState {}

class AppRoot extends React.Component<AppRootProperties, AppRootState> {
  state = {
    AppRoot: [],
    User: "User",
    loading: true,
    error: false
  };
  componentDidMount() {
    fetch(
      "GET https://lx.festo.com/SearchService/api/search/learning-paths/public"
    )
      .then((response) => response.json())

      .then((response) =>
        this.setState({
          AppRoot: response.results,
          loading: false
        })
      )
      .catch((error) =>
        this.setState({
          loading: false,
          error: true
        })
      );
  }
  public render(): JSX.Element {
    const { AppRoot, loading, error } = this.state;
    return (
      <div className="app-root">
        <div className="container my-5">
          {loading && <div>Loading...</div>}
          {!loading &&
            !error &&
            AppRoot.map((AppRoot) => (
              <div key={AppRoot.User}>{AppRoot.User}</div>
            ))}
          {error && <div className="err">Error message</div>}
          <>
            <h1 className="title">Courses</h1>
          </>
          <BrowserRouter>
            <Routes>
              <Route path="/CoursesPage" element={<CoursesPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default AppRoot;
