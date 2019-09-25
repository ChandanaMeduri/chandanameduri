import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class ImageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: 4,
            imagePostion: ""
        }
        this.getPosition = this.getPosition.bind(this);
    }
    componentWillMount() {
        this.setState({
            imagePostion: this.props.position
        })
    }
    componentDidUpdate(prevProps, _prevState) {
        if (prevProps.position !== this.props.position) {
            this.setState({
                imagePostion: this.props.position
            });
        }
    }
    getPosition() {
        const { position } = this.props;
        if (position == 'left') {
            return "float-left";
        }
        if (position == "right") {
            return "float-right";
        }
        return '';

    }
    render() {
        return (
            <div className="container" >
                {this.props.position !== 'bottom' &&
                    <div className={this.getPosition()}>
                        <img src={require("../assets/Images/Doct.jpg")}  />
                    </div>
                }
                <div>
                    <StarRatings
                        rating={this.state.rating}
                        starRatedColor="blue"
                        numberOfStars={6}
                        name='rating'
                    />
                </div>
                {this.props.position === 'bottom' &&
                    <div className={this.getPosition()}>
                        <img src={require("../assets/Images/Doct.jpg")} />
                    </div>
                }
            </div >
        );
    }
}

export default ImageComponent;