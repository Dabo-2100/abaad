import { useEffect } from "react";
export default function Privacy() {
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
        <h1>Privacy page</h1>
        </>
    )
}