import { z } from "zod";

export const CommentContextSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  likes: z.number(),
  publishId: z.boolean(),
  createdAt: z.string(),
})
export type CommentContextData= z.infer<typeof CommentContextSchema>

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
  comments: z.array(CommentContextSchema)
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
export type ContactData = z.infer<typeof ContactSchema>;

// ///////////////////////

export const DetailPublishSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  publishId: z.string(),
})
export type DetailPublishData = z.infer<typeof DetailPublishSchema>

