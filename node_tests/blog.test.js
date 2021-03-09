const  app = require('../app');
const request = require('supertest');
const { it } = require('@jest/globals');

describe('BLog GET', () => {
    it('should return the blog page', async () => {
      const res = await request(app).get('/Blog');
      expect(res.status).toBe(200);
    })
})

describe('Blog Body defined', () => {
    it('should be defined', async () => {
      const res = await request(app).get('/Blog');
      expect(res.text).toBeDefined();
    })
})

describe('Blog Body content', () => {
    it('should contain my name', async () => {
      const res = await request(app).get('/Blog');
      expect(res.text).toContain('Blog');
    })
})