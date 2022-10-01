import {readFile, writeFile} from 'fs/promises'
import { hashPassword } from '../../services/PasswordHelper.js';

export class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
      }

      async getDb(){
        const db = await readFile('models/User/user.json', 'utf8')
        return JSON.parse(db)
    }

    async save(){
        const db = await this.getDb();
        const id = db.length + 1;
        const password = await hashPassword(this.password)
        const newItem = {createdAt: new Date(), name: this.name, email: this.email, password, id}
        db.push(newItem)
        await writeFile('models/User/user.json', JSON.stringify(db), 'utf8')
        return newItem;
    }
}

