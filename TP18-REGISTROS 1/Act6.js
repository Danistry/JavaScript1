const youtube = (title, enlace, channel, timeLimit, views, likes, disliks, wSub, hd) => {

    return {
        title,
        enlace,
        channel,
        timeLimit,
        views,
        likes,
        disliks,
        wSub,
        hd
    };
}

let videos = []

videos.push(youtube('Hola Mundo', 'https://www.youtube.com/watch?v=kaOVY7RSfy8&ab_channel=Deuk', 'Deuk', '3:34', 1000, 4343, 784, false, true))
videos.push(youtube('Introducción', 'https://www.youtube.com/watch?v=2SetvwBV-SU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&ab_channel=jonmircha', 'Jornmircha', '15:16', 81.826, 2914, 10, false, true))
videos.push(youtube('Caracteristicas y gramatica', 'https://www.youtube.com/watch?v=C5FXZ2ki13k&ab_channel=jonmircha', 'JornMircha', '21:42', 27.992, 1602, 6, false, true))
videos.push(youtube('Var vs Let', 'hhttps://www.youtube.com/watch?v=tmRa0_EvMoc&ab_channel=jonmircha', 'JornMircha', '22:44', 27.032, 1830, 5, false, true))
videos.push(youtube('constantes', 'https://www.youtube.com/watch?v=PIHZRj99nHU&ab_channel=jonmircha', 'JornMircha', '18:41', 16.756, 1739, 6, false, true))


const moreLikes = (youtube) => {
    let max = -1
    for (let i = 0; i < youtube.length; i++) {
        if (videos[i]['likes'] > max) return console.log(videos[i]);
    }
}
moreLikes(videos)