import './style.scss'
import * as Box2D from 'box2dweb-commonjs'


const canvasWidth = 800
const canvasHeight = 600

const canvas = document.getElementById('canvas')
canvas.width = canvasWidth
canvas.height = canvasHeight

const context = canvas.getContext('2d')

const WORLDSCALE = 30

// 世界
const world = new Box2D.b2World(
	new Box2D.b2Vec2(0, 9.8), // 重力 横0 縦9.8
	true // 止まったオブジェクトを計算対象から外す
)

// 入れ物定義
const fixDef = new Box2D.b2FixtureDef
fixDef.density = 1.0 // 密度
fixDef.friction = 0.5 // 摩擦係数
fixDef.restitution = 0.2 // 反発係数

// 物体宣言 - baseライン
const bodyDef = new Box2D.b2BodyDef
bodyDef.type = Box2D.b2Body.b2_staticBody
fixDef.shape = new Box2D.b2PolygonShape

// 縦1pxのライン
fixDef.shape.SetAsBox(canvasWidth / WORLDSCALE, 1 / WORLDSCALE) // width, height
bodyDef.position.Set(0, canvasHeight / WORLDSCALE - 1)
world.CreateBody(bodyDef).CreateFixture(fixDef)

// ボール
bodyDef.type = Box2D.b2Body.b2_dynamicBody // 動く物体
fixDef.shape = new Box2D.b2CircleShape(30 / WORLDSCALE)
bodyDef.position.x = 300 / WORLDSCALE
bodyDef.position.y = 0 / WORLDSCALE
world.CreateBody(bodyDef).CreateFixture(fixDef)

// デバッグ表示
const debugDraw = new Box2D.b2DebugDraw()
debugDraw.SetSprite(context)
debugDraw.SetDrawScale(WORLDSCALE)
debugDraw.SetFillAlpha(0.5)
debugDraw.SetFlags(Box2D.b2DebugDraw.e_shapeBit | Box2D.b2DebugDraw.e_joinBit)
world.SetDebugDraw(debugDraw)

const update = () => {
	world.Step(1/ 60, 10, 10);
	world.DrawDebugData()
	world.ClearForces()
	requestAnimationFrame(update)
}

update()
