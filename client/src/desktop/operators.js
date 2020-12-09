// REMIND: comment dev functions out

const calcHypotenuse = (a, b) => Math.sqrt(a * a + b * b);
const getCoord = (i, str) => {
  const parseInt = (i) => {
    var sum = 0;
    var index = i;
    while (str[index] >= "0" && str[index] <= "9") {
      sum = sum * 10 + Number(str[index]);
      index++;
    }
    return { sum, index };
  };
  var { sum, index } = parseInt(i);
  var tx = sum;
  var { sum, index } = parseInt(index + 1);
  var ty = sum;
  return { tx, ty, index };
};

module.exports = {
  getTime: () => {
    var date = new Date();
    var hour = date.getHours();
    console.log(
      `Local time: ${("0" + hour).slice(-2)}:${("0" + date.getMinutes()).slice(
        -2
      )}`
    );
    if (hour < 5) return 3;
    //midnight
    else if (hour < 12) return 0;
    //morning
    else if (hour < 17) return 1;
    //afternoon
    else if (hour < 23) return 2;
    //evening
    else return 3;
  },

  computeEyeCoordinate: (clientX, clientY) => {
    var { x, width, height } = document
      .getElementById("cover-portrait-canvas")
      .getBoundingClientRect();
    if (width / height > 617 / 800)
      var canvasOffsetX = (width - (height / 800) * 617) / 2 + x,
        canvasOffsetY = 0;
    else
      var canvasOffsetX = x,
        canvasOffsetY = (height - (width / 617) * 800) / 2;

    var core = (x, y, ex, ey) => {
      var dx = 302 - x,
        dy = 378 - y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      // if (distSq <= 100) return { x: ex, y: ey };
      var k = dist / Math.min(10, dist / 50);
      return { x: ex - dx / k, y: ey - dy / k };
    };
    var { x, y } = core(
      clientX - canvasOffsetX,
      clientY - canvasOffsetY,
      201,
      381
    );
    var lEyeX = x,
      lEyeY = y;
    var { x, y } = core(
      clientX - canvasOffsetX,
      clientY - canvasOffsetY,
      405,
      378
    );
    return { lEyeX, lEyeY, rEyeX: x, rEyeY: y };
  },

  initR1(cx, cy) {
    var radius = Math.min(cx, cy) / 2;
    var ord = [0, 1, 2, 3, 4];
    var shuffle = [];
    for (var i = 4; i >= 0; i--) {
      var temp = Math.floor(Math.random() * i);
      shuffle.push(ord[temp]);
      ord[temp] = ord[i];
    }
    var res = [];
    var add = Math.random();
    shuffle.forEach((j, i) => {
      var rad = (Math.random() * 0.6 + 0.2 + i + add) * 0.4 * Math.PI; // *72/180*pi (deg to rad)
      res[j] = {
        x: (Math.round(radius * Math.cos(rad)) / cx + 1) * 50,
        y: (Math.round(radius * Math.sin(rad)) / cy + 1) * 50,
      };
    });
    return res;
  },

  toClipboard(content, appendId = "contact", callback = () => {}) {
    var temp = document
      .getElementById(appendId)
      .appendChild(document.createElement("textarea"));
    temp.value = content;
    Object.assign(temp.style, {
      postion: "fixed",
      opacity: "0",
      top: "0",
    });
    temp.select();
    if (document.execCommand("copy")) callback();
    else console.log("Copy operation failed!");
    document.getElementById(appendId).removeChild(temp);
  },

  forceMaxSize(safari, style) {
    // for safari
    if (safari) {
      var node = document.getElementById("view0");
      if (node.clientHeight < node.clientWidth) style.height = "80vh";
      // else style.width = "80vw";
    }
    return style;
  },

  // dev:
  /*
  rgbToHex: (rgb) => {
    // TODO: handle alpha
    if (!rgb || !rgb.length) return "transparent";
    return (
      "#" + rgb[0].toString(16) + rgb[1].toString(16) + rgb[2].toString(16)
    );
  },

  pathLength: (path) => {
    var res = 0;
    var x, y;
    var i = 1;
    while (i < path.length) {
      var { tx, ty, index } = getCoord(i, path);
      if (x !== undefined) res += calcHypotenuse(tx - x, ty - y);
      x = tx;
      y = ty;
      i = index + 1;
      if (path[index] === "z") {
        var { tx, ty, index } = getCoord(1, path);
        res += calcHypotenuse(tx - x, ty - y);
      }
    }
    console.log(Math.ceil(res));
  },

  pathRange: (path) => {
    var left, right, top, bottom, index;
    for (var i = 1; i < path.length; i = index + 1) {
      var { tx, ty, index } = getCoord(i, path);
      if (!(tx >= left)) left = tx;
      if (!(tx <= right)) right = tx;
      if (!(ty >= top)) top = ty;
      if (!(ty <= bottom)) bottom = ty;
    }
    console.log(`top:${top},bottom:${bottom},left:${left},right:${right}`);
  },
  */
};
