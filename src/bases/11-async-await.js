const getImagen = async () => {
    
    try{
    const apiKey = '5hgjVKgGB8lcOH48pkSly6Vs0CItZzIm';

    const output = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const {data} = await output.json();

    const {url} = data.images.original;
    const img = document.createElement ('img');
    img.src = url;
    document.body.append(img);
    } catch (err){

        //manejo de error
        console.error(err)
    }
}

getImagen();