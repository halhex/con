const config = {
  width: 180,
  height: 120
};

let present, past;

function setup() {
  createCanvas(config.width, config.height);
  colorMode(HSB, 1);

  present = randomized(bidementional(config.width, config.height));
}

function draw() {
  updateTime();

  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      set(x, y, color(0, 1, present[x][y] + 0.5));
    }
  }
  updatePixels();
}

function updateTime() {
  past = present;
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      present[x][y] = past[x][y];
    }
  }
}

/// Helpers
function bidementional(width, height) {
  const arr = new Array(width);
  for (let x = 0; x < width; x++) arr[x] = new Array(height);
  return arr;
}

function randomized(arr) {
  const [width, height] = [arr.length, arr[0].length];

  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      arr[x][y] = noise(x * 0.05, y * 0.05) - 0.5;
    }
  }

  return arr;
}
