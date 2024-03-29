import React from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import EditorFooter from './EditorFooter';
type PlaygroundProps = {
    
};

const Playground:React.FC<PlaygroundProps> = () => {
    const handleSubmit = async () => {}
    
    return (
        <>
        <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden '>
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
                <div className='flex h-10 items-center space-x-4'>
                    <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                        <div className='text-base font-medium leading-5 text-white'>
                            testcases 
                        </div>
                        <hr className='absolute bottom-0 h-0.5 w-20 rounded-full border-none bg-white'/>
                    </div>
                </div>
                <div className='flex'>
                   {/* case 1 */}
                    <div className='mr-2 items-start mt-4 text-white'>
                        <div className='flex flex-wrap items-center gap-y-4'>
                            <div className='font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-3 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap '>
                                Case 1
                            </div>
                        </div>
                    </div>
                  {/* case 2 */}
                  <div className='mr-2 items-start mt-4 text-white'>
                        <div className='flex flex-wrap items-center gap-y-4'>
                            <div className='font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-3 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap '>
                                Case 2
                            </div>
                        </div>
                    </div>
                    {/* case 3 */}
                    <div className='mr-2 items-start mt-2 text-white'>
                        <div className='flex flex-wrap items-center gap-y-4'>
                            <div className='font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-3 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap '>
                                Case 3
                            </div>
                        </div>
                    </div>
                    <div className='font-semibold my-3'>
                        <p className='text-sm font-medium mt-4 text-white'> Input </p>
                        <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                            num: [2,7,11,15], target: 9
                        </div>
                        <p className='text-sm font-medium mt-4 text-white'>Output:</p>
                        <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                            [0,1]
                        </div>
                    </div>
                </div>
                </div>
        </Split>
        <EditorFooter handleSubmit={handleSubmit}/>
        </div>
        </>
    )
}
export default Playground;