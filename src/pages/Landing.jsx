import React from 'react';

import { first, second, third, forth } from '../jimboData'

import LandingHeader from '../components/LandingHeader/LandingHeader'
import RigthJumbotron from '../components/Jumbotron/RightJumbotron/RightJumbotron'
import LeftJumbotron from '../components/Jumbotron/LetfJumbotron/LetfJumbotron'
import UnderLine from '../components/UnderLine/UnderLine'
import UserQna from '../components/UserQna/UserQna'
import Footer from '../components/Footer/Footer'
import LetfJumbotron from '../components/Jumbotron/LetfJumbotron/LetfJumbotron';

const Landing = () => {
    return (
        <div>
            <LandingHeader />
            <UnderLine />
            <RigthJumbotron title={first.title} subTitle={first.subTitle} src={first.src} />
            <UnderLine />
            <LeftJumbotron title={ second.title } subTitle={ second.subTitle} src={second.src } alt={second.alt } />
            <UnderLine />
            <RigthJumbotron title={third.title} subTitle={third.subTitle} src={third.src} />
            <UnderLine />
            <LetfJumbotron title={ forth.title} subTitle={ forth.subTitle } src={ forth.src} alt={ forth.alt} />
            <UnderLine />
            <UserQna />
            <UnderLine />
            <Footer />
        </div>
    );
};

export default Landing;
