import React from 'react';

class PictureModal extends React.Component {

	render() {
		return (
			<div id="myModal" className="modal" style={{display:this.props.display}}>
				<div className="modal-box">
					<div className="light-box">
					{this.props.listAndUsers.map((pic) => 
						<div className="modal-content" key={pic.pic_id+'modal tag'}>
							<div className={"mySlides " + this.props.listAndUsers.indexOf(pic)}>
								<div className="numbertext">{this.props.listAndUsers.indexOf(pic) + 1} / {this.props.listAndUsers.length}</div>
								<div className="imgTemplate">
									<img className="imgModal" src={pic.graphic_link_high} />
									<a className="prev" onClick={()=> this.props.plusSlide(-1)}>&#10094;</a>
								</div>
							</div>
							<div className={"modal-info " + this.props.listAndUsers.indexOf(pic)}>
							<a className="next" onClick={()=> this.props.plusSlide(1)}>&#10095;</a>
								<div className={"modal-user"}>
									<div className={"modal-avatar"}>
										<img src={pic.profileImg} className={"modal-user-img"} />
									</div>
									<div className={"modal-story"}>
										<ul>
											<li>
												<a className={"display-user-name"}>{pic.user_name}</a>
											</li>
										</ul>
										<ul>
											<li className={"friend-count"}>
												<i className={"people material-icons"}>people</i>
												<div className={"boldInfo"}>
													<b>{pic.user_friends}</b>
												</div>
											</li>
											<li className={"user-reviews"}>
												<i className={"people material-icons"}>stars</i>
												<div className={"boldInfo"}>
													<b>{pic.user_reviews}</b>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className={"modal-pic-info"}>
									<div className={"modal-pic-caption"}>
										<div className={"modal-caption-text"}>{pic.caption}</div>
									</div>
									<div className={"date-style"}>
										<span className={"time-stamp"}>January 8, 2018</span>
									</div>
									<div className={"vote-style"}>
										<p className={"vote-line"}>
											Was this photo ...?
										</p>
										<ul>
											<li className={"vote-btn"}>
											<button className={"clickBtn"}><i className={"fas fa-arrow-up"}></i> Helpful {pic.helpful}</button>
											</li>
											<li className={"vote-btn"}>
												<button className={"clickBtn"}><i className={"fas fa-arrow-down"}></i> Not Helpful {pic.noHelpful}</button>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<span className="close cursor" onClick={()=>this.props.closeModal()}>Close &times;</span>
						</div>	
					)}	
					</div>
				</div>	
			</div>
		)
	}
}

export default PictureModal;