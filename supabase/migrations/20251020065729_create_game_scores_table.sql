/*
  # Create Game Scores Table

  1. New Tables
    - `game_scores`
      - `id` (uuid, primary key) - Unique identifier for each score entry
      - `player_name` (text) - Name of the player
      - `score` (integer) - Final score achieved
      - `choice_made` (text) - The choice the player selected
      - `created_at` (timestamptz) - Timestamp when score was recorded
  
  2. Security
    - Enable RLS on `game_scores` table
    - Add policy for anyone to insert scores (public game)
    - Add policy for anyone to read scores (public leaderboard)
  
  3. Indexes
    - Add index on `score` column for efficient leaderboard queries
    - Add index on `created_at` for time-based filtering
*/

-- Create game_scores table
CREATE TABLE IF NOT EXISTS game_scores (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  player_name text NOT NULL DEFAULT 'Anonymous',
  score integer NOT NULL DEFAULT 0,
  choice_made text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE game_scores ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert scores (public game)
CREATE POLICY "Anyone can insert scores"
  ON game_scores
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow anyone to read scores (public leaderboard)
CREATE POLICY "Anyone can read scores"
  ON game_scores
  FOR SELECT
  TO public
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_game_scores_score ON game_scores(score DESC);
CREATE INDEX IF NOT EXISTS idx_game_scores_created_at ON game_scores(created_at DESC);