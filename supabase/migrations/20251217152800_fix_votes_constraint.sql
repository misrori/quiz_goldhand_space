-- Drop the old unique constraint
ALTER TABLE public.votes
DROP CONSTRAINT IF EXISTS votes_room_id_anonymous_user_id_key;

-- Add the new unique constraint including question_id
ALTER TABLE public.votes
ADD CONSTRAINT votes_room_id_user_question_key 
UNIQUE (room_id, anonymous_user_id, question_id);
