import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PictureList from './components/PictureList.jsx';
import PictureModal from './components/PictureModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      slideIndex: -1,
      list: [
        {pic_id: 1, graphic_link_low: ''},
        {pic_id: 2, graphic_link_low: ''},
        {pic_id: 3, graphic_link_low: ''},
      ],
      seeFourPhotos: [

      ],
      users: [
        {profileImg: ''},
        {profileImg: ''},
      ],
      listAndUsers: [
      ],
    }
  }

  componentDidMount() {
    this.fetch();
    this.clearImgModal();
  }

  limitCaptionLength(arr) {
    let changedString = arr;
    arr.forEach((photo) => {
      if(photo.caption.length > 39) {
        photo.shortCaption = photo.caption.slice(0, 35) + '...';
      } else {
        photo.shortCaption = photo.caption;
      }
    });

    this.setState({
      list: changedString
    })
  }

  seeFourPhotos(arr) {
    let newArr = [];
    if(arr.length >= 6) {
      for(let i = 2; i < 6; i++) {
        newArr.push(arr[i]);
      }

      this.setState({
        seeFourPhotos: newArr
      })
    } else {
      for(let i = 2; i < arr.length; i++) {
        newArr.push(arr[i]);
      }
      let left = 4 - newArr.length;
      for(let j = 0; j < left; j++) {
        newArr.push(arr[0])
      }

      this.setState({
        seeFourPhotos: newArr
      })
    }
  }

  fetch() {
    let url = document.location.href.split('/');
    url = url[url.length - 2];
    let getId = '/id/' + url;
    $.ajax({
        url: getId,
        method: 'GET',
        contentType: 'application/json',
        success: (received) => {
        console.log('fetched')
          this.fetchUserInfo(received);
          this.limitCaptionLength(received);
          this.seeFourPhotos(received);
          this.setState({
            list: received
          })
        },
        error: function(err) {
          console.log('Failed to Send', err)
        }
    });
  }

  fetchUserInfo(list) {
    let url = document.location.href.split('/');
    url = url[url.length - 2];
    let getId = '/id/' + url;

    let userList = [];
    list.forEach((user) => {
      userList.push(user.username_id)
    });

    $.ajax({
        url: getId,
        type: 'POST',
        contentType: 'application/json', 
        data: JSON.stringify(userList),
        success: function(data) {
          this.mergeTwoInfo(data)
          this.setState({
            users: data
          })
        }.bind(this),
        error: function(err) {
          console.log('Failed to Send', err)
        }
    });
  }

  mergeTwoInfo(usrArr) {
    let arr = [];
    this.state.list.forEach((itm, i) => {
      arr.push(Object.assign({}, itm, usrArr[i]));
    });
    this.setState({
      listAndUsers: arr
    })
  }

  handleModal(obj) {
    this.clearImgModal();
    if(obj === 1) {
      $('.1').css({'display':'block'});
      this.setState({
        display: 'block',
        slideIndex: obj,
      })
    } else {
      $('.0').css({'display':'block'});
      this.setState({
        display: 'block',
        slideIndex: obj,
      })
    }
  }

  clearImgModal(){
    for(let i = 0; i < this.state.list.length; i++) {
      $('.'+ i).css({'display': 'none'});
    }
  }

  closeModal() {
    this.clearImgModal();
    this.setState({
      display:'none',
    })
  }

  plusSlide(n) {
		if(this.state.slideIndex+n >= 0 && this.state.slideIndex+n < this.state.list.length) {
      this.clearImgModal();
      $('.' + (this.state.slideIndex + n)).css({'display':'block'});
			this.setState({
        slideIndex: this.state.slideIndex + n,
			})
		}
  }

  render() {
    return (
      <div>
        <div className="show-case-main">
          <div className="show-map"></div>
          <PictureList
            list = {this.state.list}
            users = {this.state.users}
            seeFourPhotos = {this.state.seeFourPhotos}
            handleModal = {this.handleModal.bind(this)}
          />
          <PictureModal 
            listAndUsers={this.state.listAndUsers}
            display={this.state.display}
            closeModal = {this.closeModal.bind(this)}
            plusSlide = {this.plusSlide.bind(this)}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('photoGallery'));
