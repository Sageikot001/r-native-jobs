export const checkImageURL = (url) => {
    if (!url) return false
else {
    const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|gif|bmp|webp)$', 'i');
    return pattern.test(url);
}
}