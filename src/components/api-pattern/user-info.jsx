import React from "react";

export const UserInfo = ( { user } ) => {

    // const { email, name, phone, username, website, id } = user[0] || {};

    return user?.length > 0 ? (
        <>
            {
                user.map( ( res, i ) => (
                    <React.Fragment key={i}>
                        <h3>User Detail</h3>
                        <p>id : { res.id }</p>
                        <p>user name : { res.username }</p>
                        <p>name : { res.name }</p>
                        <p>phone : { res.phone }</p>
                        <p>email : { res.email }</p>
                        <p>website : { res.website }</p>
                    </React.Fragment>
                ) )
            }
        </>
    ) : (
        <h1>...loading</h1>
    )
}
