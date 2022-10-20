import { readFile, writeFile } from 'fs/promises';
import { hashPassword } from '../../services/PasswordHelper.js';
const jwt = require('jsonwebtoken');
//@jwt authentication
const generateJwt = (id) => {
  jwt.sign({ id }, 'jwt_secret', { expiresIn: '1hr' });
};
export class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  async getDb() {
    const db = await readFile('models/User/user.json', 'utf8');
    return JSON.parse(db);
  }

  async save() {
    const db = await this.getDb();
    const id = db.length + 1;
    const password = await hashPassword(this.password);
    const newItem = {
      createdAt: new Date(),
      token: generateJwt(id),
      name: this.name,
      email: this.email,
      password,
      id,
    };
    db.push(newItem);
    await writeFile('models/User/user.json', JSON.stringify(db), 'utf8');
    return newItem;
  }
}
