import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
    //  create the state variables we need
    const [restaurant, setRestaurant] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(3)
    const [editIndex, setEditIndex] = useState(-1) // -1 to mean no review is being edited right now

    const [reviews, setReviews] = useState([
        {
            id: 101,
            restaurant: 'Restaurant A',
            review: 'Great food!',
            rating: 5,
        },
        {
            id: 102,
            restaurant: 'Restaurant B',
            review: 'Good service.',
            rating: 4,
        },
    ])

    // function renderReviews() {
    //   const jsx = [];
    //   for (let r of reviews) {
    //     jsx.push(<li>{r.restaurant} : {r.review}</li>)
    //   }
    //   return jsx;
    // }

    const renderReview = (review, index) => (
        <div>
            <strong>{review.restaurant}</strong> - {review.review} - Rating:{' '}
            {review.rating}/5
            <button
                className='ms-2 btn btn-primary btn-sm'
                onClick={() => {
                    // remember the index of the review that we are
                    setEditIndex(index)
                    setRestaurant(review.restaurant)
                    setReview(review.review)
                    setRating(review.rating)
                }}
            >
                Edit
            </button>
            <button
                className='ms-2 btn btn-danger btn-sm'
                onClick={() => {
                    setReviews([
                        ...reviews.slice(0, index),
                        ...reviews.slice(index + 1),
                    ])
                }}
            >
                Delete
            </button>
        </div>
    )

    const handleSubmit = (e) => {
        // clone the original array
        //  const cloned = reviews.slice(); // when you slice an array with no arguments, you get back an exact clome
        //  // modify the clone
        //  cloned.push({
        //   restaurant, review, rating
        //  })
        //  // set the clone back into the state
        //  setReviews(cloned);
        if (editIndex === -1) {
            setReviews([...reviews, { restaurant, review, rating }])
        } else {
            const oldReview = reviews[editIndex]
            const newReview = {
                id: oldReview.id,
                restaurant: restaurant,
                review: review,
                rating: rating,
            }
            // // clone the original array
            // const cloned = reviews.slice();
            // // update the clone
            // cloned[editIndex] = newReview;
            // // set the cloned back into the state
            // setReviews(cloned);

            setReviews(
                [...reviews.slice(0, editIndex), newReview],
                ...reviews.slice(editIndex + 1)
            )
        }
        setRestaurant('')
        setReview('')
        setRating('3')
        setEditIndex(-1)
    }

    const renderForm = () => {
        return (
            <div>
                <input
                    type='text'
                    className='form-control mb-2'
                    placeholder='Restaurant name'
                    value={restaurant}
                    onChange={(e) => setRestaurant(e.target.value)}
                />
                <input
                    type='text'
                    className='form-control mb-2'
                    placeholder='Your review'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <select
                    className='form-control mb-2'
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <button className='btn btn-primary me-2' onClick={handleSubmit}>
                    {editIndex === -1 ? 'Create' : 'Update'}
                </button>
            </div>
        )
    }

    return (
        <>
            <div className='container'>
                <h1>Restaurant Reviews</h1>
                <ul className='list-group'>
                    {
                        // if the review we are rendering is not being edited, display it normally
                        // if the review we are rendering is being edited, we will display a form instead
                        reviews.map((review, index) => (
                            <li className='list-group-item'>
                                {index === editIndex ? (
                                    <>
                                        <h3>Update Review</h3>
                                        {renderForm()}
                                    </>
                                ) : (
                                    renderReview(review, index)
                                )}
                            </li>
                        ))
                    }
                </ul>

                {
                    // only show the form for adding review if no reviews are being edited
                    editIndex === -1 ? (
                        <div className='mt-3'>
                            <h2>Add Review</h2>
                            {renderForm()}
                        </div>
                    ) : null
                }
            </div>
        </>
    )
}
