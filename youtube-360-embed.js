class YouTube360Embed {
  constructor () {
    this.player = new YT.Player('iframe-youtube-player', {
      events: {
        'onReady': this.onPlayerReady.bind(this),
        'onStateChange': this.onPlayerStateChange.bind(this)
      }
    });
  }

  onPlayerReady (event) {
    this.videoData = event.target.getVideoData();
  }

  onPlayerStateChange (event) {
    if (event.data === YT.PlayerState.BUFFERING || event.data === YT.PlayerState.PLAYING) {
      if (this.videoData && !this.browserSupports360()) {
        event.target.pauseVideo();
        window.location = 'https://www.youtube.com/watch?v=' + this.videoData.video_id + '&autoplay=1';
      }
    }
  }

  browserSupports360 () {
    // YouTube supports 360 videos in a limited set of browsers,
    // see https://support.google.com/youtube/answer/6178631
    var ua = navigator.userAgent;

    // No mobile browser is supported at the moment
    if (/Mobile/.test(ua) || /Tablet/.test(ua)) return false;

    // Chrome >= 40
    if (/Chrome\/[^123][0-9]/.test(ua) && !/Edge\//.test(ua) && !/OPR\//.test(ua)) return true;

    // Firefox >= 40
    if (/Firefox\/[^123][0-9]/.test(ua)) return true;

    // Microsoft Edge
    if (/Edge\//.test(ua)) return true;

    // Opera >= 30
    if (/OPR\/[^12][0-9]/.test(ua)) return true;

    return false;
  }
}

function setupYouTube360Embed() {
  var tag = document.createElement('script');
  tag.id = 'iframe-youtube-api-360';
  tag.src = 'https://www.youtube.com/iframe_api';

  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
setupYouTube360Embed();

function onYouTubeIframeAPIReady() {
  new YouTube360Embed();
}
