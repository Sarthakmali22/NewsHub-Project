import Navbar from "../components/Navbar/Navbar";
import NewsCard from "../components/NewsCard/NewsCard";

function Home() {

  const articles = [

    {
      title: "India wins Champions Trophy",
      description: "India defeated Australia in a thrilling match.",
      urlToImage: "https://picsum.photos/400/200?1",
      source: {
        name: "ESPN"
      }
    },

    {
      title: "React 20 Released",
      description: "React introduces exciting new features.",
      urlToImage: "https://picsum.photos/400/200?2",
      source: {
        name: "React Blog"
      }
    },

    {
      title: "AI is Changing the World",
      description: "Artificial Intelligence is growing rapidly.",
      urlToImage: "https://picsum.photos/400/200?3",
      source: {
        name: "OpenAI"
      }
    }

  ];

  return (
    <>
      <Navbar />

      <div
        style={{
          marginTop: "100px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        {
          articles.map((article, index) => (
            <NewsCard
              key={index}
              article={article}
            />
          ))
        }
      </div>
    </>
  );
}

export default Home;