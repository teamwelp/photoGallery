import React from 'react';
import absoluteUrl from '../../../url'

class FourPictures extends React.Component {
  render() {
		let count=0;
    return (
			<div className="photo image-3">
				{this.props.seeFourPhotos.map((pic) => 
					<a key={count++} href="">
						<img key={count++} className="photoBox" src={pic.graphic_link_low} />
					</a> 
				)}
				<a className="onTopOfBox inactiveLink" href="">
					<span className="iconAdjust">
						<img className="icon" src= {absoluteUrl + `/images/imagetile.svg`} />
					</span>
					See all &nbsp;{this.props.list.length}
				</a>
			</div>
		)
	}
}

export default FourPictures;