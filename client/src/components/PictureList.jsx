import React from 'react';
import PictureModal from './PictureModal.jsx';
import FourPictures from './FourPictures.jsx';

class PictureList extends React.Component {
  render() {
    return (
      <div className="show-case-container">
        <div className="inner-container">

          <div className="photo image-1" onClick={() => this.props.handleModal(0)}>
            <img key={this.props.list[0].pic_id} src = {this.props.list[0].graphic_link_low} />
            <div className="info">
              <div className="infoBlock">
                <div className="userPic">
                  <img key={this.props.users[0].profileImg} src = {this.props.users[0].profileImg} />
                </div>
                <div className="detail">
                  <a className="description">{this.props.list[0].shortCaption}</a>
                  <span className="author">
                    &nbsp; by &nbsp;
                    <a className="username">{this.props.users[0].user_name}</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="photo image-2" onClick={() => this.props.handleModal(1)}>
            <img key={this.props.list[1].pic_id} src={this.props.list[1].graphic_link_low} />
            <div className="info">
              <div className="infoBlock">
                <div className="userPic">
                  <img key={this.props.users[1].profileImg} src = {this.props.users[1].profileImg} />
                </div>
                <div className="detail">
                  <a className="description">{this.props.list[1].shortCaption}</a>
                  <span className="author">
                    &nbsp; by &nbsp;
                    <a className="username">{this.props.users[1].user_name}</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <FourPictures 
            seeFourPhotos = {this.props.seeFourPhotos}
            list = {this.props.list}
          />
        </div>
      </div>
    )
  }
}

export default PictureList;