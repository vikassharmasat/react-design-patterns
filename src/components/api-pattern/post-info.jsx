import React from "react";

export const PostInfo = ( { post } ) => {

    // const { email, name, phone, username, website, id } = post[0] || {};

    return post?.length > 0 ? (
        <>
            {
                post.map( ( res, i ) => (
                    <React.Fragment key={i}>
                        <h3>User Detail</h3>
                        <p>id : { res.id }</p>
                        <p>user Id : { res.userId }</p>
                        <p>title : { res.title }</p>
                        <p>body : { res.body }</p>
                    </React.Fragment>
                ) )
            }
        </>
    ) : (
        <h1>...loading</h1>
    )
}
