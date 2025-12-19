ALTER TABLE public.votes
ADD COLUMN question_id UUID NOT NULL DEFAULT gen_random_uuid();

-- Backfill: Set question_id for existing votes if possible (optional, or set to NULL if not needed)
-- UPDATE public.votes SET question_id = ...;

-- Remove default after backfill
ALTER TABLE public.votes
ALTER COLUMN question_id DROP DEFAULT;

-- Add foreign key constraint
ALTER TABLE public.votes
ADD CONSTRAINT votes_question_id_fkey
FOREIGN KEY (question_id) REFERENCES public.questions(id) ON DELETE CASCADE;
