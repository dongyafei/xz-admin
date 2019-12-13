export default {
  data() {
    return {
      elementIcon: ["el-icon-platform-eleme","el-icon-eleme","el-icon-delete-solid","el-icon-delete","el-icon-s-tools","el-icon-setting","el-icon-user-solid","el-icon-user","el-icon-phone","el-icon-phone-outline","el-icon-more","el-icon-more-outline","el-icon-star-on","el-icon-star-off","el-icon-s-goods","el-icon-goods","el-icon-warning","el-icon-warning-outline","el-icon-question","el-icon-info","el-icon-remove","el-icon-circle-plus","el-icon-success","el-icon-error","el-icon-zoom-in","el-icon-zoom-out","el-icon-remove-outline","el-icon-circle-plus-outline","el-icon-circle-check","el-icon-circle-close","el-icon-s-help","el-icon-help","el-icon-minus","el-icon-plus","el-icon-check","el-icon-close","el-icon-picture","el-icon-picture-outline","el-icon-picture-outline-round","el-icon-upload","el-icon-upload2","el-icon-download","el-icon-camera-solid","el-icon-camera","el-icon-video-camera-solid","el-icon-video-camera","el-icon-message-solid","el-icon-bell","el-icon-s-cooperation","el-icon-s-order","el-icon-s-platform","el-icon-s-fold","el-icon-s-unfold","el-icon-s-operation","el-icon-s-promotion","el-icon-s-home","el-icon-s-release","el-icon-s-ticket","el-icon-s-management","el-icon-s-open","el-icon-s-shop","el-icon-s-marketing","el-icon-s-flag","el-icon-s-comment","el-icon-s-finance","el-icon-s-claim","el-icon-s-custom","el-icon-s-opportunity","el-icon-s-data","el-icon-s-check","el-icon-s-grid","el-icon-menu","el-icon-share","el-icon-d-caret","el-icon-caret-left","el-icon-caret-right","el-icon-caret-bottom","el-icon-caret-top","el-icon-bottom-left","el-icon-bottom-right","el-icon-back","el-icon-right","el-icon-bottom","el-icon-top","el-icon-top-left","el-icon-top-right","el-icon-arrow-left","el-icon-arrow-right","el-icon-arrow-down","el-icon-arrow-up","el-icon-d-arrow-left","el-icon-d-arrow-right","el-icon-video-pause","el-icon-video-play","el-icon-refresh","el-icon-refresh-right","el-icon-refresh-left","el-icon-finished","el-icon-sort","el-icon-sort-up","el-icon-sort-down","el-icon-rank","el-icon-loading","el-icon-view","el-icon-c-scale-to-original","el-icon-date","el-icon-edit","el-icon-edit-outline","el-icon-folder","el-icon-folder-opened","el-icon-folder-add","el-icon-folder-remove","el-icon-folder-delete","el-icon-folder-checked","el-icon-tickets","el-icon-document-remove","el-icon-document-delete","el-icon-document-copy","el-icon-document-checked","el-icon-document","el-icon-document-add","el-icon-printer","el-icon-paperclip","el-icon-takeaway-box","el-icon-search","el-icon-monitor","el-icon-attract","el-icon-mobile","el-icon-scissors","el-icon-umbrella","el-icon-headset","el-icon-brush","el-icon-mouse","el-icon-coordinate","el-icon-magic-stick","el-icon-reading","el-icon-data-line","el-icon-data-board","el-icon-pie-chart","el-icon-data-analysis","el-icon-collection-tag","el-icon-film","el-icon-suitcase","el-icon-suitcase-1","el-icon-receiving","el-icon-collection","el-icon-files","el-icon-notebook-1","el-icon-notebook-2","el-icon-toilet-paper","el-icon-office-building","el-icon-school","el-icon-table-lamp","el-icon-house","el-icon-no-smoking","el-icon-smoking","el-icon-shopping-cart-full","el-icon-shopping-cart-1","el-icon-shopping-cart-2","el-icon-shopping-bag-1","el-icon-shopping-bag-2","el-icon-sold-out","el-icon-sell","el-icon-present","el-icon-box","el-icon-bank-card","el-icon-money","el-icon-coin","el-icon-wallet","el-icon-discount","el-icon-price-tag","el-icon-news","el-icon-guide","el-icon-male","el-icon-female","el-icon-thumb","el-icon-cpu","el-icon-link","el-icon-connection","el-icon-open","el-icon-turn-off","el-icon-set-up","el-icon-chat-round","el-icon-chat-line-round","el-icon-chat-square","el-icon-chat-dot-round","el-icon-chat-dot-square","el-icon-chat-line-square","el-icon-message","el-icon-postcard","el-icon-position","el-icon-turn-off-microphone","el-icon-microphone","el-icon-close-notification","el-icon-bangzhu","el-icon-time","el-icon-odometer","el-icon-crop","el-icon-aim","el-icon-switch-button","el-icon-full-screen","el-icon-copy-document","el-icon-mic","el-icon-stopwatch","el-icon-medal-1","el-icon-medal","el-icon-trophy","el-icon-trophy-1","el-icon-first-aid-kit","el-icon-discover","el-icon-place","el-icon-location","el-icon-location-outline","el-icon-location-information","el-icon-add-location","el-icon-delete-location","el-icon-map-location","el-icon-alarm-clock","el-icon-timer","el-icon-watch-1","el-icon-watch","el-icon-lock","el-icon-unlock","el-icon-key","el-icon-service","el-icon-mobile-phone","el-icon-bicycle","el-icon-truck","el-icon-ship","el-icon-basketball","el-icon-football","el-icon-soccer","el-icon-baseball","el-icon-wind-power","el-icon-light-rain","el-icon-lightning","el-icon-heavy-rain","el-icon-sunrise","el-icon-sunrise-1","el-icon-sunset","el-icon-sunny","el-icon-cloudy","el-icon-partly-cloudy","el-icon-cloudy-and-sunny","el-icon-moon","el-icon-moon-night","el-icon-dish","el-icon-dish-1","el-icon-food","el-icon-chicken","el-icon-fork-spoon","el-icon-knife-fork","el-icon-burger","el-icon-tableware","el-icon-sugar","el-icon-dessert","el-icon-ice-cream","el-icon-hot-water","el-icon-water-cup","el-icon-coffee-cup","el-icon-cold-drink","el-icon-goblet","el-icon-goblet-full","el-icon-goblet-square","el-icon-goblet-square-full","el-icon-refrigerator","el-icon-grape","el-icon-watermelon","el-icon-cherry","el-icon-apple","el-icon-pear","el-icon-orange","el-icon-coffee","el-icon-ice-tea","el-icon-ice-drink","el-icon-milk-tea","el-icon-potato-strips","el-icon-lollipop","el-icon-ice-cream-square","el-icon-ice-cream-round"],
      fontAwesomeIcon: ["address-book","address-book-o","address-card","address-card-o","bandcamp","bath","bathtub","drivers-license","drivers-license-o","eercast","envelope-open","envelope-open-o","etsy","free-code-camp","grav","handshake-o","id-badge","id-card","id-card-o","imdb","linode","meetup","microchip","podcast","quora","ravelry","s15","shower","snowflake-o","superpowers","telegram","thermometer","thermometer-0","thermometer-1","thermometer-2","thermometer-3","thermometer-4","thermometer-empty","thermometer-full","thermometer-half","thermometer-quarter","thermometer-three-quarters","times-rectangle","times-rectangle-o","user-circle","user-circle-o","user-o","vcard","vcard-o","window-close","window-close-o","window-maximize","window-minimize","window-restore","wpexplorer","address-book","address-book-o","address-card","address-card-o","adjust","american-sign-language-interpreting","anchor","archive","area-chart","arrows","arrows-h","arrows-v","asl-interpreting","assistive-listening-systems","asterisk","at","audio-description","automobile","balance-scale","ban","bank","bar-chart","bar-chart-o","barcode","bars","bath","bathtub","battery","battery-0","battery-1","battery-2","battery-3","battery-4","battery-empty","battery-full","battery-half","battery-quarter","battery-three-quarters","bed","beer","bell","bell-o","bell-slash","bell-slash-o","bicycle","binoculars","birthday-cake","blind","bluetooth","bluetooth-b","bolt","bomb","book","bookmark","bookmark-o","braille","briefcase","bug","building","building-o","bullhorn","bullseye","bus","cab","calculator","calendar","calendar-check-o","calendar-minus-o","calendar-o","calendar-plus-o","calendar-times-o","camera","camera-retro","car","caret-square-o-down","caret-square-o-left","caret-square-o-right","caret-square-o-up","cart-arrow-down","cart-plus","cc","certificate","check","check-circle","check-circle-o","check-square","check-square-o","child","circle","circle-o","circle-o-notch","circle-thin","clock-o","clone","close","cloud","cloud-download","cloud-upload","code","code-fork","cog","cogs","comment","comment-o","commenting","commenting-o","comments","comments-o","compass","copyright","creative-commons","credit-card","credit-card-alt","crop","crosshairs","cube","cubes","cutlery","dashboard","database","deaf","deafness","desktop","diamond","dot-circle-o","download","drivers-license","drivers-license-o","edit","ellipsis-h","ellipsis-v","envelope","envelope-o","envelope-open","envelope-open-o","envelope-square","eraser","exchange","exclamation","exclamation-circle","exclamation-triangle","external-link","external-link-square","eye","eye-slash","eyedropper","fax","feed","female","fighter-jet","file-archive-o","file-audio-o","file-code-o","file-excel-o","file-image-o","file-movie-o","file-pdf-o","file-photo-o","file-picture-o","file-powerpoint-o","file-sound-o","file-video-o","file-word-o","file-zip-o","film","filter","fire","fire-extinguisher","flag","flag-checkered","flag-o","flash","flask","folder","folder-o","folder-open","folder-open-o","frown-o","futbol-o","gamepad","gavel","gear","gears","gift","glass","globe","graduation-cap","group","hand-grab-o","hand-lizard-o","hand-paper-o","hand-peace-o","hand-pointer-o","hand-rock-o","hand-scissors-o","hand-spock-o","hand-stop-o","handshake-o","hashtag","hdd-o","headphones","heart","heart-o","heartbeat","history","home","hotel","hourglass","hourglass-1","hourglass-2","hourglass-3","hourglass-end","hourglass-half","hourglass-o","hourglass-start","i-cursor","id-badge","id-card","id-card-o","image","inbox","industry","info","info-circle","institution","key","keyboard-o","language","laptop","leaf","legal","lemon-o","level-down","level-up","life-bouy","life-buoy","life-ring","life-saver","lightbulb-o","line-chart","location-arrow","lock","low-vision","magic","magnet","mail-forward","mail-reply","mail-reply-all","male","map","map-marker","map-o","map-pin","map-signs","meh-o","microchip","microphone","microphone-slash","minus","minus-circle","minus-square","minus-square-o","mobile","mobile-phone","money","moon-o","mortar-board","motorcycle","mouse-pointer","music","navicon","newspaper-o","object-group","object-ungroup","paint-brush","paper-plane","paper-plane-o","paw","pencil","pencil-square","pencil-square-o","percent","phone","phone-square","photo","picture-o","pie-chart","plane","plug","plus","plus-circle","plus-square","plus-square-o","podcast","print","puzzle-piece","qrcode","question","question-circle","question-circle-o","quote-left","quote-right","random","recycle","refresh","registered","remove","reorder","reply","reply-all","retweet","road","rocket","rss","rss-square","s15","search","search-minus","search-plus","send","send-o","server","share","share-alt","share-alt-square","share-square","share-square-o","shield","ship","shopping-bag","shopping-basket","shopping-cart","shower","sign-in","sign-language","sign-out","signal","signing","sitemap","sliders","smile-o","snowflake-o","soccer-ball-o","sort","sort-alpha-asc","sort-alpha-desc","sort-amount-asc","sort-amount-desc","sort-asc","sort-desc","sort-down","sort-numeric-asc","sort-numeric-desc","sort-up","space-shuttle","spinner","spoon","square","square-o","star","star-half","star-half-empty","star-half-full","star-half-o","star-o","sticky-note","sticky-note-o","street-view","suitcase","sun-o","support","tablet","tachometer","tag","tags","tasks","taxi","television","terminal","thermometer","thermometer-0","thermometer-1","thermometer-2","thermometer-3","thermometer-4","thermometer-empty","thermometer-full","thermometer-half","thermometer-quarter","thermometer-three-quarters","thumb-tack","thumbs-down","thumbs-o-down","thumbs-o-up","thumbs-up","ticket","times","times-circle","times-circle-o","times-rectangle","times-rectangle-o","tint","toggle-down","toggle-left","toggle-on","toggle-right","toggle-up","trademark","trash","trash-o","tree","trophy","truck","tty","tv","umbrella","universal-access","university","unlock","unlock-alt","unsorted","upload","user","user-circle","user-circle-o","user-o","user-plus","user-secret","user-times","users","vcard","vcard-o","video-camera","volume-control-phone","volume-down","volume-up","warning","wheelchair","wheelchair-alt","wifi","window-close","window-close-o","window-maximize","window-minimize","window-restore","wrench","american-sign-language-interpreting","asl-interpreting","assistive-listening-systems","audio-description","blind","braille","cc","deaf","deafness","hard-hearing","low-vision","question-circle-o","sign-language","signing","tty","universal-access","volume-control-phone","wheelchair","wheelchair-alt","hand-grab-o","hand-lizard-o","hand-o-down","hand-o-left","hand-o-right","hand-o-up","hand-paper-o","hand-peace-o","hand-pointer-o","hand-rock-o","hand-scissors-o","hand-spock-o","hand-stop-o","thumbs-down","thumbs-o-down","thumbs-o-up","thumbs-up","ambulance","automobile","bicycle","bus","cab","car","fighter-jet","motorcycle","plane","rocket","ship","space-shuttle","subway","taxi","train","truck","wheelchair","wheelchair-alt","genderless","intersex","mars","mars-double","mars-stroke","mars-stroke-h","mars-stroke-v","mercury","neuter","transgender","transgender-alt","venus","venus-double","venus-mars","file","file-archive-o","file-audio-o","file-code-o","file-excel-o","file-image-o","file-movie-o","file-o","file-pdf-o","file-photo-o","file-picture-o","file-powerpoint-o","file-sound-o","file-text","file-text-o","file-video-o","file-word-o","file-zip-o","circle-o-notch","cog","gear","refresh","spinner","check-square","check-square-o","circle","circle-o","dot-circle-o","minus-square","minus-square-o","plus-square","plus-square-o","square","square-o","cc-amex","cc-diners-club","cc-discover","cc-jcb","cc-mastercard","cc-paypal","cc-stripe","cc-visa","credit-card","credit-card-alt","google-wallet","paypal","area-chart","bar-chart","bar-chart-o","line-chart","pie-chart","bitcoin","btc","cny","dollar","eur","euro","gbp","gg","gg-circle","ils","inr","jpy","krw","money","rmb","rouble","rub","ruble","rupee","shekel","sheqel","try","turkish-lira","usd","won","yen","align-center","align-justify","align-left","align-right","bold","chain","chain-broken","clipboard","columns","copy","cut","dedent","eraser","file","file-o","file-text","file-text-o","files-o","floppy-o","font","header","indent","italic","link","list","list-alt","list-ol","list-ul","outdent","paperclip","paragraph","paste","repeat","rotate-left","rotate-right","save","scissors","strikethrough","subscript","superscript","table","text-height","text-width","th","th-large","th-list","underline","undo","unlink","angle-double-down","angle-double-left","angle-double-right","angle-double-up","angle-down","angle-left","angle-right","angle-up","arrow-circle-down","arrow-circle-left","arrow-circle-o-down","arrow-circle-o-left","arrow-circle-o-right","arrow-circle-o-up","arrow-circle-right","arrow-circle-up","arrow-down","arrow-left","arrow-right","arrow-up","arrows","arrows-alt","arrows-h","arrows-v","caret-down","caret-left","caret-right","caret-square-o-down","caret-square-o-left","caret-square-o-right","caret-square-o-up","caret-up","chevron-circle-down","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-down","chevron-left","chevron-right","chevron-up","exchange","hand-o-down","hand-o-left","hand-o-right","hand-o-up","long-arrow-down","long-arrow-left","long-arrow-right","long-arrow-up","toggle-down","toggle-left","toggle-right","toggle-up","arrows-alt","backward","compress","eject","expand","fast-backward","fast-forward","forward","pause","pause-circle","pause-circle-o","play","play-circle","play-circle-o","random","step-backward","step-forward","stop","stop-circle","stop-circle-o","youtube-play","500px","adn","amazon","android","angellist","apple","bandcamp","behance","behance-square","bitbucket","bitbucket-square","bitcoin","black-tie","bluetooth","bluetooth-b","btc","buysellads","cc-amex","cc-diners-club","cc-discover","cc-jcb","cc-mastercard","cc-paypal","cc-stripe","cc-visa","chrome","codepen","codiepie","connectdevelop","contao","css3","dashcube","delicious","deviantart","digg","dribbble","dropbox","drupal","edge","eercast","empire","envira","etsy","expeditedssl","fa","facebook","facebook-f","facebook-ficial","facebook-square","firefox","first-order","flickr","font-awesome","fonticons","fort-awesome","forumbee","foursquare","free-code-camp","ge","get-pocket","gg","gg-circle","git","git-square","github","github-alt","github-square","gitlab","gittip","glide","glide-g","google","google-plus","google-plus-circle","google-plus-square","google-wallet","gratipay","grav","hacker-news","houzz","html5","imdb","instagram","internet-explorer","ioxhost","joomla","jsfiddle","lastfm","lastfm-square","leanpub","linkedin","linkedin-square","linode","linux","maxcdn","meanpath","medium","meetup","mixcloud","modx","odnoklassniki","odnoklassniki-square","opencart","openid","opera","optin-monster","pagelines","paypal","pied-piper","pied-piper-alt","pied-piper-pp","pinterest","pinterest-p","pinterest-square","product-hunt","qq","quora","ra","ravelry","rebel","reddit","reddit-alien","reddit-square","renren","resistance","safari","scribd","sellsy","share-alt","share-alt-square","shirtsinbulk","simplybuilt","skyatlas","skype","slack","slideshare","snapchat","snapchat-ghost","snapchat-square","soundcloud","spotify","stack-exchange","stack-overflow","steam","steam-square","stumbleupon","stumbleupon-circle","superpowers","telegram","tencent-weibo","themeisle","trello","tripadvisor","tumblr","tumblr-square","twitch","twitter","twitter-square","usb","viacoin","viadeo","viadeo-square","vimeo","vimeo-square","vine","vk","wechat","weibo","weixin","whatsapp","wikipedia-w","windows","wordpress","wpbeginner","wpexplorer","wpforms","xing","xing-square","y-combinator","y-combinator-square","yahoo","yc","yc-square","yelp","yoast","youtube","youtube-play","youtube-square","ambulance","h-square","heart","heart-o","heartbeat","hospital-o","medkit","plus-square","stethoscope","user-md","wheelchair","wheelchair-alt","edit","ban"]
    }
  }
}