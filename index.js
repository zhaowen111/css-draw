let cssText = `
.p1 {
  border: 0.15rem solid #551711;
  width: 15rem;
  height: 12rem;
  background: radial-gradient(circle, #e17e46 60%, #f2a362);
  border-top-left-radius: 3.6rem;
  border-bottom-left-radius: 3.6rem;
  border-bottom-right-radius: 1.5rem;
  position: absolute;
  top: 0.5rem;
}

.p1-1 {
  position: absolute;
  top: 12.4rem;
  left: 2.7rem;
  width: 10.3rem;
  height: 0.8rem;
  background: #5a2412;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 0.2rem;
  transition: transform ease-out 0.5s;
}
.p1-1:hover {
  transform: translateX(2rem);
}

.p1-2 {
  position: absolute;
  top: 10.6rem;
  left: 12rem;
  width: 3.5rem;
  height: 2.3rem;
  border: 0.15rem solid #551711;
  background: #c36132;
  border-bottom-right-radius: 0.8rem;
  border-bottom-left-radius: 0.2rem;
}
.p1-2::after {
  content: '';
  position: absolute;
  background: #5a2412;
  width: 100%;
  top: 1.4rem;
  height: 0.12rem;
}

.p2 {
  border: 0.15rem solid #551711;
  width: 11rem;
  height: 8rem;
  background: #c15a32;
  border-top-left-radius: 1.8rem;
  border-bottom-left-radius: 1.8rem;
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  position: absolute;
  top: 3.6rem;
  left: 0.6rem;
}

.p3 {
  border: 0.15rem solid #551711;
  width: 17rem;
  height: 7.3rem;
  background: #e99673;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  position: absolute;
  top: 3.7rem;
  left: 0.8rem;
}

.p4 {
  border: 0.15rem solid #551711;
  width: 16.7rem;
  height: 6.5rem;
  background: #af4223;
  border-top-left-radius: 1.3rem;
  border-bottom-left-radius: 1.3rem;
  position: absolute;
  top: 4.1rem;
  left: 1.1rem;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  z-index: 10;
}

.p4a {
  width: 0.7rem;
  height: 6.5rem;
  background: linear-gradient(
    to bottom,
    #917d97 10%,
    #401500 10%,
    #401500 13%,
    #917d97 13%,
    #917d97 20%,
    #401500 20%,
    #401500 23%,
    #917d97 23%,
    #917d97 30%,
    #401500 30%,
    #401500 33%,
    #917d97 33%,
    #917d97 40%,
    #401500 40%,
    #401500 43%,
    #917d97 43%,
    #917d97 50%,
    #401500 50%,
    #401500 53%,
    #917d97 53%,
    #917d97 60%,
    #401500 60%,
    #401500 63%,
    #917d97 63%,
    #917d97 70%,
    #401500 70%,
    #401500 73%,
    #917d97 73%,
    #917d97 80%,
    #401500 80%,
    #401500 83%,
    #917d97 83%,
    #917d97 90%,
    #401500 90%,
    #401500 93%,
    #917d97 93%
  );
  border-top-left-radius: 1.6rem;
  border-bottom-left-radius: 1.6rem;
  border-right: 0.15rem solid #551711;
}

.p4b {
  width: 0.6rem;
  height: 6.5rem;
  background: linear-gradient(
    to bottom,
    #df9076 5%,
    #401500 5%,
    #401500 7%,
    #d77643 7%
  );
  border-right: 0.15rem solid #551711;
}
.p4c {
  width: 8rem;
  height: 5.7rem;
  background: #c76841;
  border-right: 0.15rem solid #551711;
  border-bottom: 0.15rem solid #551711;
}
.p4c::before {
  content: '';
  width: 100%;
  height: 0.41rem;
  background: linear-gradient(
    to bottom,
    #df9076 70%,
    #401500 70%,
    #401500 98%,
    #d77643 98%
  );
  border-right: 0.15rem solid #551711;
  position: absolute;
}
.p4d {
  width: 7.2rem;
  height: 5.7rem;
  margin-right: -1rem;
  background: #c76841;
  border-bottom: 0.15rem solid #551711;
}
.p4d::before {
  content: '';
  width: 100%;
  height: 0.41rem;
  background: linear-gradient(
    to bottom,
    #df9076 70%,
    #401500 70%,
    #401500 98%,
    #d77643 98%
  );
  border-right: 0.15rem solid #551711;
  position: absolute;
}
.box1 {
  position: absolute;
  background: #b75b37;
  right: 0;
  top: 0.41rem;
  border-bottom-left-radius: 0.5rem;
  border-left: 0.15rem solid #551711;
  border-bottom: 0.15rem solid #551711;
  width: 6rem;
  height: 4.9rem;
}
@keyframes rotateZ360 {
  from {
    transform: rotateZ(180deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  to {
    transform: rotateZ(0deg) ;
  }
}
.box1::before,
.box1::after {
  background: #e3805a;
  border: 0.1rem solid #551711;
  width: 0.2rem;
  height: 0.5rem;
  position: absolute;
  content: '';
  right: 0.5rem;
  animation: rotateZ360 1s infinite linear forwards;
}

.box1::before {
  top: 0.2rem;
}
.box1::after {
  bottom: 0.2rem;
}

.p4e {
  position: absolute;
  left: 1.3rem;
  top: 0;
  width: 9.2rem;
  height: 5.7rem;
}
.p4e .top {
  background: #df9076;
  height: 0.5rem;
  margin-top: -0.1rem;
  margin-left: 10%;
  width: 90.2%;
  border: 0.15rem solid #551711;
}
.p4e .main {
  background: #e0754b;
  width: 80%;
  height: 65%;
  border: 0.15rem solid #551711;
  margin-top: -0.15rem;
  margin-left: 10%;
  position: relative;
  transition: background linear 0.5s 0.5s;
}
.p4e .main:hover {
  background: #C0DBD6;
}
.p4e .main::before,
.p4e .main::after {
  position: absolute;
  content: '';
  border: 0.15rem solid #551711;
  box-shadow: 0 0 0 0.01rem #551711;
  width: 1.7rem;
  height: 0.2rem;
  margin: 0.2rem;
  transition: background linear 0.5s 0.5s;
}
.p4e .main:hover::before,
.p4e .main:hover::after {
  background: #FFFABB;
}

.p4e .main::after {
  right: 0;
}

.p4e .left,
.p4e .right {
  position: absolute;
  top: 0.4rem;
}
.p4e .left {
  left: 0;
}
.p4e .right {
  width: 1rem;
  right: 0;
  height: 3.3rem;
  border-bottom: 0.15rem solid #551711;
}
.p4e .left::after,
.p4e .left::before {
  width: 0.13rem;
  height: 0.13rem;
  border: 0.15rem solid #551711;
  content: '';
  position: absolute;
  background: #e89a7f;
  border-radius: 50%;
  left: 0.2rem;
}

.p4e .left::before {
  top: 0.3rem;
}
.p4e .left::after {
  top: 2.5rem;
}

.p4e .right::after,
.p4e .right::before {
  width: 0.13rem;
  height: 0.13rem;
  border: 0.15rem solid #551711;
  content: '';
  position: absolute;
  background: #e89a7f;
  border-radius: 50%;
  right: 0.3rem;
}

.p4e .right::before {
  top: 0.3rem;
}
.p4e .right::after {
  top: 2.5rem;
}

.p4e .bottom {
  box-sizing: content-box;
  margin: 0.2rem 0 0 3.6rem;
  width: 1rem;
  height: 0.1rem;
  box-shadow: 0 0 0 0.01rem #551711;
  background: #551711;
  position: relative;
}

.p4e .bottom::before,
.p4e .bottom::after {
  box-sizing: content-box;
  width: 1rem;
  height: 0.1rem;
  box-shadow: 0 0 0 0.01rem #551711;
  background: #551711;
  content: '';
  position: absolute;
}

.p4e .bottom::before {
  left: -2.6rem;
}
.p4e .bottom::after {
  right: -3rem;
}

.middle {
  top: 0.3rem;
  position: absolute;
  left: 15rem;
  width: 4.3rem;
  height: 12.7rem;
}
.middle .bg {
  border: 0.15rem solid #551711;
  background: #6D2F1E;
  position: absolute;
  width: 3.6rem;
  height: 11rem;
  bottom: 0;
  right: 0;
  border-top-left-radius: 1.2rem;
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
}

.middle .line1 {
  position: absolute;
  left: 2.4rem;
  bottom: 0;
  width: 1rem;
  height: 12rem;
  background: #CF703F;
  border-radius: 0.5rem;
  border: 0.15rem solid #551711;
  z-index: 40;
}
.middle .line2 {
  position: absolute;
  left: 3rem;
  bottom: 0;
  width: 0.8rem;
  height: 11rem;
  background: #B85227;
  border: 0.15rem solid #551711;
  border-bottom-right-radius: 0.2rem;
  z-index: 30;
}
.middle .line3 {
  position: absolute;
  right: -0.4rem;
  top: 4rem;
  width: 0.5rem;
  height: 3rem;
  background: #046483;
  border: 0.15rem solid #551711;
  border-bottom-right-radius: 0.2rem;
  z-index: 30;
}
.middle .line4 {
  background: linear-gradient(-170deg,transparent 0.6rem,#EF9D5D 0);
  position: absolute;
  width: 3rem;
  height: 11.6rem;
  top: 0.3rem;
  left: -0.2rem;
  border-radius: 0.1rem;
  border-bottom: 0.15rem solid #551711;
}

.middle .line4::before,
.middle .line4::after {
  position: absolute;
  height: 0.3rem;
  content: '';
  background: #CE663D;
  border-top: 0.15rem solid #551711;
  border-bottom: 0.15rem solid #551711;
}
.middle .line4::before {
  width: 1.7rem;
  transform: rotateZ(20deg);
  left: -0.5rem;
  top: -0.15rem;
  border-left: 0.15rem solid #551711;
  border-radius: 0.2rem;

}
.middle .line4::after {
  width: 2.4rem;
  left: 1rem;
  top: 0.08rem;
  border-right: 0.15rem solid #551711;
}

.right-part {
  display: flex;
  top: 2.7rem;
  width: 13rem;
  height: 8.5rem;
  position: absolute;
  left: 19.3rem;
}


.arm {
  width: 100%;
  display: flex;
  align-items: center;
  height: 3.2rem;
}

.arm .pie1 {
  height: 2.5rem;
  width: 0.3rem;
  background: #D06D4A;
  border: 0.1rem solid #551711;
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}
.arm .pie2 {
  height: 2.35rem;
  width: 0.38rem;
  margin-left: -0.05rem;
  background:#7CA6B9;
  border: 0.1rem solid #551711;
  border-radius: 0.2rem;
}
.arm .pie3 {
  height: 2.2rem;
  width: 0.4rem;
  margin-left: -0.05rem;
  background:#216370;
  border: 0.1rem solid #551711;
  border-radius: 0.2rem;
}

.arm .trapezoid {
  height: 1.9em;
  width: 1rem;
  border: 0.15rem solid #551711;
  background: #717374;
  transform: perspective(0.5rem) rotateY(5deg);
}
.arm .cylinder {
  position: relative;
  display: flex;
  align-items: center;
  border: 0.15rem solid #551711;
  margin-left: -0.15rem;
  width: 4.5rem;
  height: 3rem;
  border-top-left-radius: 50% 28%;
  border-bottom-left-radius: 50% 28%;
  /* background:#898C90; */
  background: linear-gradient(to bottom, #898A8D 50%,#4F5152 50%) top;
}
.arm .cylinder::before {
  position: absolute;
  content: '';
  width: 101%;
  margin-left: -0.03rem;
  height: 1.9rem;
  border-top-left-radius: 70% 28%;
  border-bottom-left-radius: 70% 28%;
  background: #727475;
}
.arm .cylinder::after {
  content: '';
  position: absolute;
  width: 0.2rem;
  height: 0.2rem;
  background: #A6A2A6;
  right: 0.3rem;
  border: 0.1rem solid #551711;
  border-radius: 50%;
}
.arm .base {
  background:#80939A;
  width:0.7rem;
  border: 0.15rem solid #551711;
  height: 3.3rem;
  border-radius:50% 0 0 50%;
  position: relative;
}
.arm .base::before,
.arm .base::after {
  content: '';
  position: absolute;
  width: 0.2rem;
  height: 0.2rem;
  background: #A6A2A6;
  border: 0.1rem solid #551711;
  border-radius: 50%;
}
.arm .base::before {
  top: 1rem;
}
.arm .base::after {
  bottom: 1rem;
}

.arm-container {
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  transition: width ease-out 0.5s;
  width: 6.9rem;
}
.arm-container:hover {
  width: 5rem;
}

.right-part .seat {
  position: relative;
  margin-top: 0.15rem;
  width: 3.5rem;
  height: 8.23rem;
  background: #A9431A;
  border: 0.15rem solid #551711;
  margin-left: -0.1rem;
  border-top-right-radius: 50% 15%;
  border-bottom-right-radius: 50% 15%;
  transition: background ease-out 0.5s;
}
.seat:hover {
  background: #ff6528;
}
.seat:hover .dot::before,
.seat:hover .dot::after,
.seat:hover .dot {
  background: #fffabb;
}
.seat .dot {
  width: 0.4rem;
  height: 0.4rem;
  background: transparent;
  border: 0.15rem solid #551711;
  border-radius: 50%;
  position: relative;
}

.seat .dot::before,
.seat .dot::after {
  box-sizing: border-box;
  top: -0.15rem;
  content: '';
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
  background: transparent;
  border: 0.15rem solid #551711;
  border-radius: 50%;
}

.seat .dot::before {
  left: -1rem;
}
.seat .dot::after {
  right: -1rem;
}

.seat .dot.top {
  position: absolute;
  top: 35%;
  right: 35%;
}
.seat .dot.bottom {
  position: absolute;
  bottom: 35%;
  right: 35%;
}
.hat {
  width: 2rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  transition: width ease-out 0.1s;
}
.hat:hover {
  width: 1.5rem;
}


.hat-head {
  height: 2rem;
  width: 25%;
  margin-left: -0.1rem;
  background: #537079;
  border: 0.15rem solid #551711;
  position: relative;
  z-index: 10;
}
.hat:hover .hat-head::before,
.hat:hover .hat-head::after {
  width: 0;
}
.hat-head::before,
.hat-head::after {
  position: absolute;
  content: '';
  background: #797A7C;
  width: 0.2rem;
  height: 0.15rem;
  border: 0.15rem solid #551711;
  border-right: none;
}
.hat-head::before {
  top: 0.2rem;
}
.hat-head::after {
  bottom: 0.2rem;
}

.hat-hat {
  z-index: 5;
  width: 90%;
  height: 100%;
  background: #77787A;
  margin-left: -0.2rem;
  border: 0.15rem solid #551711;
  border-top-right-radius: 60% 70%;
  border-bottom-right-radius: 60% 70%;
}

.right-hat1 {
  position: absolute;
  top: 1.3rem;
}

.right-hat2 {
  position: absolute;
  bottom: 1.3rem;
}
.pipes {
  position: absolute;
  display: flex;
  align-items: center;
  left: 4.1rem;
  top: 1rem;
  width: 18rem;
  height: 2rem;
  z-index: 100;
}
.pipes .pipe1 {
  margin-left: 1rem;
  background: #6f6a6b;
  width: 0.3rem;
  height: 0.4rem;
  border: 0.1rem solid #551711;
}
.pipes .pipe2 {
  width: 0.5rem;
  height: 0.7rem;
  background: linear-gradient(-160deg, transparent 40%, #4f0d01 0) top,
    linear-gradient(-20deg, transparent 40%, #4f0d01 0) bottom;
  background-repeat: no-repeat;
  background-size: 100% 50%;
}
.pipes .pipe3 {
  height: 0.4rem;
  border: 0.1rem solid #551711;
  width: 9rem;
  background: linear-gradient(
    to right,
    #d6dacd 1.3rem,
    #7495a4 1.3rem,
    #7495a4 2.6rem,
    #d6dacd 2.6rem,
    #d6dacd 3.9rem,
    #7495a4 3.9rem,
    #7495a4 8rem,
    #5f2d18 8rem,
    #5f2d18 9rem
  );
  transition: background ease-out 1s;
}
.pipes .pipe4 {
  background: #7495a4;
  width: 0.4rem;
  height: 0.6rem;
  border: 0.13rem solid #551711;
  border-radius: 0.1rem;
}
.pipes .pipe5 {
  background: #7495a4;
  width: 0.8rem;
  height: 0.4rem;
  border: 0.1rem solid #551711;
  border-radius: 0.1rem;
  margin: 0 -0.1rem;
}
.pipes .pipe6 {
  background: #7495a4;
  width: 0.7rem;
  height: 0.6rem;
  border-radius: 0.1rem;
  border: 0.13rem solid #551711;
}
.pipes .pipe7 {
  background: #7495a4;
  width: 0.4rem;
  height: 0.8rem;
  border-radius: 0.1rem;
  border: 0.13rem solid #551711;
  margin-left: -0.1rem;
}
.pipes .pipe8 {
  background: #7495a4;
  width: 0.8rem;
  height: 0.4rem;
  border: 0.13rem solid #551711;
  border-radius: 0.1rem;
  margin: 0 -0.1rem;
}
.pipes .pipe9 {
  background: #526974;
  width: 0.3rem;
  height: 0.6rem;
  border: 0.13rem solid #551711;
  margin-left: -0.1rem;
}
.pipes .pipe10 {
  background: #7495a4;
  width: 0.65rem;
  height: 0.65rem;
  border: 0.1rem solid #551711;
  margin-left: -0.1rem;
  border-radius: 50%;
  box-shadow: 0 0 0.2rem 0 #551711;
}
.pipes .pipe11 {
  background: #7495a4;
  width: 1.3rem;
  height: 0.4rem;
  border: 0.13rem solid #551711;
  border-radius: 0.1rem;
  transform: rotateZ(45deg) translate(0.14rem, 0.14rem);
  transform-origin: 0 0;
}
.pipes .pipe12 {
  background:#4C6572;
  width: 1.3rem;
  height: 1.3rem;
  border: 0.1rem solid #551711;
  margin-left: -0.1rem;
  border-radius: 50%;
  box-shadow: 0 0 0.2rem 0 #551711;
  transform: translate(-0.65rem,1.48rem);
}
.pipes .pipe12::after {
  content: '';
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  border: 0.15rem solid #551711;
  top: 0.2rem;
  left: 0.2rem;
}
/*????????????*/
.light {
  border: 0.15rem solid #551711;
  width: 3.45rem;
  height: 1.4rem;
  background: #8d3e1a;
  border-radius: 0.1rem;
  position: absolute;
  top: 11.6rem;
  left: 2.2rem;
  margin-top: -0.1rem;

}
.light span {
  position: absolute;
  background: #6a2c1b;
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  border: 0.15rem solid #551711;
  border-radius: 50%;
  top: -0.05rem;
}
.light::before,
.light::after {
  content: '';
  border: 0.15rem solid #551711;
  width: 0.73rem;
  height: 0.73rem;
  border-radius: 50%;
  background: #672a18;
  position: absolute;
  top: 0.08rem;
  transition: background ease-out 0.3s;
}
.light:hover::before,
.light:hover::after {
  background:#fffabb /*???????????????*/
}
.light::before {
  left: 0.6rem;
}
.light::after {
  right: 0.16rem;
}
.right-wan {
  position: absolute;
  top: 2.3rem;
  left: -0.3rem;
  z-index: 10;
}
.wan {
  background: #856648;
  width: 1.8rem;
  height: 1.2rem;
  border: 0.15rem solid #551711;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  transform: rotateZ(-120deg);
}
`;
let container = document.querySelector('.code');
class CodePlayer {
  constructor(document, container, cssText) {
    this.doc = document;
    this.container = container;
    this.cssText = cssText;
    this.__init__();
  }
  __init__() {
    this.speed = 10;
    this.index = 0;
    this.styleEl = this.doc.createElement('style');
    this.doc.body.appendChild(this.styleEl);
    this.intervalId = -1;
    this.tempText = '';
  }
  __play__(isLineMode) {
    if (this.index > this.cssText.length - 1) return; //???????????????????????????????????????
    let alphaPlay = () => {
      let ch = this.cssText[this.index];
      this.styleEl.innerText += ch;
      this.container.innerText += ch;
      this.index++;
      this.container.scrollBy({ top: 1000, behavior: 'instant' });
      if (this.index >= this.cssText.length - 1) {
        this.clearAnimation();
      }
    };
    let linePlay = () => {
      let ch = this.cssText[this.index];
      this.tempText += ch;
      this.index++;
      if (ch === '\n') this.__updateDom__();
      if (this.index >= this.cssText.length - 1) {
        this.__updateDom__();
        this.clearAnimation();
      }
    };
    this.intervalId = setInterval(
      isLineMode ? linePlay : alphaPlay,
      1000 / this.speed
    );
  }
  __updateDom__() {
    this.styleEl.innerText += this.tempText;
    this.container.innerText += this.tempText;
    this.tempText = '';
    window.scrollBy({
      top: 100,
      behavior: 'instant'
    });
  }
  __updateScroll__() {
    this.container.scrollBy({ top: 9999, behavior: 'instant' });
  }
  pause() {
    if (this.intervalId === -1) return;
    this.clearAnimation();
  }
  play() {
    if (this.intervalId !== -1) return;
    this.__play__();
  }
  restart() {
    this.stop();
    this.__play__();
  }
  stop() {
    if (this.intervalId !== -1) {
      this.clearAnimation();
    }
    this.styleEl.innerText = '';
    this.container.innerText = '';
    this.index = 0;
  }
  clearAnimation() {
    clearInterval(this.intervalId);
    this.intervalId = -1;
    this.__updateScroll__();
  }
  changeSpeed(speed) {
    if (speed < 1) speed = 1;
    this.speed = speed;
    this.pause();
    this.play();
  }
  changeProcess(process) {
    if (process <= 0 || process > 100) {
      return;
    }
    const isRunning = this.intervalId !== -1;
    this.stop();
    const percentage = process / 100;
    const length = parseInt(this.cssText.length * percentage);
    this.index = length - 1;
    const text = this.cssText.substring(0, length);
    this.styleEl.innerText = text;
    this.container.innerText = text;
    this.__updateScroll__();
    if (isRunning) this.play();
  }
}

