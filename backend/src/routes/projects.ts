import express from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Middleware to get user from token
const authenticate = (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as JwtPayload;
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};

router.get('/', authenticate, async (req: any, res) => {
  const projects = await prisma.project.findMany({ where: { userId: req.userId } });
  res.json(projects);
});

router.post('/', authenticate, async (req: any, res) => {
  const { name } = req.body;
  const project = await prisma.project.create({
    data: { name, userId: req.userId },
  });
  res.json(project);
});

router.put('/:id', authenticate, async (req: any, res) => {
  const { name } = req.body;
  const project = await prisma.project.update({
    where: { id: req.params.id, userId: req.userId },
    data: { name },
  });
  res.json(project);
});

router.delete('/:id', authenticate, async (req: any, res) => {
  await prisma.project.delete({
    where: { id: req.params.id, userId: req.userId },
  });
  res.json({ message: 'Deleted' });
});

export default router;