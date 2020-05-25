import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TechStack = () => {
    var itemsToShow = 6

    if(window.screen.width <= 950 && window.screen.width > 375){
        itemsToShow = 4
    }
    else if (window.screen.width <= 375){
        itemsToShow = 3
    }

    return(
        <div id="TechStack">
            <h1>Tech stack</h1>
            <OwlCarousel
                className="owl-theme"
                items={itemsToShow}
                loop
                autoplayTimeout={2000}
                dots={false}
                autoplay
                smartSpeed={1000}
                touchDrag
            >
                <div className="item"><h4>.NET</h4></div>
                <div className="item"><h4>C#</h4></div>
                <div className="item"><h4>C++</h4></div>
                <div className="item"><h4>HTML</h4></div>
                <div className="item"><h4>CSS</h4></div>
                <div className="item"><h4>JavaScript</h4></div>
                <div className="item"><h4>TypeScript</h4></div>
                <div className="item"><h4>React</h4></div>
                <div className="item"><h4>Sitecore</h4></div>
                <div className="item"><h4>Entity framework</h4></div>
                <div className="item"><h4>MSSQL</h4></div>
                <div className="item"><h4>Git</h4></div>
                <div className="item"><h4>Bootstrap</h4></div>
            </OwlCarousel>
        </div>
    );
}

export default TechStack;