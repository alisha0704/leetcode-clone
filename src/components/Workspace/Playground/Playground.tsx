import React from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
type PlaygroundProps = {
    
};

const Playground:React.FC<PlaygroundProps> = () => {
    
    return (
        <>
        <div className='flex flex-col bg-dark-layer-1 relative'>
        <PreferenceNav/>
        <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60,40]} minSize={60} >
            <div className='w-full overflow-auto'>
                <CodeMirror
                 value="const a=1;"
                 theme={vscodeDark}
                 extensions={[javascript()]}
                 style={{fontSize:16}}
                 />
            </div>
            <div className='w-full px-5 overflow-auto'>
                {/* TestCase Heading */}
                <div className='flex h-10 items-center space-x-6'>
                    <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                        <div className='text-sm font-medium leading-5 text-white'>
                            testcases 
                        </div>
                        <hr className='absolute bottom-0 h-0.5 w-16 rounded-full border-none bg-white'/>
                    </div>
                </div>
                <div className='flex'>
                   {/* case 1 */}
                    <div className='mr-2 items-start mt-2 text-white'>
                        <div className='flex flex-wrap items-center gap-y-4'>
                            <div className='font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-3 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap '>
                                Case 1
                            </div>
                        </div>
                    </div>
                </div>

                </div>
        </Split>
        </div>
        </>
    )
}
export default Playground;