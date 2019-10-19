const user = {
  _id: "1",
  name: "Hemin",
  email: "test@gmail.com",
  picture: "https://test.com/asd"
};

module.exports = {
  Query: {
    me: () => user
  }
};
