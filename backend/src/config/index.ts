import 'dotenv/config';
import { z } from 'zod';

// Schema to define Config
const schema = z.object({
    PINATA_JWT: z.string({ required_error: 'PINATA_JWT is required' }).min(1),
    PINATA_GATEWAY: z.string({ required_error: 'PINATA_GATEWAY_URL is required' }).min(1),
    OLLAMA_ENDPOINT_URL: z.string({ required_error: 'OLLAMA_ENDPOINT_URL is required' }).url(),
    PINATA_PUBLIC_GROUP_ID: z.string({ required_error: 'PINATA_PUBLIC_GROUP_ID is required' }).min(1),
    SAMBA_NOVA_API_KEY: z.string({ required_error: 'SAMBA_NOVA_API_KEY is required' }).min(1),
    NTFY_URL: z.string({ required_error: 'NTFY_URL is required' }).url(),
    NTFY_TOKEN: z.string({ required_error: 'NTFY_TOKEN is required' }).min(1),
    NTFY_TOPIC_NAME: z.string({ required_error: 'NTFY_TOPIC_NAME is required' }).min(1)
});

type ConfigType = z.infer<typeof schema>;

// Ensure that process.env is valid
const envConfig: ConfigType = schema.parse(process.env);

export { envConfig };