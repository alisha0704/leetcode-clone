import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import { Problem } from "@/mockProblems/problems";

import React from "react";


type ProblemPageProps = {
	problem: Problem;
};

const ProblemPage: React.FC<ProblemPageProps> = ({ problem }) => {

	return (
		<div>
			<Topbar problemPage /> 
			<Workspace/>
			</div>
	);
};
export default ProblemPage;
