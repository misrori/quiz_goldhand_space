-- Add timer and results reveal fields to questions table
ALTER TABLE public.questions 
ADD COLUMN timer_seconds INTEGER DEFAULT 20,
ADD COLUMN results_revealed BOOLEAN DEFAULT false;

-- Add comment for clarity
COMMENT ON COLUMN public.questions.timer_seconds IS 'Timer in seconds before revealing results for knowledge check questions';
COMMENT ON COLUMN public.questions.results_revealed IS 'Whether the correct answers have been revealed to participants';