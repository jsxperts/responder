import { Request, Response, NextFunction } from 'express';
import { ResponseBuilder } from '../builders';
import { ResponseStatus, StatusCode } from '../enums';

/**
 * Middleware class for injecting ResponseBuilder into Express response object.
 */
export class ResponderMiddleware {
    /**
     * Injects ResponseBuilder into Express response object.
     * @param {Request} req - The Express request object.
     * @param {Response} res - The Express response object.
     * @param {NextFunction} next - The next middleware function.
     */
    public static setup(req: Request, res: Response, next: NextFunction): void {
        res.builder = new ResponseBuilder(
            res,
            StatusCode.OK,
            ResponseStatus.SUCCESS
        );
        next();
    }
}
