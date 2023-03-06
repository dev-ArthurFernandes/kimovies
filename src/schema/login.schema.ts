import { z } from 'zod';

const loginRequest = z.object({
    email: z.string().email(),
    password: z.string()
})

export default loginRequest