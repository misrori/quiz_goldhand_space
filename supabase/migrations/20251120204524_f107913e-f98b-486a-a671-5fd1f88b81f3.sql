-- Add question_type and correct_answer columns to questions table
ALTER TABLE public.questions 
ADD COLUMN question_type text NOT NULL DEFAULT 'multiple_choice',
ADD COLUMN correct_answer text;

-- Add check constraint for question_type
ALTER TABLE public.questions
ADD CONSTRAINT questions_question_type_check 
CHECK (question_type IN ('multiple_choice', 'number_scale', 'word_cloud'));