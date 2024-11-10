export interface BannerConfigModel {
    animatedTitle: AnimatedTextModel;
    animatedSubTitle: AnimatedTextModel;
    video: VideoModel;
    mobileVideo: VideoModel;
}

export interface AnimatedTextModel {
    text: string;
    delay: number;
}

interface VideoModel {
    link: string;
    delay: number;
}