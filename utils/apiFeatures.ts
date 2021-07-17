class APIFeatures {
    query: any;
    queryString: any;
    constructor(query: any, queryString: any) {
        this.query = query;
        this.queryString = queryString;
    }

    sort() {
        if (this.queryString.sort) {
            const sortBy = (this.queryString.sort).split(',').join(' ');
            this.query - this.query.sort(sortBy);
        }
        return this;
    }

    paginate() {
        console.log('query string is ', this.queryString)
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 10;
        const skip = (page - 1) * limit;

        this.query = this.query.skip(skip).limit(limit);
        return this;
    }
}

module.exports = APIFeatures;