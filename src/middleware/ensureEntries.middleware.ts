import { ZodTypeAny } from 'zod';
import { Request, Response, NextFunction } from 'express';

const ensureEntries = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction): void => {
    
    const validation = schema.parse(req.body)

    req.body = validation
    
    console.log(req.body)

    return next()
}

export default ensureEntries