const  app = require('./app');
const request = require('supertest');
const { it } = require('@jest/globals');

describe('Homepage GET', () => {
    it('should return the home page', async () => {
      const res = await request(app).get('/');
      expect(res.status).toBe(200);
    })
})

describe('Homepage Body defined', () => {
    it('should contain my name', async () => {
      const res = await request(app).get('/');
      expect(res.text).toBeDefined();
    })
})

describe('Homepage Body content', () => {
    it('should contain my name', async () => {
      const res = await request(app).get('/');
      expect(res.text).toContain('Matthew Fogel');
    })
})