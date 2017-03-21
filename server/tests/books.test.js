const supertest = require('supertest');
const chai = require('chai');

const app = require('../bin/www');
const mockupData = require('../data/books.mockup.data');

const assert = chai.assert;

/* eslint consistent-return: "off" */

describe('Books', () => {
  describe('HTTP API endpoints', () => {
    describe('GET /', () => {
      it('should return books collection', done => {
        supertest(app)
          .get('/api/books/')
          .expect(200)
          .end((err, res) => {
            if (err) {
              return done(err);
            }
            const books = res.body.books;
            assert.equal(books, mockupData);
            done();
          });
      });
    });
    describe('GET /:id', () => {
      it('should return specific book', done => {
        supertest(app)
          .get(`/api/books/${mockupData[0].id}`)
          .expect(200)
          .end((err, res) => {
            if (err) {
              return done(err);
            }
            const book = res.body.book;
            assert.equal(book, mockupData[0]);
            done();
          });
      });
      it('should return error if book not exist', done => {
        supertest(app)
          .get('/api/books/thereIsNoBookWithThisId')
          .expect(404)
          .end((err, res) => {
            if (err) {
              return done(err);
            }
            assert.property(res.body, 'errors');
            assert.typeOf(res.body, 'object');
            assert.equal(res.body.errors[0], 'Book not exist');
            done();
          });
      });
    });
  });
});
