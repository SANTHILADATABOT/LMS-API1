const Model = require("../Model");

class AuthModel extends Model {
    getUserByEmail = async (table, email, pass, callback) => {
        console.log('table : ' + table + ' email : ' + email + ' pass : ' + pass);
        
        /*let sql = `SELECT * from ${table} WHERE email = "${email}" and password = "${pass}"`;
        console.log('sqL : ' + sql);
        this.db.query(sql, email, callback);*/

        findOne({
            where: {
              password: password,
              $or: [
                { username: {$eq: username },
                { email: {$eq: email }}
              ]
            }
    }
}

module.exports = AuthModel