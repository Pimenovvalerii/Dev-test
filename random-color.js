const palette = 'ABCDEF0123456789';

export const randomColor = () => {
    let color = '#';
    
    for(let i = 0; i < 6; i+=1){
        color += palette[~~(Math.random() * 16)]
    }

    return color;
}

