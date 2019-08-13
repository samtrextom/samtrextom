import React from 'react'
import HeaderImageSlide from './HeaderImageSlide'
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

class HeaderCarousel extends React.Component{

    constructor (props) {
        super(props);

        this.state = {

            images:[
                'HeaderCarouselPics/testPhotoOne1024.jpg',
                'HeaderCarouselPics/testPhotoTwo1024.jpg',
                'HeaderCarouselPics/testPhotoThree1024.jpg',
                'HeaderCarouselPics/testPhotoFour1024.jpg',
                'HeaderCarouselPics/testPhotoFive1024.jpg'
            ],

            currentImageIndex: 0,
            translateValue: 0
        };

    }

    goToPrevSlide = () =>{

        if(this.state.currentIndex === 0) {
            return this.setState({
                currentIndex: this.state.images.length - 1,
                translateValue: this.state.images.length - 1
            })
        }


        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
        }));
    }

    goToNextSlide = () =>{

        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }


        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));

    }

    render(){

        return(
            <div className = 'slider'>
                <div className={"slider-wrapper"}>
                    <HeaderImageSlide image = {this.state.images[this.state.currentImageIndex]}/>
                </div>

                <LeftArrow
                    goToPrevSlide = {this.goToPrevSlide}
                />
                <RightArrow
                    goToNextSlide = {this.goToNextSlide}
                />
            </div>
        )
    }
}

export default HeaderCarousel