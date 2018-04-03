import React from 'react';

function ListComments(props) {
    let { node, children } = props;
    let childnodes = null;

    if(children) {      
        childnodes = children.map(childnode => {
            return (
                <ListComments key={childnode.id} node={childnode} children={childnode.comments} />
            );
        });
    }

    return (
        <li key={node.id}>
            <div className="story_details">
                by<span className="story-details_user--comments">
                <a href={`/user/${node.user}`} className="story-details_user">{node.user}</a>
                </span>| {node.time_ago}
            </div>
            <div dangerouslySetInnerHTML={{ __html: node.content }}/>
            { childnodes &&
                <ul style={{paddingLeft: "15px"}} >{childnodes}</ul>
            }
        </li>
    )
}

const Comments = (props) => {
    const { comments } = props;
    const commentsArray = comments.comments;

    let nodes = commentsArray && commentsArray.map(item => {                   
        return (
            <ListComments key={item.id} node={item} children={item.comments} />
        );
    });

    return (
        (
            comments && 
            <React.Fragment key={comments.id}>
                <div className="story_title" style={{marginTop: "38px"}}>
                    <span className="story-title_link">{comments.title} <small>({comments.domain})</small></span>
                    <div className="story_details">
                        <span className="story-details_points">{comments.points} points | by<span className="story-details_user">{comments.user}</span>| {comments.time_ago}</span>
                    </div>
                </div>
                <ul style={{paddingLeft: "15px"}} >{nodes}</ul>
            </React.Fragment>
        ) || <h1>Loading...</h1>
    )
};
export default Comments;
