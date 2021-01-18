import React from 'react'
import axios from 'axios'
import UserCard from './components/UserCard'
import FollowerBar from './components/FollowersBar'
import SearchBar from './components/SearchBar'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseUrl: 'https://api.github.com/users/rockyFierro',
      user: {
        name: '',
        img_src: '',
        location: '',
        blog: '',
        bio:''
      },
      followers: [],
      search_user: ''
    }
  }

  componentDidMount() {
    axios
      .get(this.state.baseUrl)
      .then(response => {
        this.setState({
          user: {
            name: response.data.name,
            img_src: response.data.avatar_url,
            location: response.data.location,
            blog: response.data.blog,
            bio: response.data.bio
          }
        })
        return response
      })
      .then(
        response => {
          axios.get(response.data.followers_url)
            .then(response => this.setState({ followers: response.data }))
            .catch(err => console.warn(err))
        }
      )
      .catch(err => console.warn(err))
  }

  render() {
    return (
      <div>
        <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          {/* search github usernames here */}
          {/* <SearchBar userQuery={this.state.search_user} /> */}
          <div>
            {/* github card here */}
            <UserCard user={this.state.user} />
            {/* find friends/followers of user here */}
            <FollowerBar followers={this.state.followers} />
          </div>
        </div>
      </div>
    );
  }
}

export default App