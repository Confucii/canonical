import "./BlogPost.css";
import { DateTime } from "luxon";

function BlogPost(data) {
  const unwrappedData = data.data;

  return (
    <div className="BlogPost">
      <header className="blogpost-name">
        <p>
          {unwrappedData._embedded["wp:term"][2][0]?.name.toUpperCase() ||
            "MISSING THEME"}
        </p>
      </header>
      <div className="blogpost-content">
        <div className="blogpost-image">
          <a href={unwrappedData.link}>
            <img className="blogpost-img" src={unwrappedData.featured_media} />
          </a>
        </div>
        <div className="blogpost-title">
          <a href={unwrappedData.link}>{unwrappedData.title.rendered}</a>
        </div>
        <div className="blogpost-author-time">
          {"By "}
          <a href={unwrappedData._embedded.author[0].link}>
            {unwrappedData._embedded.author[0].name}
          </a>
          {` on ${DateTime.fromISO(unwrappedData.date_gmt).toFormat(
            "dd LLLL yyyy"
          )}`}
        </div>
      </div>
      <footer className="blogpost-footer">
        <p>Article</p>
      </footer>
    </div>
  );
}

export default BlogPost;
