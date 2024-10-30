ALTER TABLE "customers" ALTER COLUMN "state" SET DATA TYPE varchar(2);--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "active" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" DROP COLUMN IF EXISTS "status";