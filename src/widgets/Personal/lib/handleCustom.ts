export const handleOpacity = (opacity: number) => {
    switch(opacity) {
        case 0:
            return 0;
        case 10:
            return 0.079;
        case 25:
            return 0.14;
        case 45:
            return 0.25;
        default:
            break;
    }
}

export const handleRadius = (radius: number) => {
    switch(radius) {
        case 0: 
            return 0;
        case 10:
            return 20;
        case 25:
            return 30;
        case 45:
            return 55;
    }
}