export{};

const sql = require('./db');

const University = function(this: any, university: { university_id: any;  university_name: any; country_id: any}) {
    this.unviversity_id = university.university_id;
    this.university_name = university.university_name;
    this.country_id = university.country_id;
};

University.find = (result: any) => {
    const statement = `SELECT uni.university_id, uni.university_name, uni.country_name, ROUND(AVG(annual_tuition), 2) AS estimated_tuition, COUNT(*) AS number_of_courses FROM 
        (
            SELECT University.university_id, university_name, country_name, University.country_id, course_id, course_name, annual_tuition, level_id FROM University 
            INNER JOIN Country ON Country.country_id  = University.country_id
            INNER JOIN Course ON Course.university_id = University.university_id
        ) AS uni
        GROUP BY uni.university_id
        `
    sql.query(statement, (err: any, res: any) => {
        if (err) {
            result(null, err);
            return;
        }

        result(null, res);
    })
};

module.exports = University;