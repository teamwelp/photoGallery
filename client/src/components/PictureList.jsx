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
              <a className="description" href="newRoute.com">{props.list[0].shortCaption}</a>
              <span className="author">
                &nbsp; by &nbsp;
                <a className="username" href="newRoute.com">{props.users[0].user_name}</a>
              </span>
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
              <a className="description" href="newRoute.com">{props.list[1].shortCaption}</a>
              <span className="author">
                &nbsp; by &nbsp;
                <a className="username" href="newRoute.com">{props.users[1].user_name}</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="photo image-3">
        <a href="">
          <img key={props.list[2].pic_id+1} className="photoBox" src={props.list[2].graphic_link_low} />
        </a>  
        {/* Delete top line later after enough image has been uploaded */}
        {props.list.map((pic) => 
          <a key={pic.pic_id+'pic tag'} href="">
            <img key={pic.pic_id+'pic'} className="photoBox" src={pic.graphic_link_low} />
          </a> 
        )}
        <a className="onTopOfBox" href="showallimages">
          <span className="iconAdjust">
            <img className="icon" src="../images/imagetile.svg" />
          </span>
          See all &nbsp;{props.list.length}
        </a>
      </div>
    </div>
  </div>
)

export default PictureList;