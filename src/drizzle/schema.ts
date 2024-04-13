import {
  uuid,
  pgTable,
  varchar,
  timestamp,
  pgEnum,
  boolean,
  serial,
} from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";

export const rolesEnum = pgEnum("roles", ["ADMIN", "VENDOR", "USER"]);

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 150 }).unique(),
  role: rolesEnum("role").default("USER").notNull(),
  active: boolean("active").default(false),
  del: boolean("del").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  authorId: uuid("author_id")
    .notNull()
    .references(() => users.id),
  active: boolean("active").default(true),
  del: boolean("del").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Post = InferSelectModel<typeof posts>;
export type NewPost = InferInsertModel<typeof posts>;

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));

// export const postRelations = relations(posts, ({ one }) => ({
//   author: one(users, {
//     fields: [posts.authorId],
//     references: [users.id],
//   }),
// }));
