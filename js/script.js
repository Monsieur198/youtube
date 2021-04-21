'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const gloAcademyList = document.querySelector('.glo-academy-list'),
        trendingList = document.querySelector('.trending-list'),
        musicList = document.querySelector('.music-list');

    const createCard = (dataVideo) => {
        const imgUrl = dataVideo.snippet.thumbnails.high.url,
            videoId = dataVideo.id.videoId ? dataVideo.id.videoId : dataVideo.id,
            title = dataVideo.snippet.title,
            dateVideo = dataVideo.snippet.publishedAt,
            channelTitle = dataVideo.snippet.channelTitle,
            videoViews = dataVideo.statistics ? dataVideo.statistics.viewCount : '',

            card = document.createElement('div');

        card.classList.add('video-card');
        card.innerHTML = `
            <div class="video-thumb">
                <a class="link-video youtube-modal" href="https://www.youtube.com/watch?v=${videoId}">
                    <img src=${imgUrl} alt="" class="thumbnail">
                </a>
            </div>
            <h3 class="video-title">${title}</h3>
            <div class="video-info">
                <span class="video-counter">`;

        if (videoViews) {
            card.innerHTML += `<span class="video-views">${videoViews}</span>`;
        }
                    
        card.innerHTML += `
                    <span class="video-date">${dateVideo}</span>
                </span>
                <span class="video-channel">${channelTitle}</span>
            </div>
        `;
        return card;
    };

    const createList = (wrapper, listVideo) => {
        wrapper.textContent = '';
        
        listVideo.forEach(item => {
            console.log(item);
            wrapper.append(createCard(item));
        });
    };

    createList(gloAcademyList, gloAcademy);
    createList(trendingList, trending);
    createList(musicList, music);
});