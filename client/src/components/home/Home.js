import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import RoomList from './RoomList'

const Home = () => {
  const { user, setUser } = useContext(UserContext)
  const rooms = [
    {
      name: 'room1',
      _id: '123',
    },
    {
      name: 'room2',
      _id: '456',
    },
  ]
  const setAsJohn = () => {
    const john = {
      name: 'John',
      email: 'john@email.com',
      password: '123',
      id: '123',
    }
    setUser(john)
  }
  const setAsTom = () => {
    const tom = {
      name: 'Tom',
      email: 'john@email.com',
      password: '456',
      id: '456',
    }
    setUser(tom)
  }
  return (
    <div>
      <div className='row'>
        <div className='col s12 m6'>
          <div className='card blue-grey darken-1'>
            <div className='card-content darken white-text'>
              <span className='card-title'>
                Welcome {user ? user.name : ''}
              </span>
              <form className='col s12'>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      placeholder='Enter a room name'
                      id='room'
                      type='text'
                      className='validate'
                    />
                    <label htmlFor='room'>Room</label>
                  </div>
                </div>
              </form>
              <button className='btn'>Create Room</button>
            </div>
            <div className='card-action'>
              <a href='/' onClick={setAsJohn}>
                Set as John
              </a>
              <a href='/' onClick={setAsTom}>
                Set as Tom
              </a>
            </div>
          </div>
        </div>
        <div className='col s6 m5 offset-1'>
          <RoomList rooms={rooms} />
        </div>
      </div>
      <Link to='/chat'>
        <button>Go to chat</button>
      </Link>
    </div>
  )
}

export default Home
