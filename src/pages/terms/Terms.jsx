import './Terms.css'
import { useEffect } from "react";
export default function Terms() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
      }
      
      
      useEffect(() => {
        scrollToTop();
      }, []);
    return(
        <>
        <h1>Terms page</h1>

        </>
    )
}