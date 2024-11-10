package com.backend.backend.controller

import org.springframework.core.io.Resource
import org.springframework.core.io.ClassPathResource
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class VideoController {
    companion object {
        const val VIDEO_PATH = "/api/v1/video"
        const val MOBILE_VIDEO_PATH = "/api/v1/mobile-video"
    }

    @GetMapping(VIDEO_PATH, produces = [MediaType.APPLICATION_OCTET_STREAM_VALUE])
    fun getVideo(): Resource {
        return ClassPathResource("static/video.mp4")
    }

    @GetMapping(MOBILE_VIDEO_PATH, produces = [MediaType.APPLICATION_OCTET_STREAM_VALUE])
    fun getMobileVideo(): Resource {
        return ClassPathResource("static/mobile-video.mp4")
    }
}