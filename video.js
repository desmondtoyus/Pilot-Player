
 $('.pilot-player').map(function () {
     let playerId= $(this).attr('id');
     let vastTag = $(this).attr('value');
     console.log(playerId);
     invokeVideoPlayer(playerId, vastTag);
});

function invokeVideoPlayer(player, url) {
    videojs(player).ready(function () {
        this.vastClient({
            adTagUrl: url,
            playAdAlways: true,
            verbosity: 0,
            vpaidFlashLoaderPath: "https://github.com/MailOnline/videojs-vast-vpaid/blob/RELEASE/bin/VPAIDFlash.swf?raw=true",
            autoplay: true
        });
        this.muted(true);
        this.play();
    });
}
