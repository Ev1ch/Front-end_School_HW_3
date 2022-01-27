// import Api from 'api';
import { ITikTuk } from 'domain/tiktuk';
// import { ApiRoutes } from 'common';
import TIKTUKS from 'mocks/tiktuks';

// async function getTikTuks({ limit }: { limit: number }): Promise<ITikTuk[]> {
//   const response = await Api.get<ITikTuk[]>({
//     endpoint: ApiRoutes.FEED,
//     query: { limit },
//   });

//   return response;
// }

export const getTikTuks = ({ limit }: { limit: number }): Promise<ITikTuk[]> =>
  new Promise((resolve) => {
    console.log('TikTuks limit', limit);

    setTimeout(() => {
      resolve(TIKTUKS);
    }, 2000);
  });
