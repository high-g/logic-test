
var b2Vec2 = Box2D.Common.Math.b2Vec2,
b2BodyDef = Box2D.Dynamics.b2BodyDef,
b2Body = Box2D.Dynamics.b2Body,
b2FixtureDef = Box2D.Dynamics.b2FixtureDef,
b2Fixture = Box2D.Dynamics.b2Fixture,
b2World = Box2D.Dynamics.b2World,
b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,
b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

var world = new b2World(new b2Vec2(0, 10), true);

var bodyDef = new b2BodyDef;
bodyDef.type = b2Body.b2_dynamicBody;
bodyDef.position.Set(4, 8);
bodyDef.userData = 'obj';

var fixDef = new b2FixtureDef;
fixDef.density = 10.0;
fixDef.friction = .9;
fixDef.restitution = .4;
fixDef.shape = new b2CircleShape(1);

var wheel = world.CreateBody(bodyDef);
wheel.CreateFixture(fixDef);
fixDef.shape.m_p.Set(0, 1);
wheel.CreateFixture(fixDef);

wheel.SetAngularVelocity(Math.PI * 2);
wheel.SetPositionAndAngle(new b2Vec2(15, -3), -20 * (Math.PI / 180));

bodyDef = new b2BodyDef;
bodyDef.type = b2Body.b2_staticBody;
bodyDef.position.Set(10, 12);

var fd = new b2FixtureDef;
fd.shape = new b2PolygonShape;

var holder = world.CreateBody(bodyDef);

fd.shape.SetAsBox(10, 1);
holder.CreateFixture(fd);
fd.shape.SetAsOrientedBox(1, 10, new b2Vec2(5, 0), Math.PI/6);
holder.CreateFixture(fd);

var debugDraw = new b2DebugDraw();
debugDraw.SetSprite(document.getElementById('canvas').getContext('2d'));
debugDraw.SetDrawScale(30);
debugDraw.SetFillAlpha(0.3);
debugDraw.SetLineThickness(1.0);
debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
world.SetDebugDraw(debugDraw);

function update() {
	world.Step(1/60, 10, 10);
	world.DrawDebugData();
	world.ClearForces();
	requestAnimationFrame(update);
}

update();
