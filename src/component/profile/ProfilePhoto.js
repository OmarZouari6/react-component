import React from 'react'
import Omar from './omar.jpg';


function ProfilePhoto() {
    return (
        <div>
            <img className="profile" src={Omar} alt={Omar} width={240} height={240}>
            </img>
        </div>
    )
}

export default ProfilePhoto
