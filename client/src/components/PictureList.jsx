import React from 'react';

const PictureList = (props) => (
  <div className="show-case-container">
    {console.log(props.users)}
    {/* <div className="top"></div>
    <div className="bottom"></div> */}
    <div className="inner-container">
      <div className="photo image-1">
        <img key={props.list[0].pic_id} src = {props.list[0].graphic_link_low} />
        <div className="info">
          <div className="infoBlock">
            <div className="userPic">
              <img key={props.users[0].profileImg} src = {props.users[0].profileImg} />
            </div>
            <div className="detail">
              <p>{props.list[0].caption}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="photo image-2">
        <img key={props.list[1].pic_id} src={props.list[1].graphic_link_low} />
        <div className="info">
          <div className="infoBlock">
            <div className="userPic">
              <img key={props.users[1].profileImg} src = {props.users[1].profileImg} />
            </div>
            <div className="detail">
              <p>{props.list[1].caption}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="photo image-3">
        <img key={props.list[2].pic_id} src={props.list[2].graphic_link_low} />
      </div>
    </div>
  </div>
)

export default PictureList;