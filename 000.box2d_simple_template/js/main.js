var b2Vec2 = Box2D.Common.Math.b2Vec2,
b2BodyDef = Box2D.Dynamics.b2BodyDef,
b2Body = Box2D.Dynamics.b2Body,
b2FixtureDef = Box2D.Dynamics.b2FixtureDef,
b2Fixture = Box2D.Dynamics.b2Fixture,
b2World = Box2D.Dynamics.b2World,
b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,
b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

var init = function() {
	world = new b2World(new b2Vec2(0, 1000), true)

	// 剛体（物体）定義
	bodyDef = new b2BodyDef

	// 剛体のプロパティ定義
	fixDef = new b2FixtureDef
	fixDef.density = 1.0
	fixDef.friction = 0.5
	fixDef.restitution = 0.2



	// setup debug draw
	debugDraw = new b2DebugDraw()
	debugDraw.SetSprite(canvas.getContext('2d'))
	debugDraw.SetFillAlpha(0.3)
	debugDraw.SetLineThickness(1.0)
	debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit)
	world.SetDebugDraw(debugDraw)
	
	update()
};

var update = function() {
	world.Step(1/60, 10, 10)
	world.DrawDebugData()
	world.ClearForces()
	requestAnimationFrame(update);
};

init();
