import React from 'react'
import Follower from './Follower'

const FollowerBar = ({ followers }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl">Followers:</h2>
      <div className="flex flex-wrap">
        {followers.map(follower =>
          <Follower users={follower} key={follower.id} />
        )}
      </div>
    </div>
  )
}
export default FollowerBar
