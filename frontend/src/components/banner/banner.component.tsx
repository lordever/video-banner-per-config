import React, {FC} from 'react';
import "./banner.component.css"
import {AnimatedTextModel} from "../../model/banner-config.model";
import useViewport from "../../hooks/useViewPort.hook";

type BannerConfig = {
    videoLink: string;
    mobileVideoLink: string;
    title: AnimatedTextModel;
    subTitle: AnimatedTextModel;
}

const Banner: FC<BannerConfig> = ({title, subTitle, mobileVideoLink, videoLink}) => {
    const view = useViewport()

    const video = view === "mobile" ? mobileVideoLink : videoLink

    return (
        <div className="video-card">
            <video className="video-background" src={video} autoPlay loop muted/>
            <div className="overlay">
                <h2 className="title" style={{animationDelay: `${title.delay}ms`}}>{title.text}</h2>
                <p className="subtitle" style={{animationDelay: `${subTitle.delay}ms`}}>{subTitle.text}</p>
            </div>
        </div>
    );
};

export default Banner;