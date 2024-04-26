import { z } from "zod";


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
})
export type PublishData = z.infer<typeof PublishSchema>


export const CommentSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  description: z.string().min(5, "Deve conter no mínimo 5 caracteres."),
  email: z.string().email("Deve ser um e-mail válido")
});
export type CommentData = z.infer<typeof CommentSchema>;

export const ContactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Deve ser um e-mail válido"),
  message: z.string().min(1, "Tópico é obrigatório"),
  description: z.string().min(5, "Deve conter no mínimo 5 caracteres."),
});
// export type CommentData = z.infer<typeof CommentSchema>;
