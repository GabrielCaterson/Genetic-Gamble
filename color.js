//use like this:
//	color.y("text here");
//	color.yellow("text here");


const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    fg: {
        red: "\x1b[31m",
		yellow: "\x1b[33m",
		green: "\x1b[32m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
		white: "\x1b[37m",
		black: "\x1b[30m",
    },
    bg: {
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
		white: "\x1b[47m",
		black: "\x1b[40m",
    }
}



function setColor(color, stringToColor){
	console.log(color, stringToColor, colors.reset); 
}




//================================================================
//Foreground colors 
function r(stringToColor) { setColor(colors.fg.red, stringToColor) };
const red = r;


function y(stringToColor) { setColor(colors.fg.yellow, stringToColor) };
const yellow = y;


function g(stringToColor) { setColor(colors.fg.green, stringToColor) };
const green = g;


function b(stringToColor) { setColor(colors.fg.blue, stringToColor) };
const blue = b;


function p(stringToColor) { setColor(colors.fg.magenta, stringToColor) };
const purple = p;
const magenta = p;
const m = p;


function c(stringToColor) { setColor(colors.fg.cyan, stringToColor) };
const cyan = c;


function w(stringToColor) { setColor(`${colors.bg.black + colors.fg.white}`, stringToColor) };
const white = w;


function blk(stringToColor) { setColor(`${colors.bg.white + colors.fg.black}`, stringToColor) };
const black = blk;




//================================================================
//Background colors




function br(stringToColor) { setColor(colors.bg.red, stringToColor) };
const bgRed = br;
const R = br;


function by(stringToColor) { setColor(colors.bg.yellow, stringToColor) };
const bgYellow = by;
const Y = by;


function bg(stringToColor) { setColor(colors.bg.green, stringToColor) };
const bgGreen = bg;
const G = bg;


function bb(stringToColor) { setColor(colors.bg.blue, stringToColor) };
const bgBlue = bb;
const B = bb;


function bm(stringToColor) { setColor(colors.bg.magenta, stringToColor) };
const bgMagenta = bm;
const bgPurple = bm;
const bp = bm;
const P = bm;
const M = bm;


function bc(stringToColor) { setColor(colors.bg.cyan, stringToColor) };
const bgCyan = bc;
const C = bc;


function bw(stringToColor) { setColor(`${colors.bg.white + colors.fg.black}`, stringToColor) };
const bgWhite = bw;
const W = bw;


function bblk(stringToColor) { setColor(`${colors.bg.black + colors.fg.white}`, stringToColor) };
const bgBlack = bblk;
const BLK = bblk;




//================================================================
//Misc.


function bright(stringToColor) { setColor(colors.bright, stringToColor) };


function dim(stringToColor) { setColor(colors.dim, stringToColor) };


function underscore(stringToColor) { setColor(colors.underscore, stringToColor) };


function blink(stringToColor) { setColor(colors.blink, stringToColor) };


function reverse(stringToColor) { setColor(colors.reverse, stringToColor) };

function hidden(stringToColor) { setColor(colors.hidden, stringToColor) };





module.exports = {
	r, red,      				br, bgRed,                      R,
	y, yellow,   				by, bgYellow,                   Y,
	g, green,    				bg, bgGreen,                    G,
	b, blue,     				bb, bgBlue,                     B,
	p, m, purple, magenta,	 	bm, bp, bgMagenta, bgPurple,    P, M,
	c, cyan,     				bc, bgCyan,                     C,
	w, white,	 				bw, bgWhite,                    W,
	blk, black,	 				bblk, bgBlack,                  BLK,
	
	bright,
	dim,
	underscore,
	blink,
	reverse,
	hidden
};
