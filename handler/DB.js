const db = require('better-sqlite3')('graphene.db');
db.prepare('CREATE TABLE IF NOT EXISTS `graphene` (id TEXT, value TEXT);').run()


function get(key) {
    const row = db.prepare('SELECT * FROM graphene WHERE id = ?').get(key);
    if(row !== undefined) return row.value;
    return undefined;
}
function set(key,value) {
    if(typeof value == 'string') {
        value = value
    }else if(typeof val == 'number') {
        value = `${value}`
    }else if(typeof val == 'object') {
        value = JSON.stringify(value)
    }else{
        value = `${value}`
    }
    if(get(key) !== undefined) {
        let z = db.prepare('UPDATE `graphene` SET `value` = ? WHERE `id` = ?')
        let y = z.run(value,key)
    }else{
        let z = db.prepare('INSERT INTO `graphene` (id,value) VALUES (?,?)')
        let y = z.run(key,value);
    }
    return true;
}

module.exports.get = get;
module.exports.set = set;
