export interface BannerConfigModel {
    title: string;
    subTitle: string;
    animatedTitle?: AnimatedTextModel;
    animatedSubTitle?: AnimatedTextModel;
    video?: string;
    mobileVideo?: string;
    background: string;
    mobileBackground: string;
}

export interface AnimatedTextModel {
    text: string;
    delay: number;
}