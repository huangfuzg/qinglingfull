/*
 * blueimp Gallery Demo JS 2.12.1
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
    'use strict';

    // Load demo images from flickr:
    // $.ajax({
    //     // Flickr API is SSL only:
    //     // https://code.flickr.net/2014/04/30/flickr-api-going-ssl-only-on-june-27th-2014/
    //     url: 'https://api.flickr.com/services/rest/',
    //     data: {
    //         format: 'json',
    //         method: 'flickr.interestingness.getList',
    //         api_key: '7617adae70159d09ba78cfec73c13be3' // jshint ignore:line
    //     },
    //     dataType: 'jsonp',
    //     jsonp: 'jsoncallback'
    // }).done(function (result) {
    //     var carouselLinks = [],
    //         linksContainer = $('#links'),
    //         baseUrl;
    //     // Add the demo images as links with thumbnails to the page:
    //     // $.each(result.photos.photo, function (index, photo) {
    //     //     baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
    //     //         photo.server + '/' + photo.id + '_' + photo.secret;
    //     //     $('<a/>')
    //     //         .append($('<img>').prop('src', baseUrl + '_s.jpg'))
    //     //         .prop('href', baseUrl + '_b.jpg')
    //     //         .prop('title', photo.title)
    //     //         .attr('data-gallery', '')
    //     //         .appendTo(linksContainer);
    //     //     carouselLinks.push({
    //     //         href: baseUrl + '_c.jpg',
    //     //         title: photo.title
    //     //     });
    //     // });
    //     // Initialize the Gallery as image carousel:
    //     blueimp.Gallery(carouselLinks, {
    //         container: '#blueimp-image-carousel',
    //         carousel: true
    //     });
    // });
    var carouselLinks = []
    blueimp.Gallery(carouselLinks, {
            container: '#blueimp-image-carousel',
            carousel: true
        });
    // Initialize the Gallery as video carousel:
    blueimp.Gallery([
        {
            title: 'Video1',
            href: 'static/factoryshow/img/1.mp4',
            type: 'video/mp4',
            poster: 'static/factoryshow/img/factory1.jpg'
        },
        {
            title: 'Video2',
            href: 'static/factoryshow/img/2.mp4',
            type: 'video/mp4',
            poster: 'https://i.imgur.com/MUSw4Zu.jpg'
        },
        {
            title: 'Video3',
            href: 'static/factoryshow/img/3.mp4',
            type: 'video/mp4',
            poster: 'https://i.imgur.com/MUSw4Zu.jpg'
        },
        {
            title: 'Video4',
            href: 'static/factoryshow/img/4.mp4',
            type: 'video/mp4',
            poster: 'https://i.imgur.com/MUSw4Zu.jpg'
        },
        {
            title: 'Video5',
            href: 'static/factoryshow/img/5.mp4',
            type: 'video/mp4',
            poster: 'https://i.imgur.com/MUSw4Zu.jpg'
        },
    ], {
        container: '#blueimp-video-carousel',
        carousel: true
    });

});
