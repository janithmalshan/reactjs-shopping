import React, {Component} from 'react';
import {Carousel} from "react-responsive-carousel";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


class Index extends Component {
    render() {
        return (
            <div className="ui-carousel">
                <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
                    <div className="ui-carousel-item">
                        <img src="https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                        <p className="legend">PAY SMART</p>
                    </div>
                    <div className="ui-carousel-item">
                        <img src="https://images.unsplash.com/photo-1592500305779-0e6de44984f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
                        <p className="legend">CASH ON DELIVERY</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Index;
