loadScript("../init.js")
loadScript("../expr.js")

a.show()
a.setSmooth(0.8)

_wall().out(o1)

src(s3).blend(_noise(), 0.2).modulate(src(s2), 0.3).scale(() => a.fft[1] * 0.8 + 1.0).out(o0)



render(o0)
