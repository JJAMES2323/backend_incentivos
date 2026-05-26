-- ============================================================
-- CONFIGURACION DE ZONA HORARIA COLOMBIA (UTC-5)
-- ============================================================
-- Ejecutar UNA SOLA VEZ en la base de datos (local o Supabase)

-- 1. Configurar timezone a nivel de base de datos
ALTER DATABASE incentivos SET timezone = 'America/Bogota';

-- 2. Configurar timezone a nivel de rol (para Supabase)
ALTER ROLE postgres SET timezone = 'America/Bogota';

-- 3. Verificar configuracion
SHOW timezone;
SELECT now();

-- ============================================================
-- MIGRACION A timestamptz (OPCIONAL - para Supabase)
-- ============================================================
-- Si despliegas en Supabase, los timestamps deben ser timestamptz
-- para que el DEFAULT now() sea consistente con UTC interno.
-- Ejecutar solo si se migra a Supabase:

-- ALTER TABLE users              ALTER COLUMN created_at TYPE timestamptz USING created_at AT TIME ZONE 'America/Bogota';
-- ALTER TABLE employees          ALTER COLUMN created_at TYPE timestamptz USING created_at AT TIME ZONE 'America/Bogota';
-- ALTER TABLE product_references ALTER COLUMN created_at TYPE timestamptz USING created_at AT TIME ZONE 'America/Bogota';
-- ALTER TABLE production_orders  ALTER COLUMN created_at TYPE timestamptz USING created_at AT TIME ZONE 'America/Bogota';
-- ALTER TABLE production_records ALTER COLUMN created_at TYPE timestamptz USING created_at AT TIME ZONE 'America/Bogota';
-- ALTER TABLE liquidations       ALTER COLUMN created_at TYPE timestamptz USING created_at AT TIME ZONE 'America/Bogota';
-- ALTER TABLE liquidation_details ALTER COLUMN created_at TYPE timestamptz USING created_at AT TIME ZONE 'America/Bogota';
-- ALTER TABLE work_logs          ALTER COLUMN created_at TYPE timestamptz USING created_at AT TIME ZONE 'America/Bogota';

-- Tambien cambiar el DEFAULT de CURRENT_TIMESTAMP a now():
-- ALTER TABLE users              ALTER COLUMN created_at SET DEFAULT now();
-- ALTER TABLE employees          ALTER COLUMN created_at SET DEFAULT now();
-- ... (repetir para cada tabla)

-- ============================================================
-- PARA NUEVOS DEPLOYMENTS (empezar desde cero en Supabase)
-- ============================================================
-- Usar timestamptz desde el inicio:
-- CREATE TABLE example (
--   id SERIAL PRIMARY KEY,
--   created_at timestamptz DEFAULT now()
-- );
