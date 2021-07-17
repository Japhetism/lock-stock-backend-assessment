export{};

const sql = require('./db');

const University = function(this: any, university: { university_id: any;  university_name: any; country_id: any}) {
    this.unviversity_id = university.university_id;
    this.university_name = university.university_name;
    this.country_id = university.country_id;
};

University.find = (result: any) => {
    const statement = `SELECT * FROM University 
        INNER JOIN 
            Country ON Country.country_id = University.country_id
    `
    sql.query(statement, (err: any, res: any) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("universities: ", res);
        result(null, res);
    })
};

module.exports = University;