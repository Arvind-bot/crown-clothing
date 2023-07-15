import "./NoMatchingRoute.styles.scss";

const NoMatchingRoute = () => {
  return (
    <div className="no-matching-route-container">
      <div className="no-matching-route-message-container">
        <h2>Page Not Found</h2>
        <p>
          Oops! how did you end up here, click below button to go to home page.
        </p>
        <a href="/">Go to Home Page</a>
      </div>
    </div>
  );
};

export default NoMatchingRoute;
