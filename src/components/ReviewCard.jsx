export default function ReviewCard({ review, stars }) {
    return (
        <div className="col-md-12 mb-4">
            <div className="card mx-4">
                <div className="card-body">
                    <p className="card-text">{review.text}</p>
                    <div>{stars}</div>
                    <p className="fst-italic">By {review.name}</p>
                </div>
            </div>
        </div>
    )
}