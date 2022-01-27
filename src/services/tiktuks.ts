import { ITikTuk } from 'domain/tiktuk';
import { TikTuksRepository } from 'repositories';

export async function getTikTuks({
  limit,
}: {
  limit: number;
}): Promise<ITikTuk[]> {
  const tiktuks = await TikTuksRepository.getTikTuks({ limit });
  return tiktuks;
}
