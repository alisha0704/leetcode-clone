import React from 'react';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Split from 'react-split';
import { Problem } from '@/mockProblems/problems';
import Playground from './Playground/Playground';
type WorkspaceProps = {
    problem: Problem
};

const Workspace: React.FC<WorkspaceProps> = ({problem}) => {

	return (
		<Split className='split' minSize={0}>
			<ProblemDescription problem={problem}/>
			<div className='bg-dark-fill-2'>
		    <Playground/>
			</div>
		</Split>
	);
};
export default Workspace;   