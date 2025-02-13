const { faker } = require("@faker-js/faker");
const { addReview } = require("./objects");

xdescribe("🌶️🌶️🌶️ Challenge", () => {
  let book;
  let newReview;

  beforeEach(() => {
    book = {
      title: faker.book.title(),
      author: faker.book.author(),
      publishedYear: faker.date.past().getFullYear(),
      genre: faker.book.genre(),
    };
    newReview = {
      reviewer: faker.person.fullName(),
      comment: faker.lorem.sentence(),
    };
  });

  xdescribe("addReview", () => {
    it("should add a review to an exist array of reviews", () => {
      book.reviews = [
        {
          reviewer: faker.person.fullName(),
          comment: faker.lorem.sentence(),
        },
      ];
      const { reviewer, comment } = newReview;
      const updatedBook = addReview(book, reviewer, comment);
      expect(updatedBook.reviews).toContainEqual(newReview);
      expect(updatedBook.reviews.length).toBe(2);
    });

    it("should create a review array if one didn't already exist", () => {
      const { reviewer, comment } = newReview;
      const updatedBook = addReview(book, reviewer, comment);
      expect(updatedBook.reviews).toContainEqual(newReview);
    });
  });
});
