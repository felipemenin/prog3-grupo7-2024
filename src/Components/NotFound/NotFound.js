import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <section className="notFound">
        <h1>Error 404</h1>
        <iframe
          className="gif"
          src="https://giphy.com/embed/C21GGDOpKT6Z4VuXyn"
          title="Error 404"
        ></iframe>
      </section>
    </>
  );
};

export default NotFound;
