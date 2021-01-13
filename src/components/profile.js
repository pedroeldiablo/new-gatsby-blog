import React from 'react'
import styled from 'styled-components'

const ProfileSection = styled.div`
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
position: sticky;
height: fit-content;
top: 0;
`


const Profile = () => (
    <ProfileSection >
        <div >
            <div>
                <h4>Peter Williams</h4>
                <p>React Developer</p>
                <p>Formerly Konstructive, Boden, and Expend</p>
            </div>
        </div> 
    </ProfileSection > 
)

export default Profile
