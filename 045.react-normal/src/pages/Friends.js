import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import '../assets/css/Friends.css'
import Friend from '../components/Friend'

const arrFriend = [
  { id: 1, name: 'サーバル' },
  { id: 2, name: 'ジャガー' },
  { id: 3, name: 'スナネコ' },
  { id: 4, name: 'ツチノコ' },
  { id: 5, name: 'アメリカンビーバー' }
]

const Friends = () => (
  <div className="Friends">
    <h2>Friends</h2>
    <p>Friendsへようこそ</p>
    <BrowserRouter>
      <div>
        <ul>
        {
          arrFriend.map(val => (
            <li><Link to={'/friends/'+val.id}>{val.name}</Link></li>
          ))
        }
        </ul>
        {
          arrFriend.map(key => (
            <Route
              path={'/friends/'+key.id}
              render={() => <Friend id={key.id} name={key.name} />}
            />
          ))
        }
      </div>
    </BrowserRouter>
  </div>
)

export default Friends