export interface ContentIndexReplacementPlan {
  chunks: string[];
  staleChunkIndexes: number[];
}

/**
 * Every replacement clears the fixed chunk range first. This prevents a
 * shorter approved snapshot from leaving searchable tail content from its
 * predecessor.
 */
export function buildContentIndexReplacementPlan(content: string): ContentIndexReplacementPlan {
  const chunkSize = 500;
  const chunks: string[] = [];
  for (let index = 0; index < content.length && chunks.length < 100; index += chunkSize) {
    chunks.push(content.slice(index, index + chunkSize));
  }
  return {
    chunks,
    staleChunkIndexes: Array.from({ length: 100 }, (_, index) => index),
  };
}
