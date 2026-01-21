import { jest } from '@jest/globals';

// Mock the database connection before importing anything else
jest.unstable_mockModule('../db.js', () => ({
    db: {
        query: jest.fn(),
        connect: jest.fn(),
    },
}));

// Dynamic imports are required when using unstable_mockModule
const { db } = await import('../db.js');
const { default: authRoutes } = await import('../routes/auth.js');
const { default: express } = await import('express');
const { default: request } = await import('supertest');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

describe('POST /api/auth/login', () => {
    it('devrait retourner 200 et les données utilisateur pour des identifiants valides', async () => {
        const mockUser = { id: 1, email: 'test@example.com' };

        // Simuler une requête DB réussie
        db.query.mockImplementation((sql, params, callback) => {
            callback(null, [mockUser]);
        });

        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: 'test@example.com', password: '1234' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Connexion réussie');
        expect(res.body.user).toEqual(mockUser);
    });

    it('devrait retourner 401 pour des identifiants invalides', async () => {
        // Simuler un résultat vide pour des identifiants invalides
        db.query.mockImplementation((sql, params, callback) => {
            callback(null, []);
        });

        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: 'wrong@example.com', password: 'wrong' });

        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message', 'Identifiants invalides');
    });
});
