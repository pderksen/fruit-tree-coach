import { z } from "zod";
import { FRUIT_TREE_TYPES } from "@/lib/fruit-tree-data";
import type { AgeBracket, FruitTreeType } from "@/lib/types";

const fruitTreeTypeSchema = z.enum(
  FRUIT_TREE_TYPES as [FruitTreeType, ...FruitTreeType[]],
);

const ageBracketSchema = z.enum([
  "sapling",
  "young",
  "maturing",
  "mature",
]) satisfies z.ZodType<AgeBracket>;

export const profileRowSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  created_at: z.string(),
});

export const profileSchema = profileRowSchema.transform((row) => ({
  id: row.id,
  name: row.name,
  createdAt: row.created_at,
}));

export type ProfileRow = z.infer<typeof profileRowSchema>;
export type Profile = z.infer<typeof profileSchema>;

export const orchardRowSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  name: z.string(),
  zip_code: z.string().nullable(),
  zone: z.string().nullable(),
  created_at: z.string(),
});

export const orchardSchema = orchardRowSchema.transform((row) => ({
  id: row.id,
  userId: row.user_id,
  name: row.name,
  zipCode: row.zip_code ?? "",
  zone: row.zone ?? "",
  createdAt: row.created_at,
}));

export type OrchardRow = z.infer<typeof orchardRowSchema>;
export type OrchardWithUser = z.infer<typeof orchardSchema>;

export const newOrchardSchema = z.object({
  userId: z.string().uuid(),
  name: z.string().min(1).default("My Orchard"),
  zipCode: z.string().optional(),
  zone: z.string().optional(),
});

export type NewOrchard = z.infer<typeof newOrchardSchema>;

export const treeRowSchema = z.object({
  id: z.string().uuid(),
  orchard_id: z.string().uuid(),
  name: z.string(),
  type: fruitTreeTypeSchema,
  variety: z.string().nullable(),
  planted_year: z.number().int().nullable(),
  planted_date: z.string().nullable(),
  age_bracket: ageBracketSchema.nullable(),
  description: z.string().nullable(),
  status_label: z.string().nullable(),
  status_description: z.string().nullable(),
  created_at: z.string(),
});

const optional = <T>(v: T | null): T | undefined => (v === null ? undefined : v);

export const treeSchema = treeRowSchema.transform((row) => ({
  id: row.id,
  orchardId: row.orchard_id,
  name: row.name,
  type: row.type,
  variety: optional(row.variety),
  plantedYear: optional(row.planted_year),
  plantedDate: optional(row.planted_date),
  ageBracket: optional(row.age_bracket),
  description: optional(row.description),
  statusLabel: optional(row.status_label),
  statusDescription: optional(row.status_description),
}));

export type TreeRow = z.infer<typeof treeRowSchema>;

export const newTreeSchema = z.object({
  orchardId: z.string().uuid(),
  name: z.string().min(1),
  type: fruitTreeTypeSchema,
  variety: z.string().optional(),
  plantedYear: z.number().int().optional(),
  plantedDate: z.string().optional(),
  ageBracket: ageBracketSchema.optional(),
  description: z.string().optional(),
  statusLabel: z.string().optional(),
  statusDescription: z.string().optional(),
});

export type NewTree = z.infer<typeof newTreeSchema>;

const taskCategorySchema = z.enum([
  "pruning",
  "feeding",
  "monitoring",
  "harvesting",
  "protection",
]);

export const taskRowSchema = z.object({
  id: z.string().uuid(),
  tree_id: z.string().uuid(),
  title: z.string(),
  why: z.string().nullable(),
  done: z.boolean(),
  created_at: z.string(),
  due_date: z.string().nullable(),
  category: taskCategorySchema.nullable(),
  priority: z.boolean(),
  season: z.string().nullable(),
  time_window: z.string().nullable(),
  description: z.string().nullable(),
  guide_task_id: z.string().nullable(),
  trees: z
    .object({ name: z.string(), type: fruitTreeTypeSchema })
    .nullable()
    .optional(),
});

export const taskSchema = taskRowSchema.transform((row) => ({
  id: row.id,
  treeId: row.tree_id,
  treeName: row.trees?.name ?? "",
  treeType: row.trees?.type,
  title: row.title,
  why: row.why ?? "",
  done: row.done,
  dueDate: optional(row.due_date),
  category: optional(row.category),
  priority: row.priority,
  season: optional(row.season),
  timeWindow: optional(row.time_window),
  description: optional(row.description),
  guideTaskId: optional(row.guide_task_id),
}));

export type TaskRow = z.infer<typeof taskRowSchema>;

export const newTaskSchema = z.object({
  treeId: z.string().uuid(),
  title: z.string().min(1),
  why: z.string().optional(),
  done: z.boolean().default(false),
  dueDate: z.string().optional(),
  category: taskCategorySchema.optional(),
  priority: z.boolean().default(false),
  season: z.string().optional(),
  timeWindow: z.string().optional(),
  description: z.string().optional(),
  guideTaskId: z.string().optional(),
});

export type NewTask = z.infer<typeof newTaskSchema>;

const productCategorySchema = z.enum([
  "fertilizer",
  "pruning-tool",
  "pest-control",
  "other",
]);

const guideStepSchema = z.object({
  stepNumber: z.number().int(),
  title: z.string(),
  description: z.string(),
  tip: z.string().optional(),
  diagramImage: z.boolean().optional(),
});

const productRecommendationSchema = z.object({
  name: z.string(),
  category: productCategorySchema,
  description: z.string(),
  affiliateUrl: z.string().optional(),
});

export const guideContentSchema = z.object({
  treeType: fruitTreeTypeSchema,
  title: z.string(),
  introduction: z.string(),
  steps: z.array(guideStepSchema),
  toolsNeeded: z.array(z.string()),
  productRecommendations: z.array(productRecommendationSchema),
  researchNotes: z.string().optional(),
});

export const guideRowSchema = z.object({
  id: z.string(),
  content: guideContentSchema,
  source: z.string(),
});

export const guideSchema = guideRowSchema.transform((row) => ({
  id: row.id,
  source: row.source,
  ...row.content,
}));

export type GuideRow = z.infer<typeof guideRowSchema>;
