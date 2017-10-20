# YouTube 360 video embed

At this moment embedded YouTube 360° videos in all browsers is not working properly.

**Original note from YouTube**
```
To watch 360° videos, you need the latest version of Chrome, Opera, Firefox, 
or MS Edge on your computer. On mobile devices, use the latest version of the 
YouTube app.
```
Reference: [Upload 360-degree videos](https://support.google.com/youtube/answer/6178631?hl=en)

This repo contains a simple script (`youtube-360-embed.js`) and a demo page (`demo.html`) using the [YouTube Player API](https://developers.google.com/youtube/iframe_api_reference) and a simple `browserSupports360()` function [1] by forcing to go to the YouTube site on non-working browsers and mobile devices. On mobile devices the browser will open the YouTube app (if installed) and plays the 360° video in the app.

## Make the script work with your iframe embed.
Normally you'll use the iframe embed code from the YouTube Site and paste it in your site.

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/Qo0U25Xi-Ck" frameborder="0" allowfullscreen></iframe>
```

However we have to add two things:
1. Add `id="iframe-youtube-player"` inside the `<iframe />` element
2. Add `?enablejsapi=1` to the src url

Modified:
```html
<iframe id="iframe-youtube-player" width="560" height="315" src="https://www.youtube.com/embed/Qo0U25Xi-Ck?enablejsapi=1" frameborder="0" allowfullscreen></iframe>
```

### References
[1] - [Stackoverflow - YouTube 360 video iframe does not work in mobile browser](https://stackoverflow.com/questions/35319284/youtube-360-video-iframe-does-not-work-in-mobile-browser)
