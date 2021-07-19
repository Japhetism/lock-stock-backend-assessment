export{};

const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');


exports.getAll = (Model: any[]) => async (req: { query: any; }, res: { status: (arg0: string | number | undefined) => { (): any; new(): any; send: { (arg0: { message: any; }): void; new(): any; }; json: { (arg0: { status: string | undefined; responseData: any; message: string | undefined; responseCode: string | undefined; }): void; new(): any; }; }; }, next: (arg0: any) => void) => {
    try {
        Model.find(async (err: { message: any; }, data: any) => {
            if (err) {
                const error = `An error occurred while retrieving ${Model}`;
                const err = new AppError(process.env.HTTP_INTERNAL_SERVER_ERROR_STATUS_CODE, process.env.ERROR_STATUS, error);
                return next(err);
            } else {
                const features = new APIFeatures(data, req.query);
                const doc = await features.query;
                res.status(process.env.HTTP_OK_STATUS_CODE).json({
                    status: process.env.SUCCESS_STATUS,
                    responseData: doc,
                    message: process.env.SUCCESS_MESSAGE,
                    responseCode: process.env.SUCCESS_RESPONSE_CODE
                })
            }
        })
    } catch (error) {
        next(error);
    }
}


