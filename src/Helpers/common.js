
export const trimStr = (str, limit) => {
    if(str.length <= limit) {
        return str;
    }
    return str.substring(0, limit) + '...';
}