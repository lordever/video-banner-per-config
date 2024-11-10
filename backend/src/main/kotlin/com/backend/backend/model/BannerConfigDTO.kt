package com.backend.backend.model

data class BannerConfigDTO(
    val title: String,
    val subTitle: String,
    val animatedTitle: AnimatedTextDTO? = null,
    val animatedSubTitle: AnimatedTextDTO? = null,
    val video: String? = null,
    val mobileVideo: String? = null,
    val background: String,
    val mobileBackground: String,
)