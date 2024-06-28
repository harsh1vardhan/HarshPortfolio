import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
          <motion.span 
          initial ={{opacity:0, scale:0.5}} 
          animate={{opacity:1, scale:1}} 
          transition={{ duration:0.5}}>Harsh Vardhan</motion.span>
            
            <div className="social">
                <a href="https://www.facebook.com/harshvardhansinha.sinha.1"><img src="/facebook.png" alt=""/></a>
                <a href="https://www.instagram.com/harsh_vardhan_sinha/"><img src="/instagram.png" alt=""/></a>
                <a href="https://www.youtube.com/channel/UCqPse5lAhkr6X3cZ5BCbmSA"><img src="/youtube.png" alt=""/></a>
                <a href="#"><img src="/dribbble.png" alt=""/></a>
            </div>
        </div>
    </div>
  )
}


export default Navbar