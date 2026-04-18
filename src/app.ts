import express from 'express';
import cors from 'cors';
import authRoutes from './modules/auth/auth.routes';
import userRoutes from './modules/users/users.routes';
import emplyeesRoutes from './modules/employees/employees.routes';
import referencesRoutes from "./modules/references/reference.routes"
import ordersRoutes from "./modules/orders/orders.routes"
import productionRoutes from "./modules/production/production.routes"
import workLogRoutes from "./modules/work-logs/work-logs.routes"

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/employees', emplyeesRoutes)
app.use('/api/references', referencesRoutes)
app.use('/api/orders', ordersRoutes)
app.use('/api/production', productionRoutes)
app.use('/api/work-logs', workLogRoutes)



app.get('/health', (req, res) => {
  res.json({ ok: true, message: 'API funcionando' });
});


export default app;