import React from "react";

export const Note = props => {
	const { item, ...restProps } = props;

	return (
		<div {...restProps} className="note">
			{item || ""}
		</div>
	);
};