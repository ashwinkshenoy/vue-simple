import { describe, it, expect } from 'vitest';
import { fuzzyScore, scoreCommand } from '../src/utils/fuzzy.js';

describe('fuzzyScore', () => {
  it('returns 0 for an empty query', () => {
    expect(fuzzyScore('', 'Anything')).toBe(0);
    expect(fuzzyScore('   ', 'Anything')).toBe(0);
  });

  it('returns null when the query characters do not appear in order', () => {
    expect(fuzzyScore('zx', 'Open file')).toBeNull();
    expect(fuzzyScore('fo', 'Open file')).toBeNull();
  });

  it('matches case-insensitively as a subsequence', () => {
    expect(fuzzyScore('of', 'Open File')).not.toBeNull();
  });

  it('scores a contiguous match above a scattered one', () => {
    const contiguous = fuzzyScore('save', 'Save file');
    const scattered = fuzzyScore('save', 'S a v e something long here');
    expect(contiguous).toBeGreaterThan(scattered);
  });

  it('scores word-start matches above mid-word matches', () => {
    const wordStart = fuzzyScore('ab', 'a b');
    const midWord = fuzzyScore('ab', 'axb');
    expect(wordStart).toBeGreaterThan(midWord);
  });

  it('never returns a negative score for a match', () => {
    expect(fuzzyScore('a', 'b'.repeat(200) + 'a')).toBeGreaterThan(0);
  });
});

describe('scoreCommand', () => {
  it('uses the label when it matches', () => {
    expect(scoreCommand({ label: 'Toggle theme' }, 'theme')).not.toBeNull();
  });

  it('falls back to keywords when the label does not match', () => {
    const command = { label: 'Preferences', keywords: ['settings', 'options'] };
    expect(scoreCommand(command, 'settings')).not.toBeNull();
  });

  it('weights keyword matches below label matches', () => {
    const viaLabel = scoreCommand({ label: 'Settings' }, 'settings');
    const viaKeyword = scoreCommand({ label: 'Preferences', keywords: ['settings'] }, 'settings');
    expect(viaLabel).toBeGreaterThan(viaKeyword);
  });

  it('returns null when neither label nor keywords match', () => {
    expect(scoreCommand({ label: 'Open', keywords: ['file'] }, 'zzz')).toBeNull();
  });
});
