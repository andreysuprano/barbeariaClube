import React from 'react';
import '../styles/components/footer.css';
export default function Footer(){
    return(
        <footer>
        <div className="social-menu">
        <ul>
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
        </ul>
    </div>
    </footer>
    
    );
}