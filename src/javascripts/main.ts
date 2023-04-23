"use strict";

function CalculateVh()
{
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

window.addEventListener('DOMContentLoaded', CalculateVh);
window.addEventListener('resize', CalculateVh);
window.addEventListener('orientationchange', CalculateVh);

class Vector
{
  mode: string = '';
  x: number = 0;
  y: number = 0;
  constructor(mode: string, x: number, y: number)
  {
    this.mode = mode;
    this.x = x;
    this.y = y;
  }
}

class GameColours
{
  border: Colour = new Colour(35, 29, 0);
  pockets: Colour = new Colour(46, 52, 68);
  table: Colour = new Colour(99, 128, 102);
  quarterLines: Colour = new Colour(224, 220, 211);
  red: Colour = new Colour(201, 88, 99);
  blue: Colour = new Colour(72, 103, 203);
  cueBall: Colour = new Colour(249, 245, 236);
  eightBall: Colour = new Colour(44, 34, 13);
  cueStick: Colour = new Colour(213,194,165);
  minRange: Colour = new Colour(69, 243, 92);
  midPower: Colour = new Colour(220, 143, 42);
  maxPower: Colour = new Colour(220, 42, 42);
  green: Colour = new Colour(119, 148, 122);
}

class Colour
{
  r: number = 0;
  g: number = 0;
  b: number = 0;
  fillStyle: string = 'rgb(0,0,0)';
  constructor(r: number, g: number, b: number)
  {
    this.r = r;
    this.g = g;
    this.b = b;
    this.fillStyle = "rgba(" + r + "," + g + "," + b + ", 1)";
  }
}

class Ball
{
  index: number = 0;
  radius: number = 0;
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
  mass: number = 0;
  colour: Colour = new Colour(0,0,0);
  cue: boolean = false;
  eight: boolean = false;
  red: boolean = false;
  blue: boolean = false;
  isColliding: boolean = false;
  restitution: number = 0.985;
  friction: number = 0.99;
  pocketed: number = 0;
  constructor(index: number, radius: number, x: number, y: number, vx: number, vy: number, mass: number, col: Colour, cue: boolean, eight: boolean, red: boolean, blue: boolean)
  {
    this.index = index;
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.isColliding = false;
    this.colour = col;
    this.mass = mass;
    this.restitution = 0.985;
    this.friction = 0.99;
    this.cue = cue;
    this.eight = eight;
    this.red = red;
    this.blue = blue;
    this.pocketed = 0;
  }
}

class Pocket
{
  index: number = 0;
  radius: number = 0;
  x: number = 0;
  y: number = 0;
  constructor(index: number, radius: number, x: number, y: number)
  {
    this.index = index;
    this.radius = radius;
    this.x = x;
    this.y = y;
  }
}

class Player
{
  index: number = 0;
  colour: Colour = new Colour(0,0,0);
  colName: string = '';
  score: number = 0;
  constructor(index: number)
  {
    this.index = index;
  }
}

class Border
{
  index: number = 0;
  x: number = 0;
  y: number = 0;
  width: number = 0;
  height: number = 0;

  left: number = 0;
  top: number = 0;
  right: number = 0;
  bot: number = 0;
  midX: number = 0;
  midY: number = 0;
  constructor(index: number, x: number, y: number, width: number, height: number)
  {
    this.index = index;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.left = x;
    this.top = y;
    this.right = x + width;
    this.bot = y + height;
    this.midX = this.x + this.width/2;
    this.midY = this.y - this.height/2;
  }
}

class Button
{
  index: number = 0;
  x: number = 0;
  y: number = 0;
  width: number = 0;
  height: number = 0;

  name: string = '';
  function: Function;
  src: string = '';

  left: number = 0;
  top: number = 0;
  right: number = 0;
  bot: number = 0;
  midX: number = 0;
  midY: number = 0;
  constructor(index: number, x: number, y: number, width: number, height: number, name: string, f: Function, src: string)
  {
    this.index = index;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.left = x;
    this.top = y;
    this.right = x + width;
    this.bot = y + height;
    this.midX = this.x + this.width/2;
    this.midY = this.y - this.height/2;
    this.name = name;
    this.function = f;
    this.src = src;
  }

  Borders(newX: number, newY: number)
  {
    this.left = newX;
    this.top = newY;
    this.right = newX + this.width;
    this.bot = newY + this.height;
    this.midX = newX + this.width / 2;
    this.midY = newY - this.height / 2;
  }
}

class Game
{
  scale: number = 0;

  balls: any[] = [];
  pockets: any[] = [];
  borders: any[] = [];
  borderSpheres: any[] = [];

  width: number = 0;
  height: number = 0;
  border: number = 0;
  ballMass: number = 0;
  ballRadius: number = 0;
  pocketRadius: number = 0;
  playerMinRange: number = 0;
  playerMidRange: number = 0;
  playerMaxRange: number = 0;
  powerMax: number = 0;

  iterator: number|null = 0;
  restitution: number = 0;
  playerX: number = 0;
  playerY: number = 0;
  guideRange: number = 0;
  powerRatio: number = 0;
  reductionFactor: number = 0;
  colours: GameColours;

  power: boolean = false;

  gain: number = 0;
  powerCharge: number = 0;
  lowRate: number = 0;
  midRate: number = 0;
  highRate: number = 0;

  cueBall: Ball|null = null;

  players: Array<Player> = [new Player(0),new Player(1)];

  still: boolean = false;

  switchTurn: number = 0;
  shotEnded: number = 0;
  turn: number = 0;

  buttons: Array<Button> = [];
  images: any[] = [];

  startPos: Vector = new Vector('', 0, 0);
  endPos: Vector = new Vector('', 0, 0);

  constructor(scale: number)
  {
    this.scale = scale;
    this.balls = [];
    this.pockets = [];
    this.borders = [];
    this.borderSpheres = [];

    this.width = 880 * this.scale;
    this.height = 440 * this.scale;
    this.border = 100 * this.scale;
    this.ballMass = 20 * this.scale;
    this.ballRadius = 10 * this.scale;
    this.pocketRadius = 20 * this.scale;
    this.playerMinRange = 20 * this.scale;
    this.playerMidRange = 50 * this.scale;
    this.playerMaxRange = 100 * this.scale;
    this.powerMax = 100 * this.scale;

    this.iterator = 0;
    this.restitution = 0.985;
    this.playerX = 0;
    this.playerY = 0;
    this.guideRange = 10000;
    this.powerRatio = 0.6;
    this.reductionFactor = 5;
    this.colours = new GameColours();
    this.power = false;
    this.gain = 1 * this.scale;
    this.powerCharge = 0.1 * this.scale;
    this.lowRate = 0.1 * this.scale;
    this.midRate = 0.5 * this.scale;
    this.highRate = 1 * this.scale;
    this.cueBall = null;

    this.still = true;
    this.switchTurn = 0;
    this.shotEnded = 2;
    this.turn = 0;

    this.buttons = [];
    this.images = [];

    this.startPos = new Vector('', 0, 0);

    this.endPos = new Vector('', 0, 0);
  }

  Start()
  {
    gameCanvas.width = this.width + this.border;
    gameCanvas.height = this.height + this.border;
    // c.width = this.width + this.border;
    // c.height = this.height + this.border;

    document.body.style.backgroundColor = "rgba(" + this.colours.border.r + "," + this.colours.border.g + "," + this.colours.border.b + ", 1)";
    // gameContainer.style.backgroundColor = "rgba(" + this.colours.border[0] + "," + this.colours.border[1] + "," + this.colours.border[2] + ", 1)";

    this.AddPockets();
    this.AddBorderBoxes();
    this.AddBorderSpheres();

    this.buttons = [];
    this.images = [];

    this.AddButtons(this);

    this.balls.length = 0;

    let cueHeight = ( this.height + this.border ) / 2;
    let cueWidth = ( this.width + this.border ) / 4;

    let cueBall = new Ball(this.balls.length, this.ballRadius, cueWidth, cueHeight, 0, 0, this.ballMass, this.colours.cueBall, true, false, false, false);
    this.playerX = cueWidth;
    this.playerY = cueHeight;
    this.cueBall = cueBall;
    this.balls.push(cueBall);

    let topBallWidth = ( ( this.width + this.border ) / 4 ) * 3;
    let topBallHeight = ( this.height + this.border ) / 2;

    let ballDiameter = this.ballRadius * 2;

    let ballPos = [

      [ topBallWidth, topBallHeight ],

      [ ( topBallWidth + ballDiameter ), ( topBallHeight + this.ballRadius ) ],
      [ ( topBallWidth + ballDiameter ), ( topBallHeight - this.ballRadius ) ],

      [ ( topBallWidth + ballDiameter * 2 ), ( topBallHeight + ballDiameter ) ],
      [ ( topBallWidth + ballDiameter * 2 ), ( topBallHeight - ballDiameter ) ],

      [ ( topBallWidth + ballDiameter * 3 ), ( topBallHeight + ballDiameter - this.ballRadius ) ],
      [ ( topBallWidth + ballDiameter * 3 ), ( topBallHeight + ballDiameter * 2 - this.ballRadius ) ],
      [ ( topBallWidth + ballDiameter * 3 ), ( topBallHeight - ballDiameter + this.ballRadius ) ],
      [ ( topBallWidth + ballDiameter * 3 ), ( topBallHeight - ballDiameter * 2 + this.ballRadius ) ],

      [ ( topBallWidth + ballDiameter * 4 ), ( topBallHeight + this.ballRadius + ballDiameter - this.ballRadius ) ],
      [ ( topBallWidth + ballDiameter * 4 ), ( topBallHeight + this.ballRadius + ballDiameter * 2 - this.ballRadius ) ],
      [ ( topBallWidth + ballDiameter * 4 ), topBallHeight ],
      [ ( topBallWidth + ballDiameter * 4 ), ( topBallHeight - this.ballRadius - ballDiameter + this.ballRadius ) ],
      [ ( topBallWidth + ballDiameter * 4 ), ( topBallHeight - this.ballRadius - ballDiameter * 2 + this.ballRadius ) ],
    ];

    for(let i = 0; i < 14; i++)
    {
      let ranStart = Math.floor(Math.random() * ballPos.length);
      let col = this.colours.red;
      let red = true;
      let blue = false;
      if(i > 6)
      {
        col = this.colours.blue;
        red = false;
        blue = true;
      }
      let newBall = new Ball(i, this.ballRadius, ballPos[ranStart][0], ballPos[ranStart][1], 0, 0, this.ballMass, col, false, false, red, blue);
      ballPos.splice(ranStart, 1);
      this.balls.push(newBall);
    }

    let eightBallWidth = topBallWidth + ballDiameter * 2;
    let eightBallHeight = topBallHeight;

    let eightBall = new Ball(this.balls.length, this.ballRadius, eightBallWidth, eightBallHeight, 0, 0, this.ballMass, this.colours.eightBall, false, true, false, false);
    this.balls.push(eightBall);

    this.players = [];
    for(let i = 0; i < 2; i++)
    {
      let p = new Player(i);
      this.players.push(p);
    }

    this.Pause();

    this.still = true;
    this.turn = 0;
    this.shotEnded = 2;

    if(this.cueBall !== null) this.Draw(this.cueBall);
  }

  AddButtons(game: Game)
  {
    this.buttons = [];
    this.images = [];

    let button = new Button(0, 
      this.width / 2, 
      2, 
      20, 
      20,
      "playPauseButton",
      function () { game.Toggle() },
      './play.svg'
    );
    this.buttons.push(button);

    let img = new Image();
    img.src = './play.svg';
    this.images.push(img);
    img.onload = function() { 
      if(game.cueBall !== null) game.Draw(game.cueBall);
    };

    button = new Button(0, 
      this.width / 2, 
      2, 
      20, 
      20,
      "resetButton",
      function () { game.Start() },
      './undo.svg'
    );
    this.buttons.push(button);

    img = new Image();
    img.src = './undo.svg';
    this.images.push(img);
    img.onload = function() { 
      if(game.cueBall !== null) game.Draw(game.cueBall);
    };

    img = new Image();
    img.src = './home.svg';
    this.images.push(img);
    img.onload = function() { 
      if(game.cueBall !== null) game.Draw(game.cueBall);
    };
  }

  AddPockets()
  {
    let halfBorder = this.border / 2;

    this.pockets = [];

    // top left
    let pocket1 = new Pocket(0, this.pocketRadius, halfBorder, halfBorder );
    // top mid
    let pocket2 = new Pocket(1, this.pocketRadius, ( this.width + this.border ) / 2, halfBorder - this.pocketRadius * 0.25 );
    // top right
    let pocket3 = new Pocket(2, this.pocketRadius, ( this.width + halfBorder ),  halfBorder );

    // bot left
    let pocket4 = new Pocket(3, this.pocketRadius, halfBorder, ( this.height + halfBorder ) );
    // bot mid
    let pocket5 = new Pocket(4, this.pocketRadius, ( this.width + this.border ) / 2, ( this.height + halfBorder ) + this.pocketRadius * 0.25 );
    // bot right
    let pocket6 = new Pocket(5, this.pocketRadius, ( this.width + halfBorder ), ( this.height + halfBorder ) );

    this.pockets.push(pocket1, pocket2, pocket3, pocket4, pocket5, pocket6);
  }

  AddBorderBoxes()
  {
    let halfBorder = this.border / 2;

    this.borders = [];

    // top left
    let border = new Border(0, 
      ( halfBorder + this.pocketRadius * 1.5 ), 
      halfBorder, 
      ( ( this.width + this.border ) / 2 - halfBorder - this.pocketRadius * 3 ), 
      ( this.pocketRadius / 2 ) );
    this.borders.push(border);

    // top right
    border = new Border(0, 
      ( this.width + this.border ) / 2 + this.pocketRadius * 1.5 , 
      halfBorder, 
      ( ( this.width + this.border ) / 2 - halfBorder - this.pocketRadius * 3 ) , 
      ( this.pocketRadius / 2 ) );
    this.borders.push(border);

    // bottom left
    border = new Border(0, 
      ( halfBorder + this.pocketRadius * 1.5 ), 
      ( this.height + halfBorder ) - this.pocketRadius / 2, 
      ( ( this.width + this.border ) / 2 - halfBorder - this.pocketRadius * 3 ), 
      ( this.pocketRadius / 2 ) );
    this.borders.push(border);

    // bottom right
    border = new Border(0, 
      ( this.width + this.border ) / 2 + this.pocketRadius * 1.5 , 
      ( this.height + halfBorder ) - this.pocketRadius / 2, 
      ( ( this.width + this.border ) / 2 - halfBorder - this.pocketRadius * 3 ) , 
      ( this.pocketRadius / 2 ) );
    this.borders.push(border);

    // left
    border = new Border(0, 
      halfBorder,
      ( halfBorder + this.pocketRadius * 1.5 ), 
      ( this.pocketRadius / 2 ) , 
      ( ( this.height + halfBorder ) - halfBorder - this.pocketRadius * 3 ) );
    this.borders.push(border);

    // right
    border = new Border(0, 
      ( this.width + halfBorder ) - this.pocketRadius / 2,
      ( halfBorder + this.pocketRadius * 1.5 ), 
      ( this.pocketRadius / 2 ) , 
      ( ( this.height + halfBorder ) - halfBorder - this.pocketRadius * 3 ) );
    this.borders.push(border);
  }

  AddBorderSpheres()
  {
    let halfBorder = this.border / 2;
    this.borderSpheres = [];

    // top left, right
    let borderSphere = new Ball(this.borderSpheres.length, this.pocketRadius / 2, halfBorder + this.pocketRadius * 1.5, halfBorder, 0, 0, this.ballMass, this.colours.border, false, false, false, false);
    this.borderSpheres.push(borderSphere);

    // top left, bottom
    borderSphere = new Ball(this.borderSpheres.length, this.pocketRadius / 2, halfBorder, halfBorder + this.pocketRadius * 1.5, 0, 0, this.ballMass, this.colours.border, false, false, false, false);
    this.borderSpheres.push(borderSphere);

    // top right, left
    borderSphere = new Ball(this.borderSpheres.length, this.pocketRadius / 2, ( this.width + this.border ) - ( halfBorder + this.pocketRadius * 1.5 ), halfBorder, 0, 0, this.ballMass, this.colours.border, false, false, false, false);
    this.borderSpheres.push(borderSphere);

    // top right, bottom
    borderSphere = new Ball(this.borderSpheres.length, this.pocketRadius / 2, ( this.width + halfBorder ), ( halfBorder + this.pocketRadius * 1.5 ), 0, 0, this.ballMass, this.colours.border, false, false, false, false);
    this.borderSpheres.push(borderSphere);
    
    // bottom left, top
    borderSphere = new Ball(this.borderSpheres.length, this.pocketRadius / 2, halfBorder, ( this.height + this.border ) - ( halfBorder + this.pocketRadius * 1.5 ), 0, 0, this.ballMass, this.colours.border, false, false, false, false);
    this.borderSpheres.push(borderSphere);

    // bottom left, bottom
    borderSphere = new Ball(this.borderSpheres.length, this.pocketRadius / 2, ( halfBorder + this.pocketRadius * 1.5 ), ( this.height + halfBorder ), 0, 0, this.ballMass, this.colours.border, false, false, false, false);
    this.borderSpheres.push(borderSphere);

    // bottom right, top
    borderSphere = new Ball(this.borderSpheres.length, this.pocketRadius / 2, ( this.width + halfBorder ), ( this.height + this.border ) - ( halfBorder + this.pocketRadius * 1.5 ), 0, 0, this.ballMass, this.colours.border, false, false, false, false);
    this.borderSpheres.push(borderSphere);

    // bottom right, bottom
    borderSphere = new Ball(this.borderSpheres.length, this.pocketRadius / 2, ( this.width + this.border ) - ( halfBorder + this.pocketRadius * 1.5 ), ( this.height + halfBorder ), 0, 0, this.ballMass, this.colours.border, false, false, false, false);
    this.borderSpheres.push(borderSphere);

    // top mid, left
    borderSphere = new Ball(this.borderSpheres.length, this.pocketRadius / 2, ( this.width + this.border ) / 2 - ( this.pocketRadius * 1.5 ), halfBorder, 0, 0, this.ballMass, this.colours.border, false, false, false, false);
    this.borderSpheres.push(borderSphere);

    // top mid, right
    borderSphere = new Ball(this.borderSpheres.length, this.pocketRadius / 2, ( this.width + this.border ) / 2 + ( this.pocketRadius * 1.5 ), halfBorder, 0, 0, this.ballMass, this.colours.border, false, false, false, false);
    this.borderSpheres.push(borderSphere);

    // bottom mid, left
    borderSphere = new Ball(this.borderSpheres.length, this.pocketRadius / 2, ( this.width + this.border ) / 2 - ( this.pocketRadius * 1.5 ), ( this.height + halfBorder ), 0, 0, this.ballMass, this.colours.border, false, false, false, false);
    this.borderSpheres.push(borderSphere);

    // bottom mid, right
    borderSphere = new Ball(this.borderSpheres.length, this.pocketRadius / 2, ( this.width + this.border ) / 2 + ( this.pocketRadius * 1.5 ), ( this.height + halfBorder ), 0, 0, this.ballMass, this.colours.border, false, false, false, false);
    this.borderSpheres.push(borderSphere);
  }

  Toggle()
  {
    if(this.iterator === null || this.iterator === undefined)
    {
      this.images[0].src = "./pause.svg";
      this.Iterate();
    }
    else
    {
      this.images[0].src = "./play.svg";
      this.Pause();
    }
  }

  Iterate()
  {
    this.iterator = setInterval(() =>
    {
      this.Update();
    },
    8);
  }

  Pause()
  {
    if(this.iterator !== null) clearInterval(this.iterator);
    this.iterator = null;
  }

  Update()
  {
    if(this.power && this.powerCharge < this.powerMax)
    {
      if(this.powerCharge < this.playerMinRange) this.powerCharge += this.gain * this.lowRate;
      else if(this.powerCharge > this.playerMinRange && this.powerCharge < this.playerMidRange) this.powerCharge += this.gain * this.midRate;
      else if(this.powerCharge > this.playerMidRange && this.powerCharge < this.playerMaxRange) this.powerCharge += this.gain * this.highRate;
    }
    for(let i = 0; i < this.balls.length; i++) this.MovePosition(this.balls[i]);
    this.DetectCollisions();
    this.DetectEdgeCollisions();
    if(this.cueBall !== null) this.Draw(this.cueBall);
    if(this.shotEnded === 1) this.EndShot();
  }

  MovePosition(Ball: Ball)
  {
    Ball.vx *= Ball.friction;
    Ball.vy *= Ball.friction;
    Ball.x += Ball.vx;
    Ball.y += Ball.vy;
  }

  DetectCollisions()
  {
    let obj1, obj2;
    for(let i = 0; i < this.balls.length; i++)
    {
      obj1 = this.balls[i];

      let pocketed = false;
      for(let j = 0; j < this.pockets.length; j++)
      {
        obj2 = this.pockets[j];
        let distance = Math.sqrt( ( obj2.x - obj1.x ) * ( obj2.x - obj1.x ) + ( obj2.y - obj1.y ) * ( obj2.y - obj1.y ) );
        if(distance < obj2.radius * 1.25)
        {
          pocketed = true;
          obj1.pocketed++;
          obj1.radius = 0;
          obj1.mass = 0;
          obj1.vx = 0;
          obj1.vy = 0;

           // assign colours if not yet assigned
          if(this.players[this.turn].colour === null || this.players[this.turn].colour === undefined)
          {
            for(let i = 0; i < this.players.length; i++)
            {
              if(i === this.turn)
              {
                this.players[i].colour = obj1.colour;
                if(obj1.colour.fillStyle === "rgba("+this.colours.red.r+","+this.colours.red.g+","+this.colours.red.b+", 1)") this.players[i].colName = "Red";
                if(obj1.colour.fillStyle === "rgba("+this.colours.blue.r+","+this.colours.blue.g+","+this.colours.blue.b+", 1)") this.players[i].colName = "Blue";
              }
              else
              {
                if(obj1.colour.fillStyle === "rgba("+this.colours.red.r+","+this.colours.red.g+","+this.colours.red.b+", 1)")
                {
                  this.players[i].colour = new Colour(this.colours.blue.r, this.colours.blue.g, this.colours.blue.b);
                  this.players[i].colName = "Blue";
                }
                if(obj1.colour.fillStyle === "rgba("+this.colours.blue.r +","+this.colours.blue.g +","+this.colours.blue.b +", 1)")
                {
                  this.players[i].colour = new Colour(this.colours.red.r, this.colours.red.g, this.colours.red.b);
                  this.players[i].colName = "Red";
                }
              }
            }
          }
          break;
        }
      }

      if(pocketed) continue;

      let impact = false;
      for(let j = 0; j < this.borders.length; j++)
      {
        obj2 = this.borders[j];
        if(this.RectCircleColliding(obj1, obj2))
        {
          impact = true;
          if(obj1.x - obj1.radius < obj2.left)
          {
            obj1.vx = -Math.abs(obj1.vx) * this.restitution;
            obj1.x = obj2.left - obj1.radius;
          }
          else if(obj1.x + obj1.radius > obj2.right)
          {
            obj1.vx = Math.abs(obj1.vx) * this.restitution;
            obj1.x = obj2.right + obj1.radius;
          }
          else if(obj1.y - obj1.radius < obj2.top)
          {
            obj1.vy = -Math.abs(obj1.vy) * this.restitution;
            obj1.y = obj2.top - obj1.radius;
          }
          else if(obj1.y + obj1.radius > obj2.bot)
          {
            obj1.vy = Math.abs(obj1.vy) * this.restitution;
            obj1.y = obj2.bot + obj1.radius;
          }
        }
      }
      if(impact) continue;

      impact = false;
      for(let j = 0; j < this.borderSpheres.length; j++)
      {
        obj2 = this.borderSpheres[j];
        obj2.vx = -obj1.vx;
        obj2.vy = -obj1.vy;
        if(this.CircleIntersect(obj1.x, obj1.y, obj1.radius, obj2.x, obj2.y, obj2.radius))
        {
          impact = true;
          obj1.isColliding = true;
          obj2.isColliding = true;
          let vCollision = {x: obj2.x - obj1.x, y: obj2.y - obj1.y};
          let distance = Math.sqrt( ( obj2.x - obj1.x ) * ( obj2.x - obj1.x ) + ( obj2.y - obj1.y ) * ( obj2.y - obj1.y ) );
          let vCollisionNorm = {x: vCollision.x / distance, y: vCollision.y / distance};
          let vRelativeVelocity = {x: obj1.vx - obj2.vx, y: obj1.vy - obj2.vy};
          let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
          speed *= Math.min(obj1.restitution, obj2.restitution);
          if(speed < 0)
          {
            break;
          }
          let impulse = 2 * speed / (obj1.mass + obj2.mass);
          obj1.vx -= (impulse * obj2.mass * vCollisionNorm.x);
          obj1.vy -= (impulse * obj2.mass * vCollisionNorm.y);
          obj2.vx += (impulse * obj1.mass * vCollisionNorm.x);
          obj2.vy += (impulse * obj1.mass * vCollisionNorm.y);
        }
      }
      if(impact) continue;

      impact = false;
      for(let j = 0; j < this.balls.length; j++)
      {
        if(j == i) continue;
        obj2 = this.balls[j];
        if(this.CircleIntersect(obj1.x, obj1.y, obj1.radius, obj2.x, obj2.y, obj2.radius))
        {
          impact = true;
          obj1.isColliding = true;
          obj2.isColliding = true;
          let vCollision = {x: obj2.x - obj1.x, y: obj2.y - obj1.y};
          let distance = Math.sqrt( ( obj2.x - obj1.x ) * ( obj2.x - obj1.x ) + ( obj2.y - obj1.y ) * ( obj2.y - obj1.y ) );
          let vCollisionNorm = {x: vCollision.x / distance, y: vCollision.y / distance};
          let vRelativeVelocity = {x: obj1.vx - obj2.vx, y: obj1.vy - obj2.vy};
          let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
          speed *= Math.min(obj1.restitution, obj2.restitution);
          if(speed < 0)
          {
            break;
          }
          let impulse = 2 * speed / (obj1.mass + obj2.mass);
          obj1.vx -= (impulse * obj2.mass * vCollisionNorm.x);
          obj1.vy -= (impulse * obj2.mass * vCollisionNorm.y);
          obj2.vx += (impulse * obj1.mass * vCollisionNorm.x);
          obj2.vy += (impulse * obj1.mass * vCollisionNorm.y);
        }
        if(impact) break;
        impact = false;
      }
    }
  }

  CircleIntersect(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number)
  {
    let squareDistance = ( x1 - x2 ) * ( x1 - x2 ) + ( y1 - y2 ) * ( y1 - y2 );
    return squareDistance <= ( ( r1 + r2 ) * ( r1 + r2 ) );
  }

  RectCircleColliding(circle: Ball, rect: Border)
  {
    let distX = Math.abs(circle.x - rect.x - rect.width / 2);
    let distY = Math.abs(circle.y - rect.y - rect.height / 2);

    if (distX > (rect.width / 2 + circle.radius)) { return false; }
    if (distY > (rect.height / 2 + circle.radius)) { return false; }

    if (distX <= (rect.width / 2)) { return true; } 
    if (distY <= (rect.height / 2)) { return true; }

    let dx = distX - rect.width / 2;
    let dy = distY - rect.height / 2;
    return (dx * dx + dy * dy <= ( circle.radius * circle.radius ) );
  }

  DetectEdgeCollisions()
  {
    let ball;
    for(let i = 0; i < this.balls.length; i++)
    {
      ball = this.balls[i];
      if(ball.x < ball.radius)
      {
        ball.vx = Math.abs(ball.vx) * this.restitution;
        ball.x = ball.radius;
      }
      else if(ball.x > ( this.width + this.border ) - ball.radius)
      {
        ball.vx = -Math.abs(ball.vx) * this.restitution;
        ball.x = ( this.width + this.border ) - ball.radius;
      }
      if(ball.y < ball.radius)
      {
        ball.vy = Math.abs(ball.vy) * this.restitution;
        ball.y = ball.radius;
      }
      else if(ball.y > ( this.height + this.border ) - ball.radius)
      {
        ball.vy = -Math.abs(ball.vy) * this.restitution;
        ball.y = ( this.height + this.border ) - ball.radius;
      }
    }
  }

  Draw(cueBall: Ball)
  {
    let halfBorder = this.border / 2;
    c.clearRect(0, 0, this.width + this.border, this.height + this.border);

    // background
    c.fillStyle = "rgba(" + this.colours.border.r + "," + this.colours.border.g + "," + this.colours.border.b + ", 1)";
    c.fillRect(0, 0, this.width + this.border, this.height + this.border);

    // table
    c.fillStyle = "rgba(" + this.colours.table.r + "," + this.colours.table.g + "," + this.colours.table.b + ", 1)";
    c.fillRect(0 + halfBorder, 0 + halfBorder, this.width, this.height);

    // quarter lines
    c.fillStyle = "rgba(" + this.colours.quarterLines.r + "," + this.colours.quarterLines.g + "," + this.colours.quarterLines.b + ", 1)";
    c.fillRect( this.width/4 + halfBorder/2, halfBorder, 1, this.height);
    c.fillRect( ( this.width/4 + halfBorder/2 ) * 3, halfBorder, 1, this.height);

    // borders
    c.fillStyle = "rgba(" + this.colours.border.r + "," + this.colours.border.g + "," + this.colours.border.b + ", 1)";
    for(let i = 0; i < this.borders.length; i++)
    {
      c.fillRect( this.borders[i].x, this.borders[i].y, this.borders[i].width, this.borders[i].height);
    }

    // border Spheres
    c.fillStyle = "rgba(" + this.colours.border.r + "," + this.colours.border.g + "," + this.colours.border.b + ", 1)";
    for(let i = 0; i < this.borderSpheres.length; i++)
    {
      c.beginPath();
      c.arc(this.borderSpheres[i].x, this.borderSpheres[i].y, this.borderSpheres[i].radius, 0, 2 * Math.PI);
      c.fill();
    }

    // pockets
    c.fillStyle = "rgba(" + this.colours.pockets.r + "," + this.colours.pockets.g + "," + this.colours.pockets.b + ", 1)";
    for(let i = 0; i < this.pockets.length; i++)
    {
      c.beginPath();
      c.arc(this.pockets[i].x, this.pockets[i].y, this.pockets[i].radius, 0, 2 * Math.PI);
      c.fill();
    }

    // buttons
    let len = this.buttons.length;
    let gap = 40;
    let offset = halfBorder + this.pocketRadius * 1.5;
    let h = halfBorder - this.buttons[0].height / 1.25;
    for(let i = 0; i < len; i++)
    {
      if(this.buttons[i].src === undefined || this.buttons[i].src === null || this.images[i] === null || this.images[i] === undefined) continue;
      c.drawImage(this.images[i], offset, h, this.buttons[i].width, this.buttons[i].height);
      this.buttons[i].Borders(offset, h);
      offset += gap;
    }

    c.fillStyle = "white";
    c.font = "16px Arial";
    // top left text box
    // c.fillText("Box 1", ( halfBorder + this.pocketRadius * 1.5 ), halfBorder);
    // top right text box
    // c.fillText("Power: " + this.powerCharge.toFixed(2), (this.width + this.border ) / 2 + this.pocketRadius * 1.5, halfBorder);
    // bot left text box
    let text = "Player " + (this.players[0].index + 1);
    c.beginPath();
    if(this.turn === 0) c.fillStyle = "rgba(" + this.colours.green.r + "," + this.colours.green.g + "," + this.colours.green.b + ", 1)"; 
    else c.fillStyle = "rgba(" + this.colours.border.r + "," + this.colours.border.g + "," + this.colours.border.b + ", 1)"; 
    c.arc( ( halfBorder + this.pocketRadius * 1.5 ) + 5, ( ( this.height + halfBorder ) + this.pocketRadius / 4), 10, 0, 2 * Math.PI);
    c.fill();
    c.fillStyle = "white";
    c.fillText(text, ( halfBorder + this.pocketRadius * 1.5 ) + 20, ( this.height + halfBorder ) + this.pocketRadius / 2);
    // bot right text box
    text = "Player " + (this.players[1].index + 1);
    if(this.turn === 1) c.fillStyle = "rgba(" + this.colours.green.r + "," + this.colours.green.g + "," + this.colours.green.b + ", 1)"; 
    else c.fillStyle = "rgba(" + this.colours.border.r + "," + this.colours.border.g + "," + this.colours.border.b + ", 1)"; 
    c.beginPath();
    c.arc( ( ( this.width + this.border ) / 2 + this.pocketRadius * 1.5 ) + 5, ( ( this.height + halfBorder ) + this.pocketRadius / 4), 10, 0, 2 * Math.PI);
    c.fill();
    c.fillStyle = "white";
    c.fillText(text, ( this.width + this.border ) / 2 + this.pocketRadius * 1.5 + 20, ( this.height + halfBorder ) + this.pocketRadius / 2);

    // score
    
    if(this.players[0].colour !== null && this.players[0].colour !== undefined) c.fillStyle = this.players[0].colour.fillStyle;
    else c.fillStyle = "white";
    for(let i = 0; i < this.players[0].score; i++)
    {
      c.beginPath();
      c.arc( ( halfBorder + this.pocketRadius * 3 ) + (i * 25), ( this.height + halfBorder ) + this.pocketRadius * 1.5, 10, 0, 2 * Math.PI);
      c.fill();
    }

    if(this.players[1].colour !== null && this.players[1].colour !== undefined) c.fillStyle = this.players[1].colour.fillStyle;
    else c.fillStyle = "white";
    for(let i = 0; i < this.players[1].score; i++)
    {
      c.beginPath();
      c.arc( ( this.width + this.border ) / 2 + this.pocketRadius * 3 + (i * 25), ( this.height + halfBorder ) + this.pocketRadius * 1.5, 10, 0, 2 * Math.PI);
      c.fill();
    }

    // ball & movement check
    let cueX, cueY;
    let still = true;
    for(let i = 0; i < this.balls.length; i++)
    {
      if(this.balls[i].radius === 0) continue;
      if(this.balls[i].vx > 0.01 
      || this.balls[i].vy > 0.01
      || this.balls[i].vx < -0.01
      || this.balls[i].vy < -0.01 && still)
      { 
        still = false; 
      }
      if(c.fillStyle != this.balls[i].colour.fillStyle) c.fillStyle = this.balls[i].colour.fillStyle;
      c.beginPath();
      c.arc(this.balls[i].x, this.balls[i].y, this.balls[i].radius, 0, 2 * Math.PI);
      c.fill();
      if(this.balls[i].cue)
      {
        cueX = this.balls[i].x;
        cueY = this.balls[i].y;
      }
    }
    if(still)
    {
      if(this.shotEnded === 0) this.shotEnded = 1;
      this.still = true;
    }
    else
    {
      this.still = false;
    }

    if(this.power)
    {
      if(this.powerCharge < this.playerMinRange) c.fillStyle = "rgba(" + this.colours.minRange.r + "," + this.colours.minRange.g + "," + this.colours.minRange.b + ", 0.5)";
      if(this.powerCharge > this.playerMinRange && this.powerCharge < this.playerMidRange) c.fillStyle = "rgba(" + this.colours.midPower.r + "," + this.colours.midPower.g + "," + this.colours.midPower.b + ", 0.5)";
      if(this.powerCharge > this.playerMidRange) c.fillStyle = "rgba(" + this.colours.maxPower.r + "," + this.colours.maxPower.g + "," + this.colours.maxPower.b + ", 0.5)";
      c.beginPath();
      c.arc(cueX, cueY, this.powerCharge, 0, 2 * Math.PI);
      c.fill();
    }

    // cue range borders
    if(this.still)
    {
      c.lineWidth = 2 * this.scale;
      // min range - green
      c.strokeStyle = "rgba(" + this.colours.minRange.r + "," + this.colours.minRange.g + "," + this.colours.minRange.b + ", 0.5)";
      c.beginPath();
      c.arc(cueX, cueY, this.playerMinRange, 0, 2 * Math.PI);
      c.stroke();
      // mid range - orange
      c.strokeStyle = "rgba(" + this.colours.midPower.r + "," + this.colours.midPower.g + "," + this.colours.midPower.b + ", 0.5)";
      c.beginPath();
      c.arc(cueX, cueY, this.playerMidRange, 0, 2 * Math.PI);
      c.stroke();
      // max range - red
      c.strokeStyle = "rgba(" + this.colours.maxPower.r + "," + this.colours.maxPower.g + "," + this.colours.maxPower.b + ", 0.5)";
      c.beginPath();
      c.arc(cueX, cueY, this.playerMaxRange, 0, 2 * Math.PI);
      c.stroke();
      // cue stick
      // if(this.players[this.turn].colour.fillStyle !== '') c.strokeStyle = this.players[this.turn].colour.fillStyle;
      // else c.strokeStyle = "rgba(" + this.colours.cueStick.r + "," + this.colours.cueStick.g + "," + this.colours.cueStick.b + ", 1)";
      c.strokeStyle = "rgba(" + this.colours.cueStick.r + "," + this.colours.cueStick.g + "," + this.colours.cueStick.b + ", 1)";
      c.lineWidth = 4 * this.scale;
  
      let vCollision = {x: this.playerX - cueBall.x, y: this.playerY - cueBall.y};
      let distance = Math.sqrt( (this.playerX - cueBall.x) * (this.playerX - cueBall.x) + (this.playerY - cueBall.y) * (this.playerY - cueBall.y) );
      let vCollisionNorm = {x: vCollision.x / distance, y: vCollision.y / distance};
  
      c.beginPath();
      c.moveTo(cueBall.x + vCollisionNorm.x * ( this.playerMinRange + c.lineWidth / 2 ), cueBall.y + vCollisionNorm.y * ( this.playerMinRange + c.lineWidth / 2 ));
      c.lineTo(cueBall.x + vCollisionNorm.x * ( this.playerMaxRange - c.lineWidth / 2 ), cueBall.y + vCollisionNorm.y * ( this.playerMaxRange - c.lineWidth / 2 ));
      c.stroke();
  
      // cue direction
      c.lineWidth = 1 * this.scale;
      c.strokeStyle = "rgba(" + this.colours.quarterLines.r + "," + this.colours.quarterLines.g + "," + this.colours.quarterLines.b + ", 1)";
      c.beginPath();
      c.moveTo(cueBall.x + -vCollisionNorm.x * ( this.playerMinRange + c.lineWidth / 2 ), cueBall.y + -vCollisionNorm.y * ( this.playerMinRange + c.lineWidth / 2 ));
      c.lineTo(cueBall.x + -vCollisionNorm.x * ( this.guideRange - c.lineWidth / 2 ), cueBall.y + -vCollisionNorm.y * ( this.guideRange - c.lineWidth / 2 ));
      c.stroke();
    }
  }

  EndShot()
  {
    let redPocketed = [], bluePocketed = [], cuePocketed = [], eightPocketed = [];
    for(let i = 0; i < this.balls.length; i++)
    {
      if(this.balls[i].pocketed > 0)
      {
        if(this.balls[i].red) redPocketed.push(i);
        if(this.balls[i].blue) bluePocketed.push(i);
        if(this.balls[i].cue) cuePocketed.push(i);
        if(this.balls[i].eight) eightPocketed.push(i);
        this.balls[i].pocketed = 0;
      }
    }

    if(this.players[this.turn].colName === "Red")
    {
      if(redPocketed.length > 0)
      {
        this.switchTurn++;
        for(let i = 0; i < redPocketed.length; i++)
        {
          this.players[this.turn].score++;
          this.balls.splice(redPocketed[i], 1);
        }
      }
      if(bluePocketed.length > 0)
      {
        for(let i = 0; i < bluePocketed.length; i++) this.balls.splice(bluePocketed[i], 1);
      }
      if(cuePocketed.length > 0)
      {
        for(let i = 0; i < cuePocketed.length; i++) this.balls.splice(cuePocketed[i], 1);
      }
      if(eightPocketed.length > 0)
      {
        for(let i = 0; i < eightPocketed.length; i++) this.balls.splice(eightPocketed[i], 1);
      }
    }
    if(this.players[this.turn].colName === "Blue")
    {
      if(redPocketed.length > 0)
      {
        for(let i = 0; i < redPocketed.length; i++) this.balls.splice(redPocketed[i], 1);
      }
      if(bluePocketed.length > 0)
      {
        this.switchTurn++;
        for(let i = 0; i < bluePocketed.length; i++)
        {
          this.players[this.turn].score++;
          this.balls.splice(bluePocketed[i], 1);
        }
      }
      if(cuePocketed.length > 0)
      {
        for(let i = 0; i < cuePocketed.length; i++) this.balls.splice(cuePocketed[i], 1);
      }
      if(eightPocketed.length > 0)
      {
        for(let i = 0; i < eightPocketed.length; i++) this.balls.splice(eightPocketed[i], 1);
      }
    }
    if(this.switchTurn === 0)
    {
      this.turn++;
      if(this.turn >= this.players.length) this.turn = 0;
    }
    this.switchTurn = 0;
    this.shotEnded = 2;
  }

  CheckButton(x: number, y: number)
  {
    for(let i = 0; i < this.buttons.length; i++)
    {
      let b = this.buttons[i];
      if(x < b.right && x > b.left && y > b.top && y < b.bot)
      {
        b.function();
        return true;
      }
    }
    return false;
  }

  AddPower(cueBall: Ball, x: number, y: number)
  {
    if(!this.still) return;
    let distance = Math.sqrt((cueBall.x - x) * (cueBall.x - x) + (cueBall.y - y) * (cueBall.y - y));
    if(distance <= this.playerMaxRange) this.power = true;
  }

  CancelHit()
  {
    if(!this.still) return;
    this.power = false;
    this.powerCharge = 0.1;
  }

  MouseMove(x: number, y: number)
  {
    for(let j = 0; j < this.balls.length; j++)
    {
      if(this.balls[j].cue === false) continue;
      let object = this.balls[j];
      let distance = Math.sqrt((object.x-x)*(object.x-x) + (object.y-y)*(object.y-y));
      if(distance > this.playerMinRange && distance <= this.playerMaxRange)
      {
        this.playerX = x;
        this.playerY = y;
      }
    }
  }

  Release(x: number, y: number)
  {
    if(!this.still || this.powerCharge < 0.1) return;
    for(let j = 0; j < this.balls.length; j++)
    {
      if(this.balls[j].cue === false) continue;
      let object = this.balls[j];
      let playerObject = { vx:-object.vx, vy:-object.vy, mass:object.mass };
      let distance = Math.sqrt((object.x - x) * (object.x - x) + (object.y - y) * (object.y - y));
      if(distance <= this.playerMaxRange)
      {
        let vCollision = {x: object.x - x, y: object.y - y};
        let vCollisionNorm = {x: vCollision.x / distance, y: vCollision.y / distance};
        let vRelativeVelocity = {x: object.vx - playerObject.vx, y: object.vy - playerObject.vy};
        // let speed = vCollisionNorm.x + vCollisionNorm.y;
        let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
        let add = ( ( 1 / this.powerRatio ) * this.powerCharge / this.reductionFactor );
        if(this.powerCharge < 1) add = this.powerCharge;
        let impulse = ( ( 2 * speed )  + add / ( object.mass + playerObject.mass ) );
        speed *= object.restitution;
        object.vx += (impulse * playerObject.mass * vCollisionNorm.x);
        object.vy += (impulse * playerObject.mass * vCollisionNorm.y);
        this.powerCharge = 0.1;
        this.power = false;
        this.shotEnded = 0;
        return;
      }
    }
  }

  TouchStart(x: number, y: number)
  {
    if( x < ( screen.width / 2 ) )
    {
      this.startPos.x = x;
      this.startPos.y = y;
      this.startPos.mode = "L";
    }
    else
    {
      this.startPos.x = x;
      this.startPos.y = y;
      this.startPos.mode = "R";
    }
  }

  TouchEnd(x: number, y: number)
  {
    this.endPos.x = x;
    this.endPos.y = y;
    if(this.startPos.mode === "L")
    {

    }
  }
}

const gameDiv: HTMLElement = <HTMLElement>document.getElementById("gameDiv");
const gameCanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("gameCanvas");
const c: CanvasRenderingContext2D = <CanvasRenderingContext2D>gameCanvas.getContext("2d");
let game: Game|null = null;

function Main()
{
  if(game !== null)
  {
    game.Pause();
    game = null;
  }
  let scale = 1;
  game = new Game(scale);
  game.Start();
}

gameCanvas.onmousemove = function(event)
{
  event.preventDefault();
  let rect = gameCanvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  if(game != null) game.MouseMove(x, y);
};

gameCanvas.onmousedown = function(event)
{
  if(game !== null)
  {
    if(event.button === 0)
    {
      event.preventDefault();
      let rect = gameCanvas.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;
      if(!game.CheckButton(x, y))
      {
        if(game.cueBall !== null) game.AddPower(game.cueBall, x, y);
      }
    }
    if(event.button === 2)
    {
      event.preventDefault();
      event.stopPropagation();
      game.CancelHit();
    }
  }
};

gameCanvas.onmouseup = function(event)
{
  if(game !== null)
  {
    if(event.button === 0)
    {
      event.preventDefault();
      let rect = gameCanvas.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;
      game.Release(x, y);
    }
    if(event.button === 2)
    {
      event.preventDefault();
      event.stopPropagation();
      game.CancelHit();
    }
  }
};

document.ontouchstart = function(event)
{
  if(event.touches !== undefined)
  {
    let touch = event.touches[0] || event.changedTouches[0];
    if(game != null) game.TouchStart(touch.clientX, touch.clientY);
  }
};

document.ontouchend = function(event)
{
  if(event.touches !== undefined)
  {
    let touch = event.touches[0] || event.changedTouches[0];
    if(game != null) game.TouchEnd(touch.screenX, touch.screenY);
  }
};

document.onkeydown = function(event)
{
  if(event.key === "s" && game !== null)
  {
    game.players[0].score++;
    game.players[1].score++;
  }
}

document.addEventListener("DOMContentLoaded", Main);