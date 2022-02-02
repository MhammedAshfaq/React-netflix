import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import RowPost from '../components/RowPost/RowPost'
import Footer from '../components/Footer/Footer'

import requsts from '../requsts'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <RowPost title='NETFLIX ORIGINALS' fetchUrl={requsts.fetchNetFlixOriginals} isLarge />
            <RowPost title='Trending Now' fetchUrl={requsts.fetchTrending} />
            <RowPost title='Top Rated' fetchUrl={requsts.fetchTopRated} />
            <RowPost title='Action Movies' fetchUrl={requsts.fetchActionMovies} />
            <RowPost title='Comedy Movies' fetchUrl={requsts.fetchComedyMovies} />
            <RowPost title='Horror Movies' fetchUrl={requsts.fetchHorrorMovies} />
            <RowPost title='Romantic Movies' fetchUrl={requsts.fetchRomanticMovies} />
            <RowPost title='War Movies' fetchUrl={requsts.fetchWar} />
            <RowPost title='Thriller Movies' fetchUrl={requsts.fetchThriller} />
            {/* <RowPost title='History Movies' fetchUrl={requsts.fetchHistory} /> */}
            {/* <RowPost title='Western Movies' fetchUrl={requsts.fetchWestern} /> */}
            {/* <RowPost title='Fantosy Movies' fetchUrl={requsts.fetchFantasy} /> */}
            {/* <RowPost title='Drama Movies' fetchUrl={requsts.fetchDrama} /> */}
            <Footer />

        </div>
    );
};

export default Home;
