import React from 'react';

export default class Signup extends React.Component {


render()
{


  return( 
        <form>
        <h1>Sign up</h1>
        <div>
            <input  type="text" name="fullname" placeholder="Full Name" />
            <label htmlFor="fullname">FullName</label>
        </div>
        <div>
        <input  type="text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
        </div>
        <div>
        <input  type="password" name="password" placeholder="password" />
            <label htmlFor="password">Password</label>
        </div>
        <div>
        <input  type="email" name="email" placeholder="Email" />
            <label htmlFor="email">Email</label>
        </div>
        <div>
        <input type="submit" value="Signup" />
        </div>
    </form>
  )

}


}