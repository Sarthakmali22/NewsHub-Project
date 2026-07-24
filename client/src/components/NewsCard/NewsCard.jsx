import "./NewsCard.css";

function NewsCard({ article }) {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src={article.urlToImage}
          alt={article.title}
        />
      </div>

      <div className="card-content">
        <h3>{article.title}</h3>

        <h6 className="news-source">
          {article.source.name}
        </h6>

        <p className="news-desc">
          {article.description}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;