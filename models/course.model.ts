export{};

const sql = require('./db');

const Course = function(this: any, course: { course_id: any; course_name: any; annual_tuition: any; university_id: any; level_id: any; }) {
   this.course_id = course.course_id;
   this.course_name = course.course_name;
   this.annual_tuition = course.annual_tuition;
   this.university_id = course.university_id;
   this.level_id = course.level_id;
};

Course.find = (result: any) => {
    const statement = `SELECT * FROM Course 
        INNER JOIN 
            EducationLevel ON EducationLevel.level_id = Course.level_id 
        INNER JOIN 
            University ON University.university_id = Course.university_id 
            INNER JOIN 
                Country ON Country.country_id = University.country_id
    `;
    sql.query(statement, (err: any, res: any) => {
        if (err) {
            result(null, err);
            return;
        }

        result(null, res);
    })
};

module.exports = Course;