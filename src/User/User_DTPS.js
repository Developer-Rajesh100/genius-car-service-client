import React, { useEffect, useState } from "react";
import User from "./User";

const User_DTPS = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/user")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);
    return (
        // <div>
        //     {users.map((user) => (
        //         <User key={user._id} user={user} />
        //     ))}
        // </div>
        <div className="overflow-x-auto mx-5">
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        {/* <th></th> */}
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <User key={user._id} user={user} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User_DTPS;
