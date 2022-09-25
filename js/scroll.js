var blocks = document.getElementsByClassName("scrlBlck");
var container = document.getElementsByClassName("container");
var hs = new HorizontalScroll.default({
    blocks: blocks,
    container: container,
    isAnimated: true,
    springEffect: 0.5,
});