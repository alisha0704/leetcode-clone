import React from 'react';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Split from 'react-split';
import { Problem } from '@/mockProblems/problems';
type WorkspaceProps = {
    problem: Problem
};

const Workspace: React.FC<WorkspaceProps> = () => {

	return (
		<Split className='split' minSize={0}>
			
			<div className='bg-dark-fill-2'>
		
			</div>
		</Split>
	);
};
export default Workspace;   