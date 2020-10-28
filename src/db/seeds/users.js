exports.seed = (knex) => {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        {
          id: 1,
          email: "user001@gmail.com",
          username: "User",
          password:
            "$2a$12$28Shq8q./DPzkGOOORykj.0h5dPphYwSwKPVQx3depSqPyexLrj70", //test
        },
      ]);
    });
};
