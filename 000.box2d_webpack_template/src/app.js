import './style.scss'
import * as Box2D from 'box2dweb-commonjs'

const canvasWidth = 800
const canvasHeight = 600

const canvas = document.getElementById('canvas')
canvas.width = canvasWidth
canvas.height = canvasHeight

const context = canvas.getContext('2d')
const WORLDSCALE = 30

const world = new Box2D.b2World(
	new Box2D.b2Vec2(0, 9.8),
	true
)

const fixDef = new Box2D.b2FixtureDef
fixDef.density = 1.0
fixDef.friction = 0.5
fixDef.restitution = 0.2

const bodyDef = new Box2D.b2BodyDef
bodyDef.type = Box2D.b2Body.b2_staticBody
fixDef.shape = new Box2D.b2PolygonShape

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
