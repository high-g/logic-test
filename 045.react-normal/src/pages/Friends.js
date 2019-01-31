import React from 'react'
import { Route } from 'react-router-dom'
import FriendList from  '../components/Friends/FriendList'
import Friend from '../components/Friends/Friend'

const arrFriend = [
  { id: 1, name: '麦わら' },
  { id: 2, name: '赤髪' },
  { id: 3, name: '黒ひげ' },
  { id: 4, name: 'ビッグマム' },
  { id: 5, name: '百獣' }
]

const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>Friendsへようこそ</p>
    <Route exact path='/friends' component={FriendList} />
    <Route exact path='/friends/:id' component={Friend} />
  </div>
)

export default Friends