package com.backend.backend.model

data class BannerConfigDTO(
    val animatedTitle: AnimatedTextDTO,
    val animatedSubTitle: AnimatedTextDTO,
    val video: VideoDTO,
    val mobileVideo: VideoDTO,
)