const animatedTrail = () => {
  const dots = [];
  const mouse = {
    x: 0,
    y: 0,
  };

  const Dot = function () { /* eslint-disable-line */
    this.x = 0;
    this.y = 0;
    this.node = (function () { /* eslint-disable-line */
      const n = document.createElement('div');
      n.className = 'trail';
      document.body.appendChild(n);
      return n;
    }());
  };

  Dot.prototype.draw = function () {   /* eslint-disable-line */
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  };

  for (let i = 0; i < 15; i += 1) {
    const d = new Dot();
    dots.push(d);
  }

  function draw() {
    let { x } = mouse;
    let { y } = mouse;

    dots.forEach((dot, index, dots) => {
      const nextDot = dots[index + 1] || dots[0];

      dot.x = x;
      dot.y = y;
      dot.draw();
      x += (nextDot.x - dot.x) * 0.8;
      y += (nextDot.y - dot.y) * 0.8;
    });
  }

  addEventListener('mousemove', (e) => { /* eslint-disable-line */
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  });

  function animate() {
    draw();
    requestAnimationFrame(animate);
  }

  animate();
};
export default animatedTrail;