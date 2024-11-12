import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { tickets } from "@/db/schema";
import { z } from "zod";

export const insertTicketsSchema = createInsertSchema(tickets, {
  id: z.union([z.number(), z.literal("(New)")]),
  title: (schema) => schema.title.min(1, "Title is required"),
  description: (schema) => schema.description.min(1, "Description is required"),
  tech: (schema) => schema.tech.email("Invalid email address"),
});

export const selectTicketsSchema = createSelectSchema(tickets);

export type insertTicketsSchemaType = typeof insertTicketsSchema._type;

export type selectTicketsSchemaType = typeof selectTicketsSchema._type;
