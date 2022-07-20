import React from "react";

const User = ({ user }) => {
    const { first_name, last_name, email, phone_number, address } = user;
    return (
        <tr>
            {/* <th></th> */}
            <td>{first_name + " " + last_name}</td>
            <td>{email}</td>
            <td>{phone_number}</td>
            <td>{address}</td>
        </tr>
    );
};

export default User;
