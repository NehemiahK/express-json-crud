const {readFile, writeFile} = require('fs/promises')

async function getDb(){
    const db = await readFile('models/Todo/todo.json', 'utf8')
    return JSON.parse(db)
}

async function add(item){
    const db = await getDb();
    const id = db.items.length + 1;
    const newItem = {createdAt: new Date(), item, id}
    db.items.push(newItem)
    await writeFile('models/Todo/todo.json', JSON.stringify(db), 'utf8')
    return newItem;
}

module.exports = {add}