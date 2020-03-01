import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../redux';

const UserContainer = ({fetchUsers, userData}) => {
    useEffect(() => {
        fetchUsers();
    },[])
    
    return userData.loading ? (
        <h2>Loading...</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div className="cake-wrapper">
            <h2>User List</h2>
            {userData && userData.users && userData.users.map(user => {
               return (
                 <p>{user.name}</p>
               )
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    userData: state.user
});


const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
