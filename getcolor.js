const defaultColor = 'rgb(255,255,255)';
function getColor() {
return (localStorage.color || defaultColor) ;
}
module.exports = getColor;