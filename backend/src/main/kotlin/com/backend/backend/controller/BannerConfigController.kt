package com.backend.backend.controller

import com.backend.backend.model.AnimatedTextDTO
import com.backend.backend.model.BannerConfigDTO
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class BannerConfigController {
    companion object {
        const val CONFIG_PATH = "/api/v1/banner-config"
    }

    @GetMapping(CONFIG_PATH)
    fun getConfig(): ResponseEntity<List<BannerConfigDTO>> {
        val video = "http://localhost:8080/api/v1/video"
        val mobileVideo = "http://localhost:8080/api/v1/mobile-video"
        val background = "http://localhost:8080/api/v1/image"
        val mobileBackground = "http://localhost:8080/api/v1/mobile-image"
        
        val banners = listOf(
            BannerConfigDTO(
                title = "Discover New Horizons",
                subTitle = "Explore the World with Us",
                animatedTitle = null,
                animatedSubTitle = null,
                video = video,
                mobileVideo = mobileVideo,
                background = background,
                mobileBackground = mobileBackground
            ),
            BannerConfigDTO(
                title = "Unleash Your Potential",
                subTitle = "Achieve Your Dreams Today",
                animatedTitle = AnimatedTextDTO("Unleash Your Potential", 300),
                animatedSubTitle = AnimatedTextDTO("Achieve Your Dreams Today", 600),
                video = null,
                mobileVideo = null,
                background = background,
                mobileBackground = mobileBackground
            ),
            BannerConfigDTO(
                title = "Adventure Awaits",
                subTitle = "Get Ready for a New Journey",
                animatedTitle = AnimatedTextDTO("Adventure Awaits", 300),
                animatedSubTitle = AnimatedTextDTO("Get Ready for a New Journey", 600),
                video = video,
                mobileVideo = mobileVideo,
                background = background,
                mobileBackground = mobileBackground
            ),
            BannerConfigDTO(
                title = "Find Your Inspiration",
                subTitle = "Create Memories with Us",
                animatedTitle = AnimatedTextDTO("Find Your Inspiration", 300),
                animatedSubTitle = AnimatedTextDTO("Create Memories with Us", 600),
                video = null,
                mobileVideo = null,
                background = background,
                mobileBackground = mobileBackground
            ),
            BannerConfigDTO(
                title = "Step into the Future",
                subTitle = "Embrace Innovation",
                animatedTitle = AnimatedTextDTO("Step into the Future", 300),
                animatedSubTitle = AnimatedTextDTO("Embrace Innovation", 600),
                video = video,
                mobileVideo = mobileVideo,
                background = background,
                mobileBackground = mobileBackground
            ),
            BannerConfigDTO(
                title = "Discover Endless Possibilities",
                subTitle = "Push the Boundaries",
                animatedTitle = null,
                animatedSubTitle = null,
                video = null,
                mobileVideo = null,
                background = background,
                mobileBackground = mobileBackground
            ),
            BannerConfigDTO(
                title = "Make Your Mark",
                subTitle = "Leave a Legacy",
                animatedTitle = AnimatedTextDTO("Make Your Mark", 300),
                animatedSubTitle = AnimatedTextDTO("Leave a Legacy", 600),
                video = video,
                mobileVideo = mobileVideo,
                background = background,
                mobileBackground = mobileBackground
            ),
            BannerConfigDTO(
                title = "Embrace the Unknown",
                subTitle = "Challenge Yourself",
                animatedTitle = AnimatedTextDTO("Embrace the Unknown", 300),
                animatedSubTitle = AnimatedTextDTO("Challenge Yourself", 600),
                video = null,
                mobileVideo = null,
                background = background,
                mobileBackground = mobileBackground
            ),
            BannerConfigDTO(
                title = "Journey Beyond Boundaries",
                subTitle = "Discover What's Possible",
                animatedTitle = null,
                animatedSubTitle = null,
                video = video,
                mobileVideo = mobileVideo,
                background = background,
                mobileBackground = mobileBackground
            ),
            BannerConfigDTO(
                title = "Explore New Perspectives",
                subTitle = "Find Your Path",
                animatedTitle = AnimatedTextDTO("Explore New Perspectives", 300),
                animatedSubTitle = AnimatedTextDTO("Find Your Path", 600),
                video = null,
                mobileVideo = null,
                background = background,
                mobileBackground = mobileBackground
            )
        )


        return ResponseEntity.ok().body(banners)
    }
}