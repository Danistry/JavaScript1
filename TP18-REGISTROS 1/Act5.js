const youtube = (title, enlace, channel,timeLimit, views, likes, disliks, wSub, hd) =>{

        return console.table({
            title, 
            enlace, 
            channel,
            timeLimit, 
            views, 
            likes, 
            disliks, 
            wSub, 
            hd
        });
}
youtube('Hola Mundo','https://www.youtube.com/watch?v=kaOVY7RSfy8&ab_channel=Deuk','Deuk','3:34',1000, 4343,784,false,true)
