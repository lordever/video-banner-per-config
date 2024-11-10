import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/store.hook";
import {fetchTestArr} from "../../store/test/test.thunk";
import {useSelector} from "react-redux";
import {selectTestArr} from "../../store/test/test.selector";
import Banner from "../banner/banner.component";
import "./main.component.css";
import {fetchBannerConfig} from "../../store/banner/banner.thunk";
import {selectBannerConfig} from "../../store/banner/banner.selector";

const Main = () => {

    const dispatch = useAppDispatch()
    const testArr = useSelector(selectTestArr)
    const bannerConfig = useSelector(selectBannerConfig)

    useEffect(() => {
        dispatch(fetchTestArr())
        dispatch(fetchBannerConfig())
    }, [dispatch]);


    return (
        <div>
            Main Component

            {!!testArr && !!testArr.length && (
                <ul>
                    {testArr.map((item, index) => (
                        <li key={`${item}_${index}`}>
                            {item}
                        </li>
                    ))
                    }
                </ul>
            )}

            {bannerConfig && (
                <div className="banner-grid">
                    <div className="banner">
                        <Banner title={bannerConfig.animatedTitle}
                                subTitle={bannerConfig.animatedSubTitle}
                                videoLink={bannerConfig.video.link}
                                mobileVideoLink={bannerConfig.mobileVideo.link}/>
                    </div>

                    <div className="banner">
                        <Banner title={bannerConfig.animatedTitle}
                                subTitle={bannerConfig.animatedSubTitle}
                                videoLink={bannerConfig.video.link}
                                mobileVideoLink={bannerConfig.mobileVideo.link}/>
                    </div>

                    <div className="banner">
                        <Banner title={bannerConfig.animatedTitle}
                                subTitle={bannerConfig.animatedSubTitle}
                                videoLink={bannerConfig.video.link}
                                mobileVideoLink={bannerConfig.mobileVideo.link}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Main;