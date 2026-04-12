-- Replace British spellings in seeded guide content with American English.
-- Targets JSONB text within the `guides.content` column.
UPDATE guides
SET content = REPLACE(
              REPLACE(
              REPLACE(
              REPLACE(
              REPLACE(
              REPLACE(
                content::text,
                'Sterilise', 'Sterilize'),
                'sterilise', 'sterilize'),
                'Sterilising', 'Sterilizing'),
                'sterilising', 'sterilizing'),
                'harbour', 'harbor'),
                'mould', 'mold'
              )::jsonb
WHERE content::text ~ '(Sterilis|sterilis|harbour|mould)';
