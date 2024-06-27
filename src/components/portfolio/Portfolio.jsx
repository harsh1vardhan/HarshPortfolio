import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "FlixWish - Movie React App",
        img:"/Movie.png",
        desc: "Built React app with use Effect for TMDB API, cutting search time by 50% and boosting user satisfaction .Applied efficient skeleton loading techniques to elevate the user interface experience during data retrieval.",
        link: "https://flixwish.vercel.app/",
    }, 
    {
        id: 2,
        title: "FOOD DELIVERY SYSTEM",
        img:"/f1.png",
        desc: "Developed a web application for online food delivery, seamlessly integrating Razor pay as the payment gateway. Employed distinct database schemas for efficient food item ordering Integrating Google login using OAuth, resulting in a 40% increase in user registration efficiency.",
        link: "https://cufood.000webhostapp.com/",
    }, 
    
    {
        id: 3,
        title: "MovieeGo - IMDB",
        img:"/Movie2.png",
        desc: "MovieZone: Discover, Explore, Enjoy Explore movies effortlessly with MovieZone. Personalized recommendations, a vast database, user reviews, and smooth navigation—powered by React for speed and Framer Motion for stunning animations. Your ultimate movie companion.",
        link: "https://movieego.netlify.app/",
    }, 
    {
        id: 4,
        title: "IPH School (For Client)",
        img:"/school.png",
        desc: "Experience the perfect blend of creativity and functionality with our client's website. Built using HTML, CSS, JavaScript, and React, it offers a seamless user interface and dynamic features. From responsive design to interactive elements, discover innovation at every click.",
        link: "https://imperialpublichighschool.netlify.app/",
    }, 
];

const Single =({ item }) =>{

    const ref = useRef();

    const {scrollYProgress } = useScroll({
        target: ref,
        //offset: ["start start" , "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
    <section >
      <div className="container">
        <div className="wrapper">
            <div className="imageContainer" ref={ref}>
        <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
                        <a href={item.link}>
                            <button>See Demo</button>
                        </a>
        </motion.div>
        </div>
      </div>
    </section>
    );
    
};

const Portfolio = () => {

    const ref= useRef();

    const {scrollYProgress } = useScroll({
        target: ref, offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping:30,
    });

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        
      {items.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  );
};

export default Portfolio;

    
