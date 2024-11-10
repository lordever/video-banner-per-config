import React, {FC, useMemo} from 'react';
import "./banner.component.css"
import {AnimatedTextModel} from "../../model/banner-config.model";
import useViewport from "../../hooks/useViewPort.hook";

type BannerConfig = {
    videoLink?: string;
    mobileVideoLink?: string;
    title: string;
    subTitle: string;
    background: string;
    mobileBackground: string;
    animatedTitle?: AnimatedTextModel;
    animatedSubTitle?: AnimatedTextModel;
}

const Banner: FC<BannerConfig> = ({
                                      animatedSubTitle,
                                      animatedTitle,
                                      title,
                                      subTitle,
                                      background,
                                      mobileBackground,
                                      mobileVideoLink,
                                      videoLink
                                  }) => {
    const view = useViewport()

    const video = useMemo(() => (view === "mobile" ? mobileVideoLink : videoLink), [view, mobileVideoLink, videoLink]);
    const backgroundImage = useMemo(() => (view === "mobile" ? mobileBackground : background), [view, mobileBackground, background]);

    const renderTitle = useMemo(() => {
        if (animatedTitle) {
            return <h2 className="title" style={{animationDelay: `${animatedTitle.delay}ms`}}>{animatedTitle.text}</h2>
        }

        return <h2 className="title">{title}</h2>
    }, [animatedTitle, title])

    const renderSubTitle = useMemo(() => {
        if (animatedSubTitle) {
            return <p className="subtitle"
                      style={{animationDelay: `${animatedSubTitle.delay}ms`}}>{animatedSubTitle.text}</p>
        }

        return <p className="subtitle">{subTitle}</p>
    }, [animatedSubTitle, subTitle])

    return (
        <div className="video-card" style={{
            backgroundImage: !video ? `url(${backgroundImage})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            {video && <video className="video-background" src={video} autoPlay loop muted/>}
            <div className="overlay">
                {renderTitle}
                {renderSubTitle}
            </div>
        </div>
    );
};

export default Banner;