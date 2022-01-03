import { Link } from 'remix';

export default function Index() {
    return (
        <div className='m-auto select-none'>
            <div className='mx-auto max-w-screen-xl px-4 sm:px-6'>
                <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
                    <div className='sm:text-center md:max-w-2xl lg:col-span-6 lg:text-left'>
                        <div
                            className='mt-1 text-4xl tracking-tight leading-10
                    font-extrabold text-gray-900 sm:leading-none sm:text-6xl
                    lg:text-5xl xl:text-6xl'
                        >
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-center md:justify-end mb-1'>
                                    <img
                                        className='inline-block h-16 w-16 rounded-full mr-4'
                                        src='./images/avatar.jpeg'
                                        alt=''
                                        height={64}
                                        width={64}
                                    />
                                    <span className='inline-block align-bottom text-gray-800'>
                                        Nahuel Chaves
                                    </span>
                                </div>
                                <div className='flex items-center justify-center md:justify-end'>
                                    <span
                                        className='bg-gray-800 text-white inline-block px-2
                                py-1'
                                    >
                                        Software
                                    </span>
                                    <span
                                        className='bg-gray-700 text-white inline-block px-2
                                py-1'
                                    >
                                        Engineer
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0
                lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'
                    >
                        <p
                            className='text-base text-gray-500 sm:text-xl lg:text-lg
                    xl:text-xl'
                        >
                            I create from small lambdas to full-blown web
                            applications, always using well-tested cutting-edge
                            technologies.
                        </p>
                    </div>
                </div>
            </div>

            <div className='mt-10 mx-auto max-w-screen-xl'>
                <ul className='grid grid-cols-2 gap-4 lg:grid-cols-8 lg:gap-8 text-center text-gray-300'>
                    <li className=''>#aws-solutions-architect</li>
                    <li className=''>#linux</li>
                    <li className=''>#python</li>
                    <li className=''>#javascript</li>
                    <li className=''>#react</li>
                    <li className=''>#svelte</li>
                    <li className=''>#node</li>
                    <li className=''>#java</li>
                </ul>
            </div>
        </div>
    );
}
