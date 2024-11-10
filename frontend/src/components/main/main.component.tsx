import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/store.hook";
import {useSelector} from "react-redux";
import Banner from "../banner/banner.component";
import "./main.component.css";
import {fetchBannerConfig} from "../../store/banner/banner.thunk";
import {selectBannerConfigList} from "../../store/banner/banner.selector";

const Main = () => {

    const dispatch = useAppDispatch()
    const bannerConfigList = useSelector(selectBannerConfigList)

    useEffect(() => {
        dispatch(fetchBannerConfig())
    }, [dispatch]);


    return (
        <div className="banner-grid">
            {bannerConfigList?.map((banner, index) => (
                <div className="banner" key={`${banner.title}_${index}`}>
                    <Banner
                        title={banner.title}
                        subTitle={banner.subTitle}
                        animatedTitle={banner.animatedTitle}
                        animatedSubTitle={banner.animatedSubTitle}
                        videoLink={banner.video}
                        mobileVideoLink={banner.mobileVideo}
                        background={banner.background}
                        mobileBackground={banner.mobileBackground}
                    />
                </div>
            ))}
        </div>
    );
}

export default Main;