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

