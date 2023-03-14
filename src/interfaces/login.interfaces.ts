import { z } from 'zod';
import { loginRequest } from "../schema";

type login = z.infer<typeof loginRequest>


export {
    login
}