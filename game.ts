import kaboom from "kaboom";

const { add, text, pos, sprite, loadSprite } = kaboom();

loadSprite("apple", "https://kaboomjs.com/sprites/apple.png");

add([text("hello"), pos(120, 80)]);
add([sprite("apple"), pos(200, 200)]);
