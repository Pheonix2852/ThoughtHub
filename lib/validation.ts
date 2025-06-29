import { z } from "zod"

export const formSchema = z.object({
    title:z.string().min(3).max(100),
    description:z.string().min(20).max(1000),
    category:z.string().min(3).max(100),
    link: z.string().url().refine((url) => {
        const validImageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.tiff'];

        const lowerCaseUrl = url.toLowerCase();
        return validImageExtensions.some(ext => lowerCaseUrl.endsWith(ext));
    }),

    pitch:z.string().min(10),
})