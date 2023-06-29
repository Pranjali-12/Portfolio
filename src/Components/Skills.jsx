import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills" style={{backgroundColor:'#121212',color:'#F2F3F4',paddingTop:'7rem'}} >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                        <div className="fs-1 text-center mt-0" style={{color:'#F2F3F4'}}>Skills</div>
                            <p>This section contains programming languages, software frameworks, design tools, and project management approaches that I have utilised to demonstrate my abilities and experience.</p>
                            <Carousel responsive={responsive} infinite={true}
                                autoPlay={true} autoPlaySpeed={1200} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={require('../Assets/html.png')} alt="Image1" />
                                    <h3>Html</h3>
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/css.png')} alt="Image1" />
                                    <h3>css</h3>
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/js.png')} alt="Image1" />
                                    <h3>Js</h3>
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/react.png')} alt="Image1" />
                                    <h3>React</h3>
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/python.png')} alt="Image1" />
                                    <h3>Python</h3>
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/c.png')} alt="Image1" />
                                    <h3>C++</h3>
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/java.png')} alt="Image1" />
                                    <h3>Java</h3>
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/node.png')} alt="Image1" />
                                    <h3>Node</h3>
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/express.png')} alt="Image1" />
                                    <h3>Express</h3>
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/mongo.png')} alt="Image1" />
                                    <h3>Mongo DB</h3>
                                </div>
                            </Carousel>
                        </div>
                        <div className='mt-5' style={{height:'15px',width:'60%',backgroundColor:'#f79cb9',borderRadius:'50%',filter:'blur(2px)',margin:'0 auto'}}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills