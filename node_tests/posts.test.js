const  app = require('../app');
const request = require('supertest');
const { it } = require('@jest/globals');

describe('Post 1 GET', () => {
    it('should return the post 1 page', async () => {
      const res = await request(app).get('/post1');
      expect(res.status).toBe(200);
    })
})

describe('Post 1 Body defined', () => {
    it('should be defined', async () => {
      const res = await request(app).get('/post1');
      expect(res.text).toBeDefined();
    })
})

describe('Post 1 Body content', () => {
    it('should contain my name', async () => {
      const res = await request(app).get('/post1');
      expect(res.text).toContain('Forever Learning');
    })
})

describe('Post 2 GET', () => {
  it('should return the post 1 page', async () => {
    const res = await request(app).get('/post2');
    expect(res.status).toBe(200);
  })
})

describe('Post 2 Body defined', () => {
  it('should be defined', async () => {
    const res = await request(app).get('/post2');
    expect(res.text).toBeDefined();
  })
})

describe('Post 2 Body content', () => {
  it('should contain my name', async () => {
    const res = await request(app).get('/post2');
    expect(res.text).toContain('Building My New Site');
  })
})