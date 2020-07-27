import React from "react";


const Profile =(props) => {
    const handleName = e => {
        e.preventDefault();
        alert(`my name is ${props.fullName}`) ;
      };

    return (
        <div >
            <div>
                {props.children} 
            <p style={{marginLeft: "300px"}}>fullName: {props.fullName}</p>
            </div>
            <div>
            <p style={{marginLeft: "300px"}}>bio: {props.bio}</p>
            </div>
            <div>
            <p style={{marginLeft: "300px"}}>profession: {props.profession}</p>
            </div>
            <p style={{marginLeft: "300px"}}><button onClick={handleName}>click me </button></p>
        </div>
        
    )
}
    
    Profile.defaultProps = {
    profession : "nothing",
    }
    

export default Profile;

