import React from "react";
import "./CoursesPage.scss";

interface CoursesPageProperties {
}

interface CoursesPageState {
}

class CoursesPage extends React.Component<CoursesPageProperties, CoursesPageState> {
	public render(): JSX.Element {
		return (
			<div className="courses-page">
				<div className="row">
					<div className="col-4">
						{/* TODO <CourseCard course={...} />*/}
					</div>
				</div>
			</div>
		);
	}
}

export default CoursesPage;
