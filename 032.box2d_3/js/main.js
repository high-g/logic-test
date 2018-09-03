var b2Vec2 = Box2D.Common.Math.b2Vec2,
b2BodyDef = Box2D.Dynamics.b2BodyDef,
b2Body = Box2D.Dynamics.b2Body,
b2FixtureDef = Box2D.Dynamics.b2FixtureDef,
b2Fixture = Box2D.Dynamics.b2Fixture,
b2World = Box2D.Dynamics.b2World,
b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,
b2DebugDraw = Box2D.Dynamics.b2DebugDraw

var world, fixDef, bodyDef

var canvasWidth = 800
var canvasHeight = 600

var canvas = document.getElementById('canvas')
canvas.width = canvasWidth
canvas.height = canvasHeight

var init = function() {
	// 物理空間の作成 b2World(gravity, sleep)
	world = new b2World(
		new b2Vec2(0, 1000), // 重力 x軸方向に0, y軸方向に300の強さで重力がかかる
		true // 止まった物体の処理の停止
	)

	// 剛体（物体）定義
	bodyDef = new b2BodyDef

	// 剛体のプロパティ定義
	fixDef = new b2FixtureDef
	fixDef.density = 1.0
	fixDef.friction = 0.5
	fixDef.restitution = 0.2

	// create ground
	bodyDef.type = b2Body.b2_staticBody
	bodyDef.position.x = canvasWidth / 2
	bodyDef.position.y = canvasHeight - 15
	fixDef.shape = new b2PolygonShape
	fixDef.shape.SetAsBox(canvasWidth/2, 15)
	world.CreateBody(bodyDef).CreateFixture(fixDef)

	// create some objects
	bodyDef.type = b2Body.b2_dynamicBody
	for(var i=0; i<50; i++) {
		if(Math.random() > 0.5) {
			fixDef.shape = new b2PolygonShape
			fixDef.shape.SetAsBox(
				Math.random() * 30 + 3,
				Math.random() * 30 + 3,
			)
		} else {
			fixDef.shape = new b2CircleShape(
				Math.random() * 30 + 3
			)
		}
		bodyDef.position.x = Math.random() * canvasWidth
		bodyDef.position.y = Math.random() * 300
		world.CreateBody(bodyDef).CreateFixture(fixDef)
	}

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