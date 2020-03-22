import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, NavItem } from 'reactstrap';



class CampsiteInfo extends Component {


    renderComments(comments){
        if(this.props.comments === comments){
            return(
                <div className="col-md-5 m-1">
                    <h4 className="header">Comments</h4>
                    {this.props.campsite.comments.map(comment => <div key={comment.id}>{comment.text} <br></br> -- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} <br></br><br></br></div>)}
                </div>
            )
        }
    }

    renderCampsite(campsite){
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.net} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    render(){
        if(this.props.campsite){
            return(
                <div className="row" >
                    {this.renderCampsite(this.props.campsite)} 
                    {this.renderComments(this.props.comments)}
                </div>
                
            )
        }else{
            return(
                <div></div>
            )
        }
    }
}

export default CampsiteInfo;