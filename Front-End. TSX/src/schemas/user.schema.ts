import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().min(1,"Nome é obrigatório"),
  email: z.string().email("Deve ser um e-mail válido"),
  password: z.string().min(1,"Senha é obrigatória")
});

export const LoginSchema = UserSchema.omit({
  name: true
});

export type UserData = z.infer<typeof UserSchema>;
export type LoginData = z.infer<typeof LoginSchema>;

// /////////////////////////

export const PublishSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  publiHot: z.boolean(),
  category: z.string(),
  host: z.string(),
  imgHost: z.string(),
  createdAt: z.string(),
  // DetailPublish: z.array(),
})

export type PublishData = z.infer<typeof PublishSchema>