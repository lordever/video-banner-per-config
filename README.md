### Overview

This sample shows how to make a banner based on the configuration

```kotlin
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

data class AnimatedTextDTO(
   val text: String,
   val delay: Int
)
```


In case of absence of video or animated titles, static begraund and titles without animation will be taken by default

### Getting started

#### Backend 

1. Open `backend` folder 
2. Run `mvn clean install`
3. Run `mvn spring-boot:run`


#### Frontend
1. Open `frontend` folder
2. Run `npm install`
3. Run `npm run start`

Note: localhost:3000 will be opened automatically. As result you will see 10 banners with different configuration

### Api reference:
* http://localhost:8080/api/v1/banner-config - returns list of banner config
* http://localhost:8080/api/v1/image - returns desktop image (used as background for desktop and tablets)
* http://localhost:8080/api/v1/mobile-image - returns mobile image (used as background for mobile)
* http://localhost:8080/api/v1/video - returns desktop video in mp4 (used as background for desktop and tablets)
* http://localhost:8080/api/v1/mobile-video - returns mobile video in mp4 (used as background for mobile)

### Sample Banner Configuration

```json
[
  {
    "title": "Discover New Horizons",
    "subTitle": "Explore the World with Us",
    "animatedTitle": null,
    "animatedSubTitle": null,
    "video": "http://localhost:8080/api/v1/video",
    "mobileVideo": "http://localhost:8080/api/v1/mobile-video",
    "background": "http://localhost:8080/api/v1/image",
    "mobileBackground": "http://localhost:8080/api/v1/mobile-image"
  },
  {
    "title": "Unleash Your Potential",
    "subTitle": "Achieve Your Dreams Today",
    "animatedTitle": {
      "text": "Unleash Your Potential",
      "delay": 300
    },
    "animatedSubTitle": {
      "text": "Achieve Your Dreams Today",
      "delay": 600
    },
    "video": null,
    "mobileVideo": null,
    "background": "http://localhost:8080/api/v1/image",
    "mobileBackground": "http://localhost:8080/api/v1/mobile-image"
  },
  {
    "title": "Adventure Awaits",
    "subTitle": "Get Ready for a New Journey",
    "animatedTitle": {
      "text": "Adventure Awaits",
      "delay": 300
    },
    "animatedSubTitle": {
      "text": "Get Ready for a New Journey",
      "delay": 600
    },
    "video": "http://localhost:8080/api/v1/video",
    "mobileVideo": "http://localhost:8080/api/v1/mobile-video",
    "background": "http://localhost:8080/api/v1/image",
    "mobileBackground": "http://localhost:8080/api/v1/mobile-image"
  },
  {
    "title": "Find Your Inspiration",
    "subTitle": "Create Memories with Us",
    "animatedTitle": {
      "text": "Find Your Inspiration",
      "delay": 300
    },
    "animatedSubTitle": {
      "text": "Create Memories with Us",
      "delay": 600
    },
    "video": null,
    "mobileVideo": null,
    "background": "http://localhost:8080/api/v1/image",
    "mobileBackground": "http://localhost:8080/api/v1/mobile-image"
  },
  {
    "title": "Step into the Future",
    "subTitle": "Embrace Innovation",
    "animatedTitle": {
      "text": "Step into the Future",
      "delay": 300
    },
    "animatedSubTitle": {
      "text": "Embrace Innovation",
      "delay": 600
    },
    "video": "http://localhost:8080/api/v1/video",
    "mobileVideo": "http://localhost:8080/api/v1/mobile-video",
    "background": "http://localhost:8080/api/v1/image",
    "mobileBackground": "http://localhost:8080/api/v1/mobile-image"
  },
  {
    "title": "Discover Endless Possibilities",
    "subTitle": "Push the Boundaries",
    "animatedTitle": null,
    "animatedSubTitle": null,
    "video": null,
    "mobileVideo": null,
    "background": "http://localhost:8080/api/v1/image",
    "mobileBackground": "http://localhost:8080/api/v1/mobile-image"
  },
  {
    "title": "Make Your Mark",
    "subTitle": "Leave a Legacy",
    "animatedTitle": {
      "text": "Make Your Mark",
      "delay": 300
    },
    "animatedSubTitle": {
      "text": "Leave a Legacy",
      "delay": 600
    },
    "video": "http://localhost:8080/api/v1/video",
    "mobileVideo": "http://localhost:8080/api/v1/mobile-video",
    "background": "http://localhost:8080/api/v1/image",
    "mobileBackground": "http://localhost:8080/api/v1/mobile-image"
  },
  {
    "title": "Embrace the Unknown",
    "subTitle": "Challenge Yourself",
    "animatedTitle": {
      "text": "Embrace the Unknown",
      "delay": 300
    },
    "animatedSubTitle": {
      "text": "Challenge Yourself",
      "delay": 600
    },
    "video": null,
    "mobileVideo": null,
    "background": "http://localhost:8080/api/v1/image",
    "mobileBackground": "http://localhost:8080/api/v1/mobile-image"
  },
  {
    "title": "Journey Beyond Boundaries",
    "subTitle": "Discover What's Possible",
    "animatedTitle": null,
    "animatedSubTitle": null,
    "video": "http://localhost:8080/api/v1/video",
    "mobileVideo": "http://localhost:8080/api/v1/mobile-video",
    "background": "http://localhost:8080/api/v1/image",
    "mobileBackground": "http://localhost:8080/api/v1/mobile-image"
  },
  {
    "title": "Explore New Perspectives",
    "subTitle": "Find Your Path",
    "animatedTitle": {
      "text": "Explore New Perspectives",
      "delay": 300
    },
    "animatedSubTitle": {
      "text": "Find Your Path",
      "delay": 600
    },
    "video": null,
    "mobileVideo": null,
    "background": "http://localhost:8080/api/v1/image",
    "mobileBackground": "http://localhost:8080/api/v1/mobile-image"
  }
]
```