import { useRef } from "react";
import "./services.scss";
import { motion , useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x:0,
        opacity: 1,
        y:0,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },

    },
};

const Services = () => {

const ref = useRef()
 
const isInView = useInView(ref, {margin: "-100px"})
  return (
    <motion.div 
    className="services" 
    variants={variants} 
    initial="initial" 
    //animate="animate"
    //whileInView="animate"
    ref ={ref}
    animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
            I focus on helping your brand grow
            <br/> and move forward
        </p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer"variants={variants}>
      <div className="title">
        <img src="/people.webp" alt="" />
        <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b>Ideas
        </h1>
      </div>
      <div className="title">
        <h1>
            <motion.b whileHover={{color:"orange"}}>For your</motion.b> Business.
        </h1>
        <button>WHAT WE DO ?</button>
      </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
    
        <motion.div 
            className="box"
            whileHover={{background: "lightgray", color: "black"}}
            >
            <h2> Website Building</h2>
            <p>
                   I create custom websites that match your brand’s identity and goals. Whether you need a corporate site, an e-commerce platform, or a portfolio, I ensures a smooth user experience and modern design.                    </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box"
            whileHover={{background: "lightgray", color: "black"}}
             >
            <h2> Social Media Management</h2>
            <p>
            Boost your social media presence with our management services. We handle content creation, scheduling, engagement, and analytics to increase your brand visibility and connect with your audience effectively.            </p>
            <button>Go</button>
            </motion.div>
        <motion.div className="box"
            whileHover={{background: "lightgray", color: "black"}}
           >
            <h2> Graphic Designing
            </h2>
            <p>
            Bring your ideas to life with our graphic design services. From logos and branding to promotional graphics and infographics, we create eye-catching designs that communicate your message clearly. We cater to both digital and print media.            </p>
            <button>Go</button>
        </motion.div>

        <motion.div className="box"
            whileHover={{background: "lightgray", color: "black"}}
           >
            <h2> Investment Strategy
            </h2>
            <p>
            Navigate financial markets with ease using our investment strategy services. We offer personalized guidance on portfolio management, asset allocation, and market analysis to help you achieve your financial goals and optimize your investments.            </p>
            <button>Go</button>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Services;
