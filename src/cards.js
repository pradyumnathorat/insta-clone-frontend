import "./cards.css";

const Card = ({post}) => {
    return (

        <>
        <section className="card">
            <section className="card-header">
                <div>
                    <div className="card-name">{post.Author}</div>
                    <div className="card-place">{post.Location}</div>
                </div>
                <span>
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </span>
            </section>
            <section className="card-img">
                <img src={`http://localhost:3004/images/${post.image}`} alt="place" />
            </section>
            <section className="card-action" >
                <span className="heart">
                <i className="fa fa-heart" aria-hidden="true"></i>
                </span>
                <span className="paper">
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </span>
                <span>{post.date}</span>
            </section>
            <section className="likes">
                {post.likes} Likes
            </section>
            <section className="description">
                {post.Description}
            </section>

        </section>
        </>
    )
}
export default Card;