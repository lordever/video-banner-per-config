package com.backend.backend.controller

import com.backend.backend.model.AnimatedTextDTO
import com.backend.backend.model.BannerConfigDTO
import com.backend.backend.model.VideoDTO
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class BannerConfigController {
    companion object {
        const val CONFIG_PATH = "/api/v1/banner-config"
    }

    @GetMapping(CONFIG_PATH)
    fun getConfig(): ResponseEntity<BannerConfigDTO> {
        val title = AnimatedTextDTO(
            text = "Title",
            delay = 600
        )

        val subTitle = AnimatedTextDTO(
            text = "Sub Title",
            delay = 300
        )

        val video = VideoDTO(
            link = "http://localhost:8080/video/video",
            delay = 600
        )

        val mobileVideo = VideoDTO(
            link = "http://localhost:8080/video/mobile-video",
            delay = 300
        )

        val config = BannerConfigDTO(
            animatedTitle = title,
            animatedSubTitle = subTitle,
            video = video,
            mobileVideo = mobileVideo
        )

        return ResponseEntity.ok().body(config)
    }
}