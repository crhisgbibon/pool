var I=Object.defineProperty;var E=(u,t,s)=>t in u?I(u,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[t]=s;var e=(u,t,s)=>(E(u,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))r(h);new MutationObserver(h=>{for(const i of h)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(h){const i={};return h.integrity&&(i.integrity=h.integrity),h.referrerPolicy&&(i.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?i.credentials="include":h.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(h){if(h.ep)return;h.ep=!0;const i=s(h);fetch(h.href,i)}})();function M(){let u=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",u+"px")}window.addEventListener("DOMContentLoaded",M);window.addEventListener("resize",M);window.addEventListener("orientationchange",M);class k{constructor(t,s,r){e(this,"mode","");e(this,"x",0);e(this,"y",0);this.mode=t,this.x=s,this.y=r}}class D{constructor(){e(this,"border",new f(35,29,0));e(this,"pockets",new f(46,52,68));e(this,"table",new f(99,128,102));e(this,"quarterLines",new f(224,220,211));e(this,"red",new f(201,88,99));e(this,"blue",new f(72,103,203));e(this,"cueBall",new f(249,245,236));e(this,"eightBall",new f(44,34,13));e(this,"cueStick",new f(213,194,165));e(this,"minRange",new f(69,243,92));e(this,"midPower",new f(220,143,42));e(this,"maxPower",new f(220,42,42));e(this,"green",new f(119,148,122))}}class f{constructor(t,s,r){e(this,"r",0);e(this,"g",0);e(this,"b",0);e(this,"fillStyle","rgb(0,0,0)");this.r=t,this.g=s,this.b=r,this.fillStyle="rgba("+t+","+s+","+r+", 1)"}}class y{constructor(t,s,r,h,i,a,c,n,d,g,o,b){e(this,"index",0);e(this,"radius",0);e(this,"x",0);e(this,"y",0);e(this,"vx",0);e(this,"vy",0);e(this,"mass",0);e(this,"colour",new f(0,0,0));e(this,"cue",!1);e(this,"eight",!1);e(this,"red",!1);e(this,"blue",!1);e(this,"isColliding",!1);e(this,"restitution",.985);e(this,"friction",.99);e(this,"pocketed",0);this.index=t,this.radius=s,this.x=r,this.y=h,this.vx=i,this.vy=a,this.isColliding=!1,this.colour=n,this.mass=c,this.restitution=.985,this.friction=.99,this.cue=d,this.eight=g,this.red=o,this.blue=b,this.pocketed=0}}class x{constructor(t,s,r,h){e(this,"index",0);e(this,"radius",0);e(this,"x",0);e(this,"y",0);this.index=t,this.radius=s,this.x=r,this.y=h}}class v{constructor(t){e(this,"index",0);e(this,"colour",new f(0,0,0));e(this,"colName","");e(this,"score",0);this.index=t}}class m{constructor(t,s,r,h,i){e(this,"index",0);e(this,"x",0);e(this,"y",0);e(this,"width",0);e(this,"height",0);e(this,"left",0);e(this,"top",0);e(this,"right",0);e(this,"bot",0);e(this,"midX",0);e(this,"midY",0);this.index=t,this.x=s,this.y=r,this.width=h,this.height=i,this.left=s,this.top=r,this.right=s+h,this.bot=r+i,this.midX=this.x+this.width/2,this.midY=this.y-this.height/2}}class C{constructor(t,s,r,h,i,a,c,n){e(this,"index",0);e(this,"x",0);e(this,"y",0);e(this,"width",0);e(this,"height",0);e(this,"name","");e(this,"function");e(this,"src","");e(this,"left",0);e(this,"top",0);e(this,"right",0);e(this,"bot",0);e(this,"midX",0);e(this,"midY",0);this.index=t,this.x=s,this.y=r,this.width=h,this.height=i,this.left=s,this.top=r,this.right=s+h,this.bot=r+i,this.midX=this.x+this.width/2,this.midY=this.y-this.height/2,this.name=a,this.function=c,this.src=n}Borders(t,s){this.left=t,this.top=s,this.right=t+this.width,this.bot=s+this.height,this.midX=t+this.width/2,this.midY=s-this.height/2}}class L{constructor(t){e(this,"scale",0);e(this,"balls",[]);e(this,"pockets",[]);e(this,"borders",[]);e(this,"borderSpheres",[]);e(this,"width",0);e(this,"height",0);e(this,"border",0);e(this,"ballMass",0);e(this,"ballRadius",0);e(this,"pocketRadius",0);e(this,"playerMinRange",0);e(this,"playerMidRange",0);e(this,"playerMaxRange",0);e(this,"powerMax",0);e(this,"iterator",0);e(this,"restitution",0);e(this,"playerX",0);e(this,"playerY",0);e(this,"guideRange",0);e(this,"powerRatio",0);e(this,"reductionFactor",0);e(this,"colours");e(this,"power",!1);e(this,"gain",0);e(this,"powerCharge",0);e(this,"lowRate",0);e(this,"midRate",0);e(this,"highRate",0);e(this,"cueBall",null);e(this,"players",[new v(0),new v(1)]);e(this,"still",!1);e(this,"switchTurn",0);e(this,"shotEnded",0);e(this,"turn",0);e(this,"buttons",[]);e(this,"images",[]);e(this,"startPos",new k("",0,0));e(this,"endPos",new k("",0,0));this.scale=t,this.balls=[],this.pockets=[],this.borders=[],this.borderSpheres=[],this.width=880*this.scale,this.height=440*this.scale,this.border=100*this.scale,this.ballMass=20*this.scale,this.ballRadius=10*this.scale,this.pocketRadius=20*this.scale,this.playerMinRange=20*this.scale,this.playerMidRange=50*this.scale,this.playerMaxRange=100*this.scale,this.powerMax=100*this.scale,this.iterator=0,this.restitution=.985,this.playerX=0,this.playerY=0,this.guideRange=1e4,this.powerRatio=.6,this.reductionFactor=5,this.colours=new D,this.power=!1,this.gain=1*this.scale,this.powerCharge=.1*this.scale,this.lowRate=.1*this.scale,this.midRate=.5*this.scale,this.highRate=1*this.scale,this.cueBall=null,this.still=!0,this.switchTurn=0,this.shotEnded=2,this.turn=0,this.buttons=[],this.images=[],this.startPos=new k("",0,0),this.endPos=new k("",0,0)}Start(){R.width=this.width+this.border,R.height=this.height+this.border,document.body.style.backgroundColor="rgba("+this.colours.border.r+","+this.colours.border.g+","+this.colours.border.b+", 1)",this.AddPockets(),this.AddBorderBoxes(),this.AddBorderSpheres(),this.buttons=[],this.images=[],this.AddButtons(this),this.balls.length=0;let t=(this.height+this.border)/2,s=(this.width+this.border)/4,r=new y(this.balls.length,this.ballRadius,s,t,0,0,this.ballMass,this.colours.cueBall,!0,!1,!1,!1);this.playerX=s,this.playerY=t,this.cueBall=r,this.balls.push(r);let h=(this.width+this.border)/4*3,i=(this.height+this.border)/2,a=this.ballRadius*2,c=[[h,i],[h+a,i+this.ballRadius],[h+a,i-this.ballRadius],[h+a*2,i+a],[h+a*2,i-a],[h+a*3,i+a-this.ballRadius],[h+a*3,i+a*2-this.ballRadius],[h+a*3,i-a+this.ballRadius],[h+a*3,i-a*2+this.ballRadius],[h+a*4,i+this.ballRadius+a-this.ballRadius],[h+a*4,i+this.ballRadius+a*2-this.ballRadius],[h+a*4,i],[h+a*4,i-this.ballRadius-a+this.ballRadius],[h+a*4,i-this.ballRadius-a*2+this.ballRadius]];for(let o=0;o<14;o++){let b=Math.floor(Math.random()*c.length),w=this.colours.red,S=!0,P=!1;o>6&&(w=this.colours.blue,S=!1,P=!0);let B=new y(o,this.ballRadius,c[b][0],c[b][1],0,0,this.ballMass,w,!1,!1,S,P);c.splice(b,1),this.balls.push(B)}let n=h+a*2,d=i,g=new y(this.balls.length,this.ballRadius,n,d,0,0,this.ballMass,this.colours.eightBall,!1,!0,!1,!1);this.balls.push(g),this.players=[];for(let o=0;o<2;o++){let b=new v(o);this.players.push(b)}this.Pause(),this.still=!0,this.turn=0,this.shotEnded=2,this.cueBall!==null&&this.Draw(this.cueBall)}AddButtons(t){this.buttons=[],this.images=[];let s=new C(0,this.width/2,2,20,20,"playPauseButton",function(){t.Toggle()},"./play.svg");this.buttons.push(s);let r=new Image;r.src="./play.svg",this.images.push(r),r.onload=function(){t.cueBall!==null&&t.Draw(t.cueBall)},s=new C(0,this.width/2,2,20,20,"resetButton",function(){t.Start()},"./undo.svg"),this.buttons.push(s),r=new Image,r.src="./undo.svg",this.images.push(r),r.onload=function(){t.cueBall!==null&&t.Draw(t.cueBall)},r=new Image,r.src="./home.svg",this.images.push(r),r.onload=function(){t.cueBall!==null&&t.Draw(t.cueBall)}}AddPockets(){let t=this.border/2;this.pockets=[];let s=new x(0,this.pocketRadius,t,t),r=new x(1,this.pocketRadius,(this.width+this.border)/2,t-this.pocketRadius*.25),h=new x(2,this.pocketRadius,this.width+t,t),i=new x(3,this.pocketRadius,t,this.height+t),a=new x(4,this.pocketRadius,(this.width+this.border)/2,this.height+t+this.pocketRadius*.25),c=new x(5,this.pocketRadius,this.width+t,this.height+t);this.pockets.push(s,r,h,i,a,c)}AddBorderBoxes(){let t=this.border/2;this.borders=[];let s=new m(0,t+this.pocketRadius*1.5,t,(this.width+this.border)/2-t-this.pocketRadius*3,this.pocketRadius/2);this.borders.push(s),s=new m(0,(this.width+this.border)/2+this.pocketRadius*1.5,t,(this.width+this.border)/2-t-this.pocketRadius*3,this.pocketRadius/2),this.borders.push(s),s=new m(0,t+this.pocketRadius*1.5,this.height+t-this.pocketRadius/2,(this.width+this.border)/2-t-this.pocketRadius*3,this.pocketRadius/2),this.borders.push(s),s=new m(0,(this.width+this.border)/2+this.pocketRadius*1.5,this.height+t-this.pocketRadius/2,(this.width+this.border)/2-t-this.pocketRadius*3,this.pocketRadius/2),this.borders.push(s),s=new m(0,t,t+this.pocketRadius*1.5,this.pocketRadius/2,this.height+t-t-this.pocketRadius*3),this.borders.push(s),s=new m(0,this.width+t-this.pocketRadius/2,t+this.pocketRadius*1.5,this.pocketRadius/2,this.height+t-t-this.pocketRadius*3),this.borders.push(s)}AddBorderSpheres(){let t=this.border/2;this.borderSpheres=[];let s=new y(this.borderSpheres.length,this.pocketRadius/2,t+this.pocketRadius*1.5,t,0,0,this.ballMass,this.colours.border,!1,!1,!1,!1);this.borderSpheres.push(s),s=new y(this.borderSpheres.length,this.pocketRadius/2,t,t+this.pocketRadius*1.5,0,0,this.ballMass,this.colours.border,!1,!1,!1,!1),this.borderSpheres.push(s),s=new y(this.borderSpheres.length,this.pocketRadius/2,this.width+this.border-(t+this.pocketRadius*1.5),t,0,0,this.ballMass,this.colours.border,!1,!1,!1,!1),this.borderSpheres.push(s),s=new y(this.borderSpheres.length,this.pocketRadius/2,this.width+t,t+this.pocketRadius*1.5,0,0,this.ballMass,this.colours.border,!1,!1,!1,!1),this.borderSpheres.push(s),s=new y(this.borderSpheres.length,this.pocketRadius/2,t,this.height+this.border-(t+this.pocketRadius*1.5),0,0,this.ballMass,this.colours.border,!1,!1,!1,!1),this.borderSpheres.push(s),s=new y(this.borderSpheres.length,this.pocketRadius/2,t+this.pocketRadius*1.5,this.height+t,0,0,this.ballMass,this.colours.border,!1,!1,!1,!1),this.borderSpheres.push(s),s=new y(this.borderSpheres.length,this.pocketRadius/2,this.width+t,this.height+this.border-(t+this.pocketRadius*1.5),0,0,this.ballMass,this.colours.border,!1,!1,!1,!1),this.borderSpheres.push(s),s=new y(this.borderSpheres.length,this.pocketRadius/2,this.width+this.border-(t+this.pocketRadius*1.5),this.height+t,0,0,this.ballMass,this.colours.border,!1,!1,!1,!1),this.borderSpheres.push(s),s=new y(this.borderSpheres.length,this.pocketRadius/2,(this.width+this.border)/2-this.pocketRadius*1.5,t,0,0,this.ballMass,this.colours.border,!1,!1,!1,!1),this.borderSpheres.push(s),s=new y(this.borderSpheres.length,this.pocketRadius/2,(this.width+this.border)/2+this.pocketRadius*1.5,t,0,0,this.ballMass,this.colours.border,!1,!1,!1,!1),this.borderSpheres.push(s),s=new y(this.borderSpheres.length,this.pocketRadius/2,(this.width+this.border)/2-this.pocketRadius*1.5,this.height+t,0,0,this.ballMass,this.colours.border,!1,!1,!1,!1),this.borderSpheres.push(s),s=new y(this.borderSpheres.length,this.pocketRadius/2,(this.width+this.border)/2+this.pocketRadius*1.5,this.height+t,0,0,this.ballMass,this.colours.border,!1,!1,!1,!1),this.borderSpheres.push(s)}Toggle(){this.iterator===null||this.iterator===void 0?(this.images[0].src="./pause.svg",this.Iterate()):(this.images[0].src="./play.svg",this.Pause())}Iterate(){this.iterator=setInterval(()=>{this.Update()},8)}Pause(){this.iterator!==null&&clearInterval(this.iterator),this.iterator=null}Update(){this.power&&this.powerCharge<this.powerMax&&(this.powerCharge<this.playerMinRange?this.powerCharge+=this.gain*this.lowRate:this.powerCharge>this.playerMinRange&&this.powerCharge<this.playerMidRange?this.powerCharge+=this.gain*this.midRate:this.powerCharge>this.playerMidRange&&this.powerCharge<this.playerMaxRange&&(this.powerCharge+=this.gain*this.highRate));for(let t=0;t<this.balls.length;t++)this.MovePosition(this.balls[t]);this.DetectCollisions(),this.DetectEdgeCollisions(),this.cueBall!==null&&this.Draw(this.cueBall),this.shotEnded===1&&this.EndShot()}MovePosition(t){t.vx*=t.friction,t.vy*=t.friction,t.x+=t.vx,t.y+=t.vy}DetectCollisions(){let t,s;for(let r=0;r<this.balls.length;r++){t=this.balls[r];let h=!1;for(let a=0;a<this.pockets.length;a++)if(s=this.pockets[a],Math.sqrt((s.x-t.x)*(s.x-t.x)+(s.y-t.y)*(s.y-t.y))<s.radius*1.25){if(h=!0,t.pocketed++,t.radius=0,t.mass=0,t.vx=0,t.vy=0,this.players[this.turn].colour===null||this.players[this.turn].colour===void 0)for(let n=0;n<this.players.length;n++)n===this.turn?(this.players[n].colour=t.colour,t.colour.fillStyle==="rgba("+this.colours.red.r+","+this.colours.red.g+","+this.colours.red.b+", 1)"&&(this.players[n].colName="Red"),t.colour.fillStyle==="rgba("+this.colours.blue.r+","+this.colours.blue.g+","+this.colours.blue.b+", 1)"&&(this.players[n].colName="Blue")):(t.colour.fillStyle==="rgba("+this.colours.red.r+","+this.colours.red.g+","+this.colours.red.b+", 1)"&&(this.players[n].colour=new f(this.colours.blue.r,this.colours.blue.g,this.colours.blue.b),this.players[n].colName="Blue"),t.colour.fillStyle==="rgba("+this.colours.blue.r+","+this.colours.blue.g+","+this.colours.blue.b+", 1)"&&(this.players[n].colour=new f(this.colours.red.r,this.colours.red.g,this.colours.red.b),this.players[n].colName="Red"));break}if(h)continue;let i=!1;for(let a=0;a<this.borders.length;a++)s=this.borders[a],this.RectCircleColliding(t,s)&&(i=!0,t.x-t.radius<s.left?(t.vx=-Math.abs(t.vx)*this.restitution,t.x=s.left-t.radius):t.x+t.radius>s.right?(t.vx=Math.abs(t.vx)*this.restitution,t.x=s.right+t.radius):t.y-t.radius<s.top?(t.vy=-Math.abs(t.vy)*this.restitution,t.y=s.top-t.radius):t.y+t.radius>s.bot&&(t.vy=Math.abs(t.vy)*this.restitution,t.y=s.bot+t.radius));if(!i){i=!1;for(let a=0;a<this.borderSpheres.length;a++)if(s=this.borderSpheres[a],s.vx=-t.vx,s.vy=-t.vy,this.CircleIntersect(t.x,t.y,t.radius,s.x,s.y,s.radius)){i=!0,t.isColliding=!0,s.isColliding=!0;let c={x:s.x-t.x,y:s.y-t.y},n=Math.sqrt((s.x-t.x)*(s.x-t.x)+(s.y-t.y)*(s.y-t.y)),d={x:c.x/n,y:c.y/n},g={x:t.vx-s.vx,y:t.vy-s.vy},o=g.x*d.x+g.y*d.y;if(o*=Math.min(t.restitution,s.restitution),o<0)break;let b=2*o/(t.mass+s.mass);t.vx-=b*s.mass*d.x,t.vy-=b*s.mass*d.y,s.vx+=b*t.mass*d.x,s.vy+=b*t.mass*d.y}if(!i){i=!1;for(let a=0;a<this.balls.length;a++)if(a!=r){if(s=this.balls[a],this.CircleIntersect(t.x,t.y,t.radius,s.x,s.y,s.radius)){i=!0,t.isColliding=!0,s.isColliding=!0;let c={x:s.x-t.x,y:s.y-t.y},n=Math.sqrt((s.x-t.x)*(s.x-t.x)+(s.y-t.y)*(s.y-t.y)),d={x:c.x/n,y:c.y/n},g={x:t.vx-s.vx,y:t.vy-s.vy},o=g.x*d.x+g.y*d.y;if(o*=Math.min(t.restitution,s.restitution),o<0)break;let b=2*o/(t.mass+s.mass);t.vx-=b*s.mass*d.x,t.vy-=b*s.mass*d.y,s.vx+=b*t.mass*d.x,s.vy+=b*t.mass*d.y}if(i)break;i=!1}}}}}CircleIntersect(t,s,r,h,i,a){return(t-h)*(t-h)+(s-i)*(s-i)<=(r+a)*(r+a)}RectCircleColliding(t,s){let r=Math.abs(t.x-s.x-s.width/2),h=Math.abs(t.y-s.y-s.height/2);if(r>s.width/2+t.radius||h>s.height/2+t.radius)return!1;if(r<=s.width/2||h<=s.height/2)return!0;let i=r-s.width/2,a=h-s.height/2;return i*i+a*a<=t.radius*t.radius}DetectEdgeCollisions(){let t;for(let s=0;s<this.balls.length;s++)t=this.balls[s],t.x<t.radius?(t.vx=Math.abs(t.vx)*this.restitution,t.x=t.radius):t.x>this.width+this.border-t.radius&&(t.vx=-Math.abs(t.vx)*this.restitution,t.x=this.width+this.border-t.radius),t.y<t.radius?(t.vy=Math.abs(t.vy)*this.restitution,t.y=t.radius):t.y>this.height+this.border-t.radius&&(t.vy=-Math.abs(t.vy)*this.restitution,t.y=this.height+this.border-t.radius)}Draw(t){let s=this.border/2;l.clearRect(0,0,this.width+this.border,this.height+this.border),l.fillStyle="rgba("+this.colours.border.r+","+this.colours.border.g+","+this.colours.border.b+", 1)",l.fillRect(0,0,this.width+this.border,this.height+this.border),l.fillStyle="rgba("+this.colours.table.r+","+this.colours.table.g+","+this.colours.table.b+", 1)",l.fillRect(0+s,0+s,this.width,this.height),l.fillStyle="rgba("+this.colours.quarterLines.r+","+this.colours.quarterLines.g+","+this.colours.quarterLines.b+", 1)",l.fillRect(this.width/4+s/2,s,1,this.height),l.fillRect((this.width/4+s/2)*3,s,1,this.height),l.fillStyle="rgba("+this.colours.border.r+","+this.colours.border.g+","+this.colours.border.b+", 1)";for(let o=0;o<this.borders.length;o++)l.fillRect(this.borders[o].x,this.borders[o].y,this.borders[o].width,this.borders[o].height);l.fillStyle="rgba("+this.colours.border.r+","+this.colours.border.g+","+this.colours.border.b+", 1)";for(let o=0;o<this.borderSpheres.length;o++)l.beginPath(),l.arc(this.borderSpheres[o].x,this.borderSpheres[o].y,this.borderSpheres[o].radius,0,2*Math.PI),l.fill();l.fillStyle="rgba("+this.colours.pockets.r+","+this.colours.pockets.g+","+this.colours.pockets.b+", 1)";for(let o=0;o<this.pockets.length;o++)l.beginPath(),l.arc(this.pockets[o].x,this.pockets[o].y,this.pockets[o].radius,0,2*Math.PI),l.fill();let r=this.buttons.length,h=40,i=s+this.pocketRadius*1.5,a=s-this.buttons[0].height/1.25;for(let o=0;o<r;o++)this.buttons[o].src===void 0||this.buttons[o].src===null||this.images[o]===null||this.images[o]===void 0||(l.drawImage(this.images[o],i,a,this.buttons[o].width,this.buttons[o].height),this.buttons[o].Borders(i,a),i+=h);l.fillStyle="white",l.font="16px Arial";let c="Player "+(this.players[0].index+1);l.beginPath(),this.turn===0?l.fillStyle="rgba("+this.colours.green.r+","+this.colours.green.g+","+this.colours.green.b+", 1)":l.fillStyle="rgba("+this.colours.border.r+","+this.colours.border.g+","+this.colours.border.b+", 1)",l.arc(s+this.pocketRadius*1.5+5,this.height+s+this.pocketRadius/4,10,0,2*Math.PI),l.fill(),l.fillStyle="white",l.fillText(c,s+this.pocketRadius*1.5+20,this.height+s+this.pocketRadius/2),c="Player "+(this.players[1].index+1),this.turn===1?l.fillStyle="rgba("+this.colours.green.r+","+this.colours.green.g+","+this.colours.green.b+", 1)":l.fillStyle="rgba("+this.colours.border.r+","+this.colours.border.g+","+this.colours.border.b+", 1)",l.beginPath(),l.arc((this.width+this.border)/2+this.pocketRadius*1.5+5,this.height+s+this.pocketRadius/4,10,0,2*Math.PI),l.fill(),l.fillStyle="white",l.fillText(c,(this.width+this.border)/2+this.pocketRadius*1.5+20,this.height+s+this.pocketRadius/2),this.players[0].colour!==null&&this.players[0].colour!==void 0?l.fillStyle=this.players[0].colour.fillStyle:l.fillStyle="white";for(let o=0;o<this.players[0].score;o++)l.beginPath(),l.arc(s+this.pocketRadius*3+o*25,this.height+s+this.pocketRadius*1.5,10,0,2*Math.PI),l.fill();this.players[1].colour!==null&&this.players[1].colour!==void 0?l.fillStyle=this.players[1].colour.fillStyle:l.fillStyle="white";for(let o=0;o<this.players[1].score;o++)l.beginPath(),l.arc((this.width+this.border)/2+this.pocketRadius*3+o*25,this.height+s+this.pocketRadius*1.5,10,0,2*Math.PI),l.fill();let n,d,g=!0;for(let o=0;o<this.balls.length;o++)this.balls[o].radius!==0&&((this.balls[o].vx>.01||this.balls[o].vy>.01||this.balls[o].vx<-.01||this.balls[o].vy<-.01&&g)&&(g=!1),l.fillStyle!=this.balls[o].colour.fillStyle&&(l.fillStyle=this.balls[o].colour.fillStyle),l.beginPath(),l.arc(this.balls[o].x,this.balls[o].y,this.balls[o].radius,0,2*Math.PI),l.fill(),this.balls[o].cue&&(n=this.balls[o].x,d=this.balls[o].y));if(g?(this.shotEnded===0&&(this.shotEnded=1),this.still=!0):this.still=!1,this.power&&(this.powerCharge<this.playerMinRange&&(l.fillStyle="rgba("+this.colours.minRange.r+","+this.colours.minRange.g+","+this.colours.minRange.b+", 0.5)"),this.powerCharge>this.playerMinRange&&this.powerCharge<this.playerMidRange&&(l.fillStyle="rgba("+this.colours.midPower.r+","+this.colours.midPower.g+","+this.colours.midPower.b+", 0.5)"),this.powerCharge>this.playerMidRange&&(l.fillStyle="rgba("+this.colours.maxPower.r+","+this.colours.maxPower.g+","+this.colours.maxPower.b+", 0.5)"),l.beginPath(),l.arc(n,d,this.powerCharge,0,2*Math.PI),l.fill()),this.still){l.lineWidth=2*this.scale,l.strokeStyle="rgba("+this.colours.minRange.r+","+this.colours.minRange.g+","+this.colours.minRange.b+", 0.5)",l.beginPath(),l.arc(n,d,this.playerMinRange,0,2*Math.PI),l.stroke(),l.strokeStyle="rgba("+this.colours.midPower.r+","+this.colours.midPower.g+","+this.colours.midPower.b+", 0.5)",l.beginPath(),l.arc(n,d,this.playerMidRange,0,2*Math.PI),l.stroke(),l.strokeStyle="rgba("+this.colours.maxPower.r+","+this.colours.maxPower.g+","+this.colours.maxPower.b+", 0.5)",l.beginPath(),l.arc(n,d,this.playerMaxRange,0,2*Math.PI),l.stroke(),l.strokeStyle="rgba("+this.colours.cueStick.r+","+this.colours.cueStick.g+","+this.colours.cueStick.b+", 1)",l.lineWidth=4*this.scale;let o={x:this.playerX-t.x,y:this.playerY-t.y},b=Math.sqrt((this.playerX-t.x)*(this.playerX-t.x)+(this.playerY-t.y)*(this.playerY-t.y)),w={x:o.x/b,y:o.y/b};l.beginPath(),l.moveTo(t.x+w.x*(this.playerMinRange+l.lineWidth/2),t.y+w.y*(this.playerMinRange+l.lineWidth/2)),l.lineTo(t.x+w.x*(this.playerMaxRange-l.lineWidth/2),t.y+w.y*(this.playerMaxRange-l.lineWidth/2)),l.stroke(),l.lineWidth=1*this.scale,l.strokeStyle="rgba("+this.colours.quarterLines.r+","+this.colours.quarterLines.g+","+this.colours.quarterLines.b+", 1)",l.beginPath(),l.moveTo(t.x+-w.x*(this.playerMinRange+l.lineWidth/2),t.y+-w.y*(this.playerMinRange+l.lineWidth/2)),l.lineTo(t.x+-w.x*(this.guideRange-l.lineWidth/2),t.y+-w.y*(this.guideRange-l.lineWidth/2)),l.stroke()}}EndShot(){let t=[],s=[],r=[],h=[];for(let i=0;i<this.balls.length;i++)this.balls[i].pocketed>0&&(this.balls[i].red&&t.push(i),this.balls[i].blue&&s.push(i),this.balls[i].cue&&r.push(i),this.balls[i].eight&&h.push(i),this.balls[i].pocketed=0);if(this.players[this.turn].colName==="Red"){if(t.length>0){this.switchTurn++;for(let i=0;i<t.length;i++)this.players[this.turn].score++,this.balls.splice(t[i],1)}if(s.length>0)for(let i=0;i<s.length;i++)this.balls.splice(s[i],1);if(r.length>0)for(let i=0;i<r.length;i++)this.balls.splice(r[i],1);if(h.length>0)for(let i=0;i<h.length;i++)this.balls.splice(h[i],1)}if(this.players[this.turn].colName==="Blue"){if(t.length>0)for(let i=0;i<t.length;i++)this.balls.splice(t[i],1);if(s.length>0){this.switchTurn++;for(let i=0;i<s.length;i++)this.players[this.turn].score++,this.balls.splice(s[i],1)}if(r.length>0)for(let i=0;i<r.length;i++)this.balls.splice(r[i],1);if(h.length>0)for(let i=0;i<h.length;i++)this.balls.splice(h[i],1)}this.switchTurn===0&&(this.turn++,this.turn>=this.players.length&&(this.turn=0)),this.switchTurn=0,this.shotEnded=2}CheckButton(t,s){for(let r=0;r<this.buttons.length;r++){let h=this.buttons[r];if(t<h.right&&t>h.left&&s>h.top&&s<h.bot)return h.function(),!0}return!1}AddPower(t,s,r){if(!this.still)return;Math.sqrt((t.x-s)*(t.x-s)+(t.y-r)*(t.y-r))<=this.playerMaxRange&&(this.power=!0)}CancelHit(){this.still&&(this.power=!1,this.powerCharge=.1)}MouseMove(t,s){for(let r=0;r<this.balls.length;r++){if(this.balls[r].cue===!1)continue;let h=this.balls[r],i=Math.sqrt((h.x-t)*(h.x-t)+(h.y-s)*(h.y-s));i>this.playerMinRange&&i<=this.playerMaxRange&&(this.playerX=t,this.playerY=s)}}Release(t,s){if(!(!this.still||this.powerCharge<.1))for(let r=0;r<this.balls.length;r++){if(this.balls[r].cue===!1)continue;let h=this.balls[r],i={vx:-h.vx,vy:-h.vy,mass:h.mass},a=Math.sqrt((h.x-t)*(h.x-t)+(h.y-s)*(h.y-s));if(a<=this.playerMaxRange){let c={x:h.x-t,y:h.y-s},n={x:c.x/a,y:c.y/a},d={x:h.vx-i.vx,y:h.vy-i.vy},g=d.x*n.x+d.y*n.y,o=1/this.powerRatio*this.powerCharge/this.reductionFactor;this.powerCharge<1&&(o=this.powerCharge);let b=2*g+o/(h.mass+i.mass);g*=h.restitution,h.vx+=b*i.mass*n.x,h.vy+=b*i.mass*n.y,this.powerCharge=.1,this.power=!1,this.shotEnded=0;return}}}TouchStart(t,s){t<screen.width/2?(this.startPos.x=t,this.startPos.y=s,this.startPos.mode="L"):(this.startPos.x=t,this.startPos.y=s,this.startPos.mode="R")}TouchEnd(t,s){this.endPos.x=t,this.endPos.y=s,this.startPos.mode}}document.getElementById("gameDiv");const R=document.getElementById("gameCanvas"),l=R.getContext("2d");let p=null;function T(){p!==null&&(p.Pause(),p=null);let u=1;p=new L(u),p.Start()}R.onmousemove=function(u){u.preventDefault();let t=R.getBoundingClientRect(),s=u.clientX-t.left,r=u.clientY-t.top;p!=null&&p.MouseMove(s,r)};R.onmousedown=function(u){if(p!==null){if(u.button===0){u.preventDefault();let t=R.getBoundingClientRect(),s=u.clientX-t.left,r=u.clientY-t.top;p.CheckButton(s,r)||p.cueBall!==null&&p.AddPower(p.cueBall,s,r)}u.button===2&&(u.preventDefault(),u.stopPropagation(),p.CancelHit())}};R.onmouseup=function(u){if(p!==null){if(u.button===0){u.preventDefault();let t=R.getBoundingClientRect(),s=u.clientX-t.left,r=u.clientY-t.top;p.Release(s,r)}u.button===2&&(u.preventDefault(),u.stopPropagation(),p.CancelHit())}};document.ontouchstart=function(u){if(u.touches!==void 0){let t=u.touches[0]||u.changedTouches[0];p!=null&&p.TouchStart(t.clientX,t.clientY)}};document.ontouchend=function(u){if(u.touches!==void 0){let t=u.touches[0]||u.changedTouches[0];p!=null&&p.TouchEnd(t.screenX,t.screenY)}};document.onkeydown=function(u){u.key==="s"&&p!==null&&(p.players[0].score++,p.players[1].score++)};document.addEventListener("DOMContentLoaded",T);