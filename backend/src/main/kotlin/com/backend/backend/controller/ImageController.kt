package com.backend.backend.controller

import org.springframework.core.io.ClassPathResource
import org.springframework.core.io.Resource
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ImageController {
    companion object {
        const val IMAGE_PATH = "/api/v1/image"
        const val MOBILE_IMAGE_PATH = "/api/v1/mobile-image"
    }

    @GetMapping(IMAGE_PATH, produces = [MediaType.IMAGE_JPEG_VALUE])
    fun getImage(): Resource {
        return ClassPathResource("static/desktop.jpg")
    }

    @GetMapping(MOBILE_IMAGE_PATH, produces = [MediaType.IMAGE_JPEG_VALUE])
    fun getMobileImage(): Resource {
        return ClassPathResource("static/mobile.jpg")
    }
}