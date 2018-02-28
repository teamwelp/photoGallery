import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PictureList from './components/PictureList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list: [
            {pic_id: 1, graphic_link_low: ''},
            {pic_id: 2, graphic_link_low: ''},
            {pic_id: 3, graphic_link_low: ''},
        ],
        users: [
            {profileImg: ''},
            {profileImg: ''},
        ],
    }
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    $.ajax({
        url: '/exampleBusiness',
        method: 'GET',
        contentType: 'application/json',
        success: (received) => {
        console.log('fetched')
          this.fetchUserInfo(received);
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
    let userList = [];
    list.forEach((user) => {
        userList.push(user.username_id)
    });

    // console.log(this.state)
    // console.log(userList);
    $.ajax({
        url: '/exampleBusiness',
        type: 'POST',
        contentType: 'application/json', 
        data: JSON.stringify(userList),
        success: function(data) {
          this.setState({
            users: data
          })
        }.bind(this),
        error: function(err) {
            console.log('Failed to Send', err)
        }
    });
  }


  render() {
    return (
      <div className="show-case-main">
        {/* <h3>Welcome to Photo Gallery</h3> */}
        <div className="show-map"></div>
        <PictureList
          list = {this.state.list}
          users = {this.state.users}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
