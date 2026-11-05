/**
 * Scores how well `query` matches `text` as a case-insensitive subsequence.
 * Consecutive characters and matches at word starts score higher; gaps lower the score.
 *
 * @param {string} query
 * @param {string} text
 * @returns {number | null} `null` when the query does not match, otherwise a positive score (higher is better).
 */
export function fuzzyScore(query, text) {
  const q = String(query).trim().toLowerCase();
  if (!q) return 0;

  const t = String(text).toLowerCase();
  let score = t.includes(q) ? 10 : 0;
  let searchFrom = 0;
  let previousIndex = -1;

  for (const char of q) {
    const index = t.indexOf(char, searchFrom);
    if (index === -1) return null;

    const isWordStart = index === 0 || /[\s\-_/.]/.test(t[index - 1]);
    const isConsecutive = index === previousIndex + 1;
    const gap = index - previousIndex - 1;

    score += 1;
    if (isConsecutive) score += 4;
    if (isWordStart) score += 3;
    score -= Math.min(gap, 5) * 0.1;

    previousIndex = index;
    searchFrom = index + 1;
  }

  return score;
}

/**
 * Scores a command against a query using its label first and its keywords second.
 * Keyword matches are weighted lower so that label matches rank above them.
 *
 * @param {{ label: string, keywords?: string[] }} command
 * @param {string} query
 * @returns {number | null} `null` when neither the label nor any keyword matches.
 */
export function scoreCommand(command, query) {
  let best = fuzzyScore(query, command.label);

  for (const keyword of command.keywords || []) {
    const keywordScore = fuzzyScore(query, keyword);
    if (keywordScore === null) continue;

    const weighted = keywordScore * 0.5;
    if (best === null || weighted > best) {
      best = weighted;
    }
  }

  return best;
}
