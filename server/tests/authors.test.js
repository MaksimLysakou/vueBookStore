const supertest = require('supertest');
const chai = require('chai');

const app = require('../bin/www');
const mockupData = require('../data/authors.mockup.data');

const assert = chai.assert;

/* eslint consistent-return: "off" */

describe('Authors', () => {
  describe('HTTP API endpoints', () => {
    describe('GET /', () => {
      it('should return author collection', done => {
        supertest(app)
          .get('/api/authors/')
          .expect(200)
          .end((err, res) => {
            if (err) {
              return done(err);
            }
            const authors = res.body.authors;
            assert.equal(authors, mockupData);
            done();
          });
      });
    });
    describe('GET /:id', () => {
      it('should return specific author', done => {
        supertest(app)
          .get(`/api/authors/${mockupData[0].id}`)
          .expect(200)
          .end((err, res) => {
            if (err) {
              return done(err);
            }
            const author = res.body.author;
            assert.equal(author, mockupData[0]);
            done();
          });
      });
      it('should return error if author not exist', done => {
        supertest(app)
          .get('/api/authors/thereIsNoAuthorWithThisId')
          .expect(404)
          .end((err, res) => {
            if (err) {
              return done(err);
            }
            assert.property(res.body, 'errors');
            assert.typeOf(res.body, 'object');
            assert.equal(res.body.errors[0], 'Author not exist');
            done();
          });
      });
    });
  });
});
