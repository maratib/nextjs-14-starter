// Add ./db/db.ts

import { faker } from "@faker-js/faker";
import { db } from "./db";

import { users, type NewUser, posts, type NewPost } from "./schema";

const main = async () => {
  console.log("Seeding started ...");
  const data: NewUser[] = [];

  // Manual Push
  data.push(
    {
      id: "d17bcd2c-ab51-4766-879e-a4d6cc6e9cfa",
      email: "admin@mail.com",
    },
    {
      id: "c81bf275-25fb-4b56-936d-004ffb8ad2b3",
      email: "user@mail.com",
    }
  );

  const newPosts: NewPost[] = [];
  newPosts.push({
    title: "Post 1",
    authorId: "d17bcd2c-ab51-4766-879e-a4d6cc6e9cfa",
  });
  newPosts.push({
    title: "Post 2",
    authorId: "d17bcd2c-ab51-4766-879e-a4d6cc6e9cfa",
  });

  // for (let index = 0; index < 10; index++) {
  //   data.push({
  //     email: faker.internet.email(),
  //   });
  // }

  // console.log(data);
  try {
    await db.insert(users).values(data);
    await db.insert(posts).values(newPosts);
  } catch (error: any) {
    console.log(error.message);
  }
  console.log("Seeding done ...");
};

main();
