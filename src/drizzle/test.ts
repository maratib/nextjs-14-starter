import { db } from "@/drizzle/db";
import { posts, users } from "./schema";
import { count, eq } from "drizzle-orm";

async function findManyUsersWithPosts() {
  const users = await db.query.users.findMany({
    with: {
      posts: true,
    },
  });
  console.log(JSON.stringify(users));
}

async function findManyPostsWithUsers() {
  const posts = await db.query.posts.findMany({
    with: {
      author: true,
    },
  });

  console.log(JSON.stringify(posts));
}

// SELECT users.*, count( posts.author_id )
// FROM users LEFT JOIN posts ON users.id=posts.author_id
// GROUP BY users.id
async function findManyWithCount() {
  const userList = await db
    .select({ user: users, count: count(posts.authorId) })
    .from(users)
    .leftJoin(posts, eq(users.id, posts.authorId))
    .groupBy(users.id);
  console.log(JSON.stringify(userList));
}

// findManyUsersWithPosts();
// findManyPostsWithUsers();
findManyWithCount();
