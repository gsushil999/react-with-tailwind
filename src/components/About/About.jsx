import AboutImg from '../../assets/about/about-img1.jpg';
import AboutBgSvg from './AboutBgSvg';

const About = () => {

    const handleTab = (event) => {
        document.querySelectorAll('.nav-link').forEach((item)=>{
            item.classList.remove('active');
        });
        document.querySelectorAll('.tab-pane').forEach((item)=>{
            item.classList.remove('active');
        });
        const clickedElem = event.target.getAttribute('data-target');
        event.target.classList.add('active');
        document.getElementById(clickedElem).classList.add('active');
    }

    return <>
        <section className="w-full py-3 bg-offwhite pt-[120px] pb-[90px] dark:bg-dark" id='Services'>
            <div className="container m-auto">
                <div className="flex items-center">
                    <div className="w-1/2 px-3">
                        <div className="pl-[60px] relative">
                            <AboutBgSvg className="absolute left-[32px] top-[-28px]" />
                            <img src={AboutImg} alt="about" className='relative z-1' />
                        </div>
                    </div>
                    <div className="w-1/2 px-3">
                        <div className="pl-[50px]">
                            <h6 className="relative uppercase semibold pl-[30px] text-lg dark:text-light-1 dark:before:bg-light-1 before:content-[''] before:inline-block before:absolute before:left-[0] before:top-[50%] before:mt-[-1px] before:w-[20px] before:h-[2px] before:bg-blue">OUR STORY</h6>
                            <h2 className="font-bold text-4xl mt-[20px] dark:text-light-1">Our team comes with the experience and knowledge</h2>
                            <div className="about-five-tab mt-[40px]">
                                <nav>
                                    <div className="rounded bg-light-1 p-4" id="nav-tab">
                                        <button className="nav-link active" data-target="nav-who" onClick={handleTab} type="button">Who We Are</button>
                                        <button className="nav-link" data-target="nav-vision" onClick={handleTab} type="button">our Vision</button>
                                        <button className="nav-link" data-target="nav-history" onClick={handleTab} type="button">our History</button>
                                    </div>
                                </nav>
                                <div className="pt-[30px]" id="nav-tabContent">
                                    <div className="tab-pane active" id="nav-who">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page
                                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                            distribution of letters, look like readable English.</p>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have in some
                                            form,
                                            by injected humour.</p>
                                    </div>
                                    <div className="tab-pane" id="nav-vision">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus similique rem beatae odit culpa voluptatem temporibus iure accusantium, animi et praesentium magni dolor pariatur provident incidunt odio magnam, fugit repellat?</p>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have in some
                                            form, by injected humour.</p>
                                    </div>
                                    <div className="tab-pane" id="nav-history">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have in some
                                            form, by injected humour.</p>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page
                                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                            distribution of letters, look like readable English.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default About;