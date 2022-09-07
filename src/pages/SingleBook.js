import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function SingleBook() {
  const location = useLocation();
  const { authors, bookId, description, image, title } = location.state;
  const { loading, data, refetch } = useQuery(QUERY_REVIEWS, {
    variables: { bookId: bookId },
  });
  
  const [reviewText, setReviewText] = useState("");
  const me = useQuery(GET_ME);
  console.log(me);
  const [createReview] = useMutation(CREATE_REVIEW, {
    update(cache, { data: { createReview } }) {
      try {
        const { me } = cache.readQuery({ query: GET_ME });
        cache.writeQuery({
          query: GET_ME,
          data: { me: { ...me, reviews: [...me.reviews, createReview] } },
        });
      } catch (err) {
        console.warn("First review by user.");
      }

      const { reviews } = cache.readQuery({
        query: QUERY_REVIEWS,
        variables: { bookId: bookId },
      });
      cache.writeQuery({
        query: QUERY_REVIEWS,
        data: { reviews: [createReview, ...reviews] },
      });
    },
  });

  return (
    <>
      <Link to="/">←Back To Search</Link>
      <div
        className="uk-child-width-1-3@m uk-grid-small uk-grid-match"
        uk-grid="true">
        <div>
          <div className="uk-card uk-card-default" id="single-book">
            <div className="uk-card-media-top">
              <h2>{title}</h2>
              <h4>{authors}</h4>
              <img src={image} alt={`cover of ${title}`} />
              <p className="uk-panel-scrollable">{description}</p>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default SingleBook;
