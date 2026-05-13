INSERT INTO public.users (name, email, password, role, active)
VALUES ('Admin', 'admin@incentivos.com', '$2b$10$ZhxkePaBSDgDfe4KD.xVyO0Jxyjm8v24hndf2VgJefxEfi/VH5GJ6', 'ADMIN', true)
ON CONFLICT (id) DO NOTHING;
