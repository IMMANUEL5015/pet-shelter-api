import type { Request, Response, NextFunction } from "express"

const ID = /^[1-9]\d*$/;

export const validateNumericId = (
    req: Request<{id: string}>, 
    res: Response<{message: string}>, 
    next: NextFunction
): void => {
    const {id} = req.params;
    if(!ID.test(id)) {
        res.status(400).json({
            message: 'id must be a number'
        });
    } else {
        return next();
    }
}

export const pleaseAuth = (
    req: Request<{id: string}, unknown, {}, {password?: 'please'}>,
    res: Response<{message: string}>,
    next: NextFunction
): void => {
    const {password} = req.query;

    if (password && password === 'please') {
        return next();
    } else {
        res.status(401).json({
            message: 'Unauthorized'
        });
    }
}