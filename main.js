const swipeSlider = (slider) => {
    const sliderLength = slider.children.length, NF = 30,
			TFN = {
				'linear': function(k) { return k },
				'ease-in': function(k, e = 1.675) {
					return Math.pow(k, e)
				},
				'ease-out': function(k, e = 1.675) {
					return 1 - Math.pow(1 - k, e)
				},
				'ease-in-out': function(k) {
					return .5*(Math.sin((k - .5)*Math.PI) + 1)
				},
				'bounce-out': function(k, a = 2.75, b = 1.5) {
					return 1 - Math.pow(1 - k, a)*Math.abs(Math.cos(Math.pow(k, b)*(n + .5)*Math.PI))
				}
      };

  let i = 0, x0 = null, locked = false, w, ini, fin, rID = null, anf, n;

  const stopAni = () => {
    cancelAnimationFrame(rID);
    rID = null
  };

  const ani = (cf = 0) => {
    slider.style.setProperty('--i', ini + (fin - ini)*TFN['ease-in'](cf/anf));

    if(cf === anf) {
      stopAni();
      return
    }

    rID = requestAnimationFrame(ani.bind(this, ++cf))
  };

  const unify = (e) => {	return e.changedTouches ? e.changedTouches[0] : e };

  const lock = (e) => {
    x0 = unify(e).clientX;
    locked = true
  };

  const drag = (e) => {
    e.preventDefault();

    if(locked) {
      let dx = unify(e).clientX - x0, f = +(dx/w).toFixed(2);

      slider.style.setProperty('--i', i - f)
    }
  };

  const move = (e) => {
    if(locked) {
      let dx = unify(e).clientX - x0,
          s = Math.sign(dx),
          f = +(s*dx/w).toFixed(2);

      ini = i - s*f;

      if((i > 0 || s < 0) && (i < sliderLength - 1 || s > 0) && f > .2) {
        i -= s;
        f = 1 - f
      }

      fin = i;
      anf = Math.round(f*NF);
      n = 2 + Math.round(f)
      ani();
      x0 = null;
      locked = false;
    }
  };

  const size = () => { w = window.innerWidth };

  size();
  slider.style.setProperty('--n', sliderLength);

  addEventListener('resize', size, false);

  slider.addEventListener('mousedown', lock, false);
  slider.addEventListener('touchstart', lock, false);

  slider.addEventListener('mousemove', drag, false);
  slider.addEventListener('touchmove', drag, false);

  slider.addEventListener('mouseup', move, false);
  slider.addEventListener('touchend', move, false);

}

const slider = document.querySelector('.picture-list');
swipeSlider(slider);

