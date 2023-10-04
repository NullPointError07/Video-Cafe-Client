import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import VideoList from "@/components/VideoList";

const Home = () => {
  return (
    <section>
      <Banner></Banner>
      <SearchBar />
      <VideoList />
    </section>
  );
};

export default Home;
