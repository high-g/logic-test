var world = null

var meter = 100
var time_step = 1.0 / 6.0
var velocity_iterations = 1
var position_iterations = 1
var size_particle = 20
var size_dragble = 50

var windowW = window.innerWidth
var windowH = window.innerHeight

var stage
var _cjsDragBall
var _cjsParticles = []

var _b2ParticleSystem
var _b2DragBallFixture
var _b2MouseJoint
var _b2GroudBody

var init = function () {
  var gravity = new b2Vec2(0, 10)
  world = new b2World(gravity)

  _b2GroudBody = world.CreateBody(new b2BodyDef())

  createPhysicsWalls()
}


var createPhysicsWalls = function() {}
var createPhysicsParticles = function() {}
var createPhysicsBall = function() {}
var createCreatejsWorld = function() {}
var setupDragEvent = function() {}


init()