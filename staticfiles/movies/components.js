
export const containerBox = (method_name)=>{
    return `
    <div class="box">
        <h1>${method_name}</h1>

        <div class="cont_box">
            
        </div>

    </div>
    `
}

export const category_box = (category)=>{
    return `
    <div class="category"}">
        <h1>${category.name}</h1>

        <div class="swiper">
            <div class="cat_sliders swpiper-wrapper ${category.name}"></div>

            </div>
        </div>

    </div>
    `
};

export const movie_box = (movie)=>{

    let date = new Date(movie.release_date)
    let year = date.getFullYear();

    return `
    <div class="mv_box swiper-slide">     
        <div class="img_box"><img src="${movie.cover}"></div>
        <h3 class="title">${movie.title} <span>(${year})</span></h3>

        <div class="mv_details">
            <div class="controls">
                <a href="${movie.slug}/stream/"><i class="fa-solid fa-circle-play"></i></a>
                <a><i class="fa-solid fa-circle-down"></i></a>
            </div>
            <div class="tags">

                <span>+8</span>
                <span>UHD</span>
                <span>2h</span>
    
            </div>

            <a href="${movie.slug}">
                <div class="back"><i class="fa-solid fa-infinity"></i>
                </div><span>Show More..<span>
            </a>

        </div>

    </div>
    `
};

export const trailer = (movie)=>{
    return `
    <div class="video_box">

        <video width="100%" autoplay muted loop>
            <source src="${movie.trailer}">
        </video>
    
    </div>

    <div class="details">

        <div><img src="${movie.logo}"></div>
        
        <div><h2>${movie.description}</h2></div>

        <div class="tags">

            <span>+8</span>
            <span>UHD</span>
            <span>ar/en</span>
            <span>2h</span>
            <span>2023</span>

        </div>

        <div class="ratings">
            <span><i class="fa-brands fa-imdb"></i> ${movie.rating}<span>
        </div> 

        <div class="controls">

            <a href="stream"><i class="fa-solid fa-circle-play"></i><span style="font-size: 20px">Play</span></a>
            <a><i class="fa-solid fa-circle-down"></i><span style="font-size: 20px;">Donwload</span></a>
            <i class="fa-solid fa-plus"></i>
            <i class="fa-solid fa-share-nodes"></i>
            
        </div>

        <div class="watched"><section></section></div>

    </div>
    `
}

export const movies_header = (movie)=>{

    return `
    <div class="cover_box">

        <div class="img">
            <img src="${movie.back_cover}">
        </div>

        <div class="title">
            <img src="${movie.logo}">
        </div>

    </div>
    `

};

export const video_stream = (movie)=>{
    return `
    <div class="stream_box">

        <div class="controls" id="controls">

            <button class="play" style="
            background-color: #1d1d1d62;"><i class="material-symbols-outlined">
                play_arrow
            </i></button>
            <button class="close"><i class="fa-regular fa-circle-xmark"></i></button>
            <button class="screen"><i class="fa-solid fa-expand"></i></button>
            <button class="forward-10 skip"><i class="fa-solid fa-arrow-rotate-right"></i></button>
            <button class="backward-10 skip"><i class="fa-solid fa-arrow-rotate-left"></i></button>
            <div class="volume">
                <i class="fa-solid fa-volume-high"></i>
                <input type="range" min="0" max="1" step="0.05"/>
                <div class="level"></div>
            </div>

            <div class="title"><h1>${movie.title}</h1></div>

            <div class="timeline">
                <div class="progress">
                    <div class="progress-bar"><div class="circ"></div></div>
                </div>
            </div>

            <div class="time_guide"><span class="timeline_text">00</span> / <span class="vid_duration"></span></div>

        </div>

        <video class="video" id="video" preload="metadata">
            <source src="${movie.video}">
        </video>

    </div>
    `
}