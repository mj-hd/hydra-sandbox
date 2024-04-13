// Rect Flower
global._rflower = (freq = 6, offset = 1, diff = 0.2, scale = 3) => osc(freq, 0, () => a.fft[0] * offset)
    .rotate(0.8)
    .pixelate(20, 20)
    .diff(osc(() => a.fft[1] * diff))
    .kaleid()
    .scale(() => 1,0 + a.fft[2] * scale)
    .colorama(0.8)
    .rotate(({ time }) => Math.sin(time) * a.fft[1] * 0.5)

// Circular Flower
global._cflower = (freq = 4, offset = 2, scale = 2) => osc(freq, 0, () => a.fft[0] * offset)
  .kaleid()
  .scale(() => a.fft[2] * scale)
  .rotate(({ time }) => Math.sin(time) * 4)

// Triangle Object
global._triangle = () => shape()
  .kaleid(3)
  .scale(({ time }) => Math.sin(time) * a.fft[2])
  .pixelate()
  .saturate(1)

// Voronoi
global._voronoi = (scale = 10) => voronoi(2).kaleid(2).scale(({ time }) => Math.sin(time) * a.fft[2] * scale)

// Noise
global._noise = (scale = 3) => noise(scale)

// Audio Object
global._audio = () => shape(4, (0.01, ()=> 0.2 + a.fft[2]),1)
  .mult(osc(1, 1).modulate(osc(5).rotate(1.4,1),3))
  .color(1,2,4)
  .saturate(0.2)
  .luma(1.2,0.05, (5, ()=> 2 + a.fft[3]))
  .scale(0.6, ()=> 0.9 + a.fft[3])

// Waves
global._waves = () => osc(2,.1,10)
  .pixelate(10,10)
  .modulate(noise([5,140,10,1090,55],.1))
  .blend(src(o3)
    .modulate(src(o3),.01)
  .rotate([31,5,10,2,20,100])
  .scale([.2,1,.5,.3]),.5)
  .colorama(.1)

// Octopus
// https://hydra.ojack.xyz/?sketch_id=s9UuKWtYWH0eqSFH
global._oct = () => {
  s3.initImage("https://upload.wikimedia.org/wikipedia/commons/1/1c/Octopus_superciliosus.jpg")
  return noise(0.2, 0.01)
  .modulate(src(s3),1)
  .diff(src(s3), 1)
  .kaleid(2).kaleid(4)
  .colorama(0.77)
}

// Liquid Flower
// https://hydra.ojack.xyz/?sketch_id=juF78nt8V4VrMwKb
global._lflower = () => osc(20, 0.2, 0.001)
  .color(0.3, 0.15)
  .colorama(0.4)
  .modulate(noise(5,0.1))
  .kaleid([4,2,5,3])
  .pixelate(90,90)

// Wall
// https://hydra.ojack.xyz/?sketch_id=cVDDttOUbZUwZ10r
global._wall = () => {
  function r(min=0,max=1) { return Math.random()*(max-min)+min; }
  return solid(1,1,1)
    .diff(shape([5,5,5,25].smooth().fast(.5),r(0.6,0.63),.09).repeat(20,10))
  .modulateScale(osc(8).rotate(r(-.5,.5)),.52)
  .add(
      src(o0).scale(0.965).rotate(.012*(Math.round(r(-2,1))))
      .color(r(),r(),r())
      .modulateRotate(o0,r(0,0.5))
      .brightness(.15)
      ,.7)
}