let codePlayerComponent = {
  playEl: document.querySelector('.play'),
  pauseEl: document.querySelector('.pause'),
  stopEl: document.querySelector('.stop'),
  restartEl: document.querySelector('.restart'),
  fastEl: document.querySelector('.fast'),
  slowEl: document.querySelector('.slow'),
  jumpEl: document.querySelector('.jump'),
  process: 20,
  addProcess() {
    this.cp.changeProcess(this.process);
    if (this.process > 100) return;
    this.process += 20;
    this.updateJumpEl();
  },
  resetProcess() {
    this.process = 20;
    this.updateJumpEl();
  },
  restart() {
    this.resetProcess();
    this.cp.restart();
  },
  updateJumpEl() {
    if (this.process > 100) return;
    this.jumpEl.innerText = `to ${this.process}%`;
  },
  init(container, cssText) {
    this.cp = new CodePlayer(document, container, cssText);
    this.playEl.addEventListener('click', () => {
      if (this.process > 100) {
        this.restart();
        return;
      }
      this.cp.play();
    });
    this.pauseEl.addEventListener('click', () => {
      this.cp.pause();
    });
    this.stopEl.addEventListener('click', () => {
      this.resetProcess();
      this.cp.stop();
    });
    this.restartEl.addEventListener('click', () => {
      this.restart();
    });
    this.fastEl.addEventListener('click', () => {
      this.cp.changeSpeed(this.cp.speed + 10);
    });
    this.slowEl.addEventListener('click', () => {
      this.cp.changeSpeed(this.cp.speed - 10);
    });
    this.jumpEl.addEventListener('click', () => {
      this.addProcess();
    });
    this.cp.play();
  }
};

codePlayerComponent.init(container, cssText);
