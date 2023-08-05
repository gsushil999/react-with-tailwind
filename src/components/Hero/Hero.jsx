import HeroImg from '../../assets/header/hero-image.jpg';

const Hero = () => {
    return <>
        <section className="w-full py-3 bg-blue pt-[160px] pb-[100px] dark:bg-dark" id='Home'>
            <div className="container m-auto">
                <div className="flex items-center">
                    <div className="flex flex-col px-3">
                        <h1 className="text-[44px] leading-[55px] font-bold text-white capitalize">Corporate & Business Site Template by Ayro UI.</h1>
                        <p className="text-base text-white opacity-70 mt-[30px]">
                        We are a digital agency that helps brands to achieve their
                        business outcomes. We see technology as a tool to create amazing
                        things.
                        </p>
                        <div className="flex mt-[40px] items-center">
                            <a href='javascript:void(0)' className="bg-white text-blue uppercase font-bold tracking-3 rounded px-6 py-3 mr-3 border-solid border  border-white hover:bg-blue hover:text-white dark:hover:bg-dark dark:text-dark dark:hover:text-white" >Get Started</a>
                            <a href='javascript:void(0)' className="text-white flex items-center">
                                <span 
                                    className="bg-white text-blue rounded-full w-12 h-12 flex items-center text-center justify-center rotate-90 mr-4 border-solid border border-white text-xl hover:bg-blue hover:text-white dark:hover:bg-dark dark:hover:text-white dark:text-dark">&#9650;</span>
                                <span className="font-semibold">Watch Intro</span>
                            </a>
                        </div>
                    </div>
                    <div className="px-3">
                        <img src={HeroImg} className="rounded-lg" alt="Hero Image" />
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default Hero;