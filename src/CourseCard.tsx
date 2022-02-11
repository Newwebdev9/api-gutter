import React from "react";
import "./CourseCard.scss";
import {CourseSearchResult} from "../../web-service/models/CourseSearchResultList";

interface CourseCardProperties {
	course: CourseSearchResult;
}

interface CourseCardState {
}

class CourseCard extends React.Component<CourseCardProperties, CourseCardState> {
	public render(): JSX.Element {
		return (
			<div className="course-card">
				{`Card of ${this.props.course.name}`}
			</div>
		);
	}
}

export default CourseCard;
