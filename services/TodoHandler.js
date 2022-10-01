import { Router } from 'express'
import { add, find } from '../models/Todo/index.js'

async function addItem(req,res){
    const item = await add(req.body.item)
    res.send(item)
}

async function getItems(req,res){
    const items = await find();
    res.send(items)
}

export default Router()
    .post('/', addItem)
    .get('/', getItems)
