function controls(){

    const container = document.querySelector('.stream_box');
    const video = document.querySelector('video');
    const videoControls = document.getElementById('controls');
    const progressBar = document.querySelector('.progress-bar');
    const timeline = document.querySelector('.progress');
    const timeline_text = document.querySelector('.timeline_text');
    const vid_duration = document.querySelector('.vid_duration');
    const skipBackward = document.querySelector('.backward-10');
    const skipForward = document.querySelector('.forward-10');
    const volumeBar = document.querySelector('.volume input');
    const volumeBtn = document.querySelector('.volume i');
    const playBtn = document.querySelector('.play');
    const screenBtn = document.querySelector('.screen');
    const close = document.querySelector('.close');
    let timer;

    const hideControls = () => {
        timer = setTimeout((video)=>{
            container.classList.remove('show-controls')
        }, 1500)
    };
    hideControls();

    container.addEventListener("mousemove", ()=>{
        container.classList.add("show-controls");
        clearTimeout(timer);
        hideControls();
    });

    close.addEventListener('click', ()=>{
        history.go(-1);
    });

    const formatTime = time=>{
        let seconds = Math.floor(time%60);
        let minutes = Math.floor(time/60)%60;
        let hours = Math.floor(time/3600);

        seconds = seconds < 10 ? `0${seconds}`:seconds;
        minutes = minutes < 10 ? `0${minutes}`:minutes;
        hours = hours < 10 ? `0${hours}`:hours;

        if(hours == 0){
            return `${minutes}:${seconds}`;
        }
        return `${hours}:${minutes}:${seconds}`;
    };

    video.addEventListener('timeupdate', e=>{
        let { currentTime, duration } = e.target;
        let percent = (currentTime/ duration) * 100;
        progressBar.style.width = `${percent}%`;
        timeline_text.innerHTML = formatTime(currentTime);
    })

    video.addEventListener('loadeddata', e=>{
        vid_duration.innerHTML = formatTime(e.target.duration);
    })

    timeline.addEventListener('click', e=>{
        let timelineWidth = timeline.clientWidth;
        video.currentTime = (e.offsetX / timelineWidth) * video.duration;
    })

    // const draggableBar = e =>{
    //     let timelineWidth = timeline.clientWidth;
    //     progressBar.style.width = `${e.offsetX}px`;
    //     video.currentTime = (e.offsetX / timelineWidth) * video.duration;
    // }

    // timeline.addEventListener('mousedown', ()=>{
    //     timeline.addEventListener('mousemove', draggableBar)
    // })

    // document.addEventListener('mousedup', ()=>{
    //     timeline.removeEventListener('mousemove', draggableBar)
    // })

    volumeBar.addEventListener('change', ()=>{
        video.volume = volumeBar.value;
        if(video.volume == 0){
            volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
        }
        else{
            volumeBtn.classList.replace("fa-volume-xmark" ,"fa-volume-high");
        }
    })

    volumeBtn.addEventListener('click', ()=>{
        video.volume == 0? video.volume = 0.5 : video.volume = 0;

        volumeBar.value = video.volume;

        if(video.volume == 0){
            volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
        }
        else{
            volumeBtn.classList.replace("fa-volume-xmark" ,"fa-volume-high");
        }

    });

    skipBackward.addEventListener('click', ()=>{
        video.currentTime -= 10;
        console.log(video.currentTime);
    })

    skipForward.addEventListener('click', ()=>{
        video.currentTime += 10;
    })

    playBtn.addEventListener('click', ()=>{
        video.paused ? video.play() : video.pause() 
    })

    video.addEventListener('play', ()=>{
        playBtn.firstChild.innerHTML = 'pause';
    })

    video.addEventListener('pause', ()=>{
        playBtn.firstChild.innerHTML = 'play_arrow';
    })

    screenBtn.addEventListener('click', ()=>{
        container.classList.toggle("fullscreen")
        if(document.fullscreenElement){
            screenBtn.querySelector('i').classList.replace("fa-compress", "fa-expand");
            return document.exitFullscreen();
        }
        screenBtn.querySelector('i').classList.replace("fa-expand", "fa-compress")
        container.requestFullscreen();
    });

}