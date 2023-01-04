import React from 'react'

const ProfileInfo = ({ icon, value }) => {
    return (
        <div className="grid grid-cols-[50px_1fr] w-3/4 mx-auto mt-4">
            {icon}
            <p className="text-sm text-lumut">{value}</p>
        </div>
    )
}

export default ProfileInfo
