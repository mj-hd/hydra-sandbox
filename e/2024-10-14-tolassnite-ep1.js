loadScript("../init.js")
loadScript("../expr.js")

a.show()
a.setSmooth(0.8)

_wall().out(o1)

// Video
src(s3)
  // Cam
  .modulate(src(s0))
  // FX (tolass)
  .modulate(src(s2).scale(() => 0.8), 1)
  // FX
  //.blend(src(s2).kaleid())
  .scale(() => a.fft[1] * 0.2 + 1.0)
  // LOGO
  .modulate(src(s1).scale(0.2))
  .out(o0)



render(o0)
