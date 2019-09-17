import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { posix } from 'path';

class ImageRenderComponent extends Component {
    constructor() {
        super();
        this.state = {
            rating: 4,
            hover: false,
            float: "",
            ImageFloat: "",
            StarFloat: ""
        }
    }
    // componentDidMount() {
    //     if (this.props.imgPosition == "") {
    //         alert("1");
    //         document.getElementById("img").style.position = "absolute";
    //         document.getElementById("img").style.right = "650px";
    //         // document.getElementById("rating").style.position = "relative";
    //     }
    // }
    getPosition() {
        if (img.style.position == "") {
            document.getElementById("img").style.position = "absolute";
            document.getElementById("img").style.right = "100px";
        }
        else if (img.style.position == "absolute") {
            document.getElementById("img").style.position = "relative";
            document.getElementById("img").style.top = "250px";
            // document.getElementById("rating").style.position = "absolute";
            // document.getElementById("img").style.top = "50px";
        }
        else if (img.style.position == "relative") {
            debugger;
            document.getElementById("img").style.position = "absolute";
            document.getElementById("img").style.top = "100px";
            document.getElementById("rating").style.position = "absolute";
            document.getElementById("rating").style.bottom = "450px";
            document.getElementById("rating").style.right = "30px";
        }
    }
    render() {
        return (
            <div className="container" style={{ height: 500, width: 500, textAlign: "center" }}>
                <div className="row">
                    <div id="img" style={{ top: "50px", left: "100px" }}>
                        <img src={require('D:/Sample/my-image-app/src/assets/Images/Doct.jpg')}
                            onMouseOver={() => { this.getPosition() }}
                        />
                    </div>
                    <div id="rating">
                        <StarRatings
                            rating={this.state.rating}
                            starRatedColor="blue"
                            numberOfStars={6}
                            name='rating'
                        />
                    </div>
                </div>
            </div >
        );
    }
}

export default ImageRenderComponent;